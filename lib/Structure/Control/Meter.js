const util = require('util');
const Control = require('../Control.js');

var Meter = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Meter, Control);

module.exports = Meter;
