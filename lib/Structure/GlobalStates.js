const util = require('util');
const Base = require('./Base.js');

var GlobalStates = function (params) {
    this.id = 'global-states'; 
    this.operatingMode = params.operatingMode;
    this.sunrise = params.sunrise;
    this.sunset = params.sunset;
    this.pastTasks = params.pastTasks;
    this.plannedTasks = params.plannedTasks;
    this.notifications = params.notifications;
    this.modifications = params.modifications;

    this._operatingModes = params.operatingModes;

    Base.apply(this);

    this._register_events();
};

util.inherits(GlobalStates, Base);

GlobalStates.prototype._register_events = function() {
    var that = this;
    this.list_sub_items().forEach(function(entry) {
        this.get_sub_item(entry).on('update', function(uuid, value, source) {
            that.emit('update', uuid, value, source);
            that.emit('state_update', that);
        });
    }, this);
};

GlobalStates.prototype.get_state = function () {
    return {
        'operatingMode': this._operatingModes[this.operatingMode.value],
        'sunrise': this.sunrise.value,
        'sunset': this.sunset.value,
        'notifications': this.notifications.value,
        'modifications': this.modifications.value,
    };
};

GlobalStates.prototype.list_sub_items = function() {
    return Object.keys(this).filter(function(item){
        return !item.match(/^(_|id$)/);
    });
};

module.exports = GlobalStates;
