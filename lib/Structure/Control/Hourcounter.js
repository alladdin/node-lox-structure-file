const util = require('util');
const Control = require('../Control.js');

var Hourcounter = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Hourcounter, Control);

module.exports = Hourcounter;
