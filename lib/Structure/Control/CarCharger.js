const util = require('util');
const Control = require('../Control.js');

var CarCharger = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(CarCharger, Control);

module.exports = CarCharger;
