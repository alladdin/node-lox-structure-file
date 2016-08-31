const util = require('util');
const Control = require('../Control.js');

var Jalousie = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Jalousie, Control);

module.exports = Jalousie;
