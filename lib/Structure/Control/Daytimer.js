const util = require('util');
const Control = require('../Control.js');
const sprintf = require("sprintf-js").sprintf;

var Daytimer = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(Daytimer, Control);

Daytimer.prototype.get_state = function () {
    var mode = this.states.items['mode'].value;
    var mode_list = this.states.items['modeList'].value;
    var value = this.states.items['value'].value;

    var modes = {};

    if (mode_list){
        mode_list.split(',').forEach(function(list_row) {
            var row = list_row.split(':', 2);
            var name_groups = row[1].match("name=([^=;]+)");
            modes[row[0]] = JSON.parse(JSON.parse('"'+name_groups[1]+'"'));
        }, this);
    }

    var text = '';
    if (this.details.analog){
        text = sprintf(this.details.format, value);
    }else{
        text = value ? this.details.text['on'] : this.details.text['off'];
    }

    return {
        'mode': mode,
        'mode_text': modes[mode],
        'value': value,
        'override': this.states.items['override'].value,
        'needs_activation': this.states.items['needsActivation'].value,
        'text': text,
    };
};

module.exports = Daytimer;
