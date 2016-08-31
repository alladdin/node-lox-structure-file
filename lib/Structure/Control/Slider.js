const util = require('util');
const Control = require('../Control.js');
const sprintf = require("sprintf-js").sprintf;

var Slider = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Slider, Control);

Slider.prototype.get_state = function () {
    var value = this.states.items['value'].value;
    var error = this.states.items['error'].value ? 1 : 0;

    var output_states = {
        'value': sprintf(this.details.format, value),
        'min': sprintf(this.details.format, this.details.min),
        'max': sprintf(this.details.format, this.details.max),
        'step': sprintf(this.details.format, this.details.step),
    };

    if (error){
        output_states['error'] = 1;
    }

    return output_states;
};

module.exports = Slider;
