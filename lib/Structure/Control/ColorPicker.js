const util = require('util');
const Control = require('../Control.js');

var ColorPicker = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(ColorPicker, Control);

module.exports = ColorPicker;
