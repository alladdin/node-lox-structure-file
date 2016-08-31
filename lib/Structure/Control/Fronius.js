const util = require('util');
const Control = require('../Control.js');

var Fronius = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Fronius, Control);

module.exports = Fronius;
