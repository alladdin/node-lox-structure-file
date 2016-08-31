const util = require('util');
const Control = require('../Control.js');

var Pushbutton = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Pushbutton, Control);

module.exports = Pushbutton;
