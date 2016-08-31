const util = require('util');
const Control = require('../Control.js');
const sprintf = require("sprintf-js").sprintf;

var InfoOnlyAnalog = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(InfoOnlyAnalog, Control);

InfoOnlyAnalog.prototype.get_state = function () {
    var value = this.states.items['value'].value;
    var error = this.states.items['error'];

    var output_states = {
        'value': sprintf(this.details.format, value),
    };

    if (error && error.value){
        output_states['error'] = 1;
    }

    return output_states;
};

module.exports = InfoOnlyAnalog;
