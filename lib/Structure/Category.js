const util = require('util');
const Room = require('./Room.js');

var Category = function (params) {
    this.type = params.type;
    this.color = params.color;

    Room.apply(this, [params]);
};

util.inherits(Category, Room);

module.exports = Category;
