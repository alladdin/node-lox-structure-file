const util = require('util');
const events = require('events');

var Base = function () {
    this.build_uuid_lookup();
};

util.inherits(Base, events.EventEmitter);

Base.prototype.list_sub_items = function() {
    return Object.keys(this).filter(function(item){
        return !item.match(/^_/);
    });
};

Base.prototype.get_sub_item = function(item) {
    return this[item];
};

Base.prototype.build_uuid_lookup = function() {
    var keys = this.list_sub_items();
    this._uuid_lookup = {};

    keys.forEach(function(entry) {
        var sub_item = this.get_sub_item(entry);
        if ((sub_item === undefined) || (sub_item.get_uuids === undefined)){
            return;
        }
        var entry_uuids = sub_item.get_uuids();
        this.add_to_lookup(entry, entry_uuids);
    }, this);
};

Base.prototype.get_uuids = function() {
    return Object.keys(this._uuid_lookup);
};

Base.prototype.add_to_lookup = function(name, uuids) {
    uuids.forEach(function(entry) {
        if (this._uuid_lookup[entry] === undefined){
            this._uuid_lookup[entry] = [];
        }
        this._uuid_lookup[entry].push(name);
    }, this);
};

Base.prototype.set_value_for_uuid = function(uuid, value) {
    var result = this.set_value(value);
    if (!result) {
        var route = this._uuid_lookup[uuid];
        if (route !== undefined) {
            route.forEach(function(entry) {
                if (this.get_sub_item(entry).set_value_for_uuid(uuid, value)) {
                    result = true;
                }
            }, this);
        }
    }

    return result;
};

Base.prototype.set_value = function(value) {
    return false;
};

module.exports = Base;
