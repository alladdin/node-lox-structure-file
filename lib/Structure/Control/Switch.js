const util = require('util');
const Control = require('../Control.js');

var Switch = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Switch, Control);

Switch.prototype.get_state = function () {
    return {
        'active': (this.states.items['active'].value ? 'on' : 'off')
    };
};

module.exports = Switch;
