const util = require('util');
const Control = require('../Control.js');

var Gate = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Gate, Control);

module.exports = Gate;
