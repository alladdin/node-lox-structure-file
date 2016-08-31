const util = require('util');
const Control = require('../Control.js');

var Intercom = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Intercom, Control);

module.exports = Intercom;
