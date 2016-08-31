const util = require('util');
const Control = require('../Control.js');

var Dimmer = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Dimmer, Control);

module.exports = Dimmer;
