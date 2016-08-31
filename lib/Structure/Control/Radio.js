const util = require('util');
const Control = require('../Control.js');

var Radio = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Radio, Control);

Radio.prototype.get_state = function () {
    var value = this.states.items['activeOutput'].value;
    return {
        'value': value,
        'text': (value > 0 ? this.details.outputs[value] : this.details.allOff),
    };
};

module.exports = Radio;
