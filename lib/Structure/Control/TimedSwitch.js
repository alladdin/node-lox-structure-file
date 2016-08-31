const util = require('util');
const Control = require('../Control.js');

var TimedSwitch = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(TimedSwitch, Control);

module.exports = TimedSwitch;
