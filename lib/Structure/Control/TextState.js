const util = require('util');
const Control = require('../Control.js');

var TextState = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(TextState, Control);

module.exports = TextState;
