const util = require('util');
const Base = require('./Base.js');

var UUID = function (uuid) {
    this.id = 'uuid-'+uuid;
    this.uuid = uuid;
    this.value = undefined;

    Base.apply(this);
};

util.inherits(UUID, Base);

UUID.prototype.build_uuid_lookup = function() {};

UUID.prototype.get_uuids = function() {
    return [this.uuid];
};

UUID.prototype.set_value = function(value) {
    this.value = value;
    this.emit('update', this.uuid, value, this);
    return true;
};

module.exports = UUID;
