const util = require('util');
const Control = require('../Control.js');

var Sauna = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Sauna, Control);

module.exports = Sauna;
