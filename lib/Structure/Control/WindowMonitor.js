const util = require('util');
const Control = require('../Control.js');

var WindowMonitor = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(WindowMonitor, Control);

WindowMonitor.prototype.get_state = function () {
    return {
        'numOpen': this.states.items['numOpen'].value,
        'numClosed': this.states.items['numClosed'].value,
        'numTilted': this.states.items['numTilted'].value,
        'numOffline': this.states.items['numOffline'].value,
        'numLocked': this.states.items['numLocked'].value,
        'numUnlocked': this.states.items['numUnlocked'].value,
    };
};

module.exports = WindowMonitor;
