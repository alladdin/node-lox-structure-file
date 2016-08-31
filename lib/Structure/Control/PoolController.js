const util = require('util');
const Control = require('../Control.js');

var PoolController = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(PoolController, Control);

module.exports = PoolController;
