const util = require('util');
const Control = require('../Control.js');

var ValueSelector = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(ValueSelector, Control);

module.exports = ValueSelector;
