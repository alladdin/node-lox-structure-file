const util = require('util');
const Control = require('../Control.js');

var Webpage = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Webpage, Control);

module.exports = Webpage;
