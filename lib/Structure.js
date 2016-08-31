const util = require('util');
const Base = require('./Structure/Base.js');

var Structure = function (params) {
    this.lastModified = params.lastModified;
    this.msInfo = params.msInfo;
    this.globalStates = params.globalStates;
    this.operatingModes = params.operatingModes;
    this.rooms = params.rooms;
    this.categories = params.categories;
    this.controls = params.controls;
    this.weatherServer = params.weatherServer;
    this.times = params.times;
    this.autopilot = params.autopilot;

    Base.apply(this);

    this._register_events();
};

util.inherits(Structure, Base);

Structure.prototype._register_events = function() {
    var that = this;

    this.globalStates.on('update', function(uuid, value, source){
        that.emit('update', uuid, value, source);
    });

    Object.keys(this.controls.items).forEach(function(item){
        this.controls.items[item].on('update',function(uuid, value, source){
            that.emit('update', uuid, value, source);
        });
    }, this);
};

module.exports = Structure;
