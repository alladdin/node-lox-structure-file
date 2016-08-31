const util = require('util');
const Control = require('../Control.js');

var Tracker = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Tracker, Control);

module.exports = Tracker;
