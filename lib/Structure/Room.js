const util = require('util');
const Base = require('./Base.js');

var Room = function (params) {
    this.id = 'room-'+params.uuid;
    this.uuid = params.uuid;
    this.name = params.name;
    this.image = params.image;
    this.defaultRating = params.defaultRating;
    this.isFavorite = params.isFavorite;

    Base.apply(this);
};

util.inherits(Room, Base);

Room.prototype.build_uuid_lookup = function() {};

Room.prototype.get_uuids = function() {
    return [];
};

Room.prototype.set_value_for_uuid = function(uuid, value) {
    return false;
};


module.exports = Room;
