const util = require('util');
const Control = require('../Control.js');

var Heatmixer = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Heatmixer, Control);

module.exports = Heatmixer;
