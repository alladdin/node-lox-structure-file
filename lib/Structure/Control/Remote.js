const util = require('util');
const Control = require('../Control.js');

var Remote = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Remote, Control);

module.exports = Remote;
