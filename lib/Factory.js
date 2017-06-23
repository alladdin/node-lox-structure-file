const fs = require('fs');
const Structure = require('./Structure.js');
const MiniServerInfo = require('./Structure/MiniServerInfo.js');
const DateSpan = require('./Structure/DateSpan.js');
const User = require('./Structure/User.js');
const GlobalStates = require('./Structure/GlobalStates.js');
const UUID = require('./Structure/UUID.js');
const ListByKey = require('./Structure/ListByKey.js');
const Room = require('./Structure/Room.js');
const Category = require('./Structure/Category.js');


var Factory = function (on_unknown_control) {
    this.controls = {};
    this.on_unknown_control = on_unknown_control;

    var control_directory = __dirname + '/Structure/Control/';

    fs.readdirSync(control_directory).forEach(function(filename){
        var matches;
        if (matches = filename.match(/^(.+)\.js$/)){
            this.controls[matches[1]] = require(control_directory + filename);
        }
    }, this);
};

Factory.prototype.create_from_json = function(json) {
    var last_modified = new Date(json.lastModified);
    return new Structure({
        'lastModified': last_modified,
        'msInfo': new MiniServerInfo(
            json.msInfo,
            new DateSpan( json.msInfo.heatPeriodStart, json.msInfo.heatPeriodEnd ),
            new DateSpan( json.msInfo.coolPeriodStart, json.msInfo.coolPeriodEnd ),
            new User( json.msInfo.currentUser )
        ),
        'globalStates': new GlobalStates({
            'operatingMode': new UUID(json.globalStates.operatingMode),
            'sunrise': new UUID(json.globalStates.sunrise),
            'sunset': new UUID(json.globalStates.sunset),
            'pastTasks': new UUID(json.globalStates.pastTasks),
            'plannedTasks': new UUID(json.globalStates.plannedTasks),
            'notifications': new UUID(json.globalStates.notifications),
            'modifications': new UUID(json.globalStates.modifications),
            'operatingModes': json.operatingModes,
        }),
        'operatingModes': json.operatingModes,
        'rooms': new ListByKey( this._map_list(json.rooms, function(key, value){
            return new Room(value);
        }) ),
        'categories': new ListByKey( this._map_list(json.cats, function(key, value){
            return new Category(value);
        }) ),
        'controls': new ListByKey( this._map_list(json.controls, function(key, value){
            return this._create_control(value);
        }) ),
    });
};

Factory.prototype._create_control = function(value) {
    var sub_controls;
    var states;
    if (value.subControls !== undefined) {
        sub_controls = new ListByKey( this._map_list(value.subControls, function(key, sub_value){
             return this._create_control(sub_value);
        }) );
    }
    if (value.states != undefined) {
        states = new ListByKey( this._map_list(value.states, function(key, sub_value){
             return new UUID(sub_value);
        }) );
    }
    var control_class = this.controls[value.type];
    if (control_class === undefined) {
        this.on_unknown_control(value);
        return undefined;
    }
    return new control_class(value, states, sub_controls);
};

Factory.prototype._map_list = function(list, func) {
    var output_list = {};

    Object.keys(list).forEach( function(entry) {
        let output_item = func.call(this, entry, list[entry]);
        if (output_item !== undefined){
            output_list[entry] = output_item;
        }
    }, this);

    return output_list;
};

module.exports = {
    'create_from_json': function(json, on_unknown_control) {
        on_unknown_control = typeof on_unknown_control !== 'undefined' ? on_unknown_control : function(value){
            throw new Error("Invalid type of control '"+value.type+"'");
        };
        var factory = new Factory(on_unknown_control);
        return factory.create_from_json(json);
    }
};
