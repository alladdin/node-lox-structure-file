const util = require('util');
const Base = require('./Base.js');

var Control = function (params, states, subControls) {
    this.id = 'control-'+params.type+'-'+params.uuidAction;
    this.name = params.name;
    this.type = params.type;
    this.uuidAction = params.uuidAction;
    this.defaultRating = params.defaultRating;
    this.isSecured = params.isSecured;
    this.room = params.room;
    this.category = params.cat;
    this.states = states;
    this.details = params.details;
    this.statistic = params.statistic;
    this.subControls = subControls;

    Base.apply(this);

    this._register_events();
};

util.inherits(Control, Base);

Control.prototype.register_state_events = function() {
    var that = this;
    if (this.states){
        Object.keys(this.states.items).forEach(function(item){
            this.states.items[item].on('update',function(uuid, value, source){
                that.emit('update', uuid, value, source);
                that.emit('state_update', that);
            });
        }, this);
    }
};

Control.prototype._register_events = function() {
    var that = this;
    this.register_state_events();
    if (this.subControls){
        Object.keys(this.subControls.items).forEach(function(item){
            this.subControls.items[item].on('update',function(uuid, value, source){
                that.emit('update', uuid, value, source);
            });
        }, this);
    }
};

Control.prototype.get_state = function () {
    var output_states = {};
    if (this.states){
        Object.keys(this.states.items).forEach(function(item){
            output_states[item] = this.states.items[item].value;
        }, this);
    }
    return output_states;
};

module.exports = Control;
