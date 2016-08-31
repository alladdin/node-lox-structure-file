const util = require('util');
const Base = require('./Base.js');

var ListByKey = function (items) {
    this.items = items;

    Base.apply(this);
};

util.inherits(ListByKey, Base);

ListByKey.prototype.list_sub_items = function() {
    return Object.keys(this.items);
};

ListByKey.prototype.get_sub_item = function(item) {
    return this.items[item];
};

module.exports = ListByKey;
