const util = require('util');
const Control = require('../Control.js');

var AudioZone = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(AudioZone, Control);

module.exports = AudioZone;
