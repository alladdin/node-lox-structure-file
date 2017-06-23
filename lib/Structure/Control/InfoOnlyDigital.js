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
        'text': (this.details.text !== undefined ? this.details.text[value] : undefined),
        'color': (this.details.color !== undefined ? this.details.color[value] : undefined),
    };
};

module.exports = InfoOnlyDigital;
