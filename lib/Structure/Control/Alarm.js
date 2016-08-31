const util = require('util');
const Control = require('../Control.js');

var Alarm = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Alarm, Control);

module.exports = Alarm;
