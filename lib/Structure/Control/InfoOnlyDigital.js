const util = require('util');
const Control = require('../Control.js');

var InfoOnlyDigital = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(InfoOnlyDigital, Control);

InfoOnlyDigital.prototype.get_state = function () {
    var value = this.states.items['active'].value ? 'on' : 'off';
    return {
        'value': value,
        'text': this.details.text[value],
        'color': this.details.color[value],
    };
};

module.exports = InfoOnlyDigital;
