const util = require('util');
const Control = require('../Control.js');

var LightController = function (params, states, subControls) {
    Control.call(this, params, states, subControls);
};

util.inherits(LightController, Control);

LightController.prototype.get_state = function () {
    var active_scene = this.states.items['activeScene'].value;
    var scene_list = this.states.items['sceneList'].value;

    var scenes = {
        '0': 'all off',
        '9': 'all on',
    };

    if (scene_list){
        scene_list.split(',').forEach(function(list_row) {
            var row = list_row.split('=', 2);
            scenes[row[0]] = JSON.parse(row[1]);
        }, this);
    }

    return {
        'activeScene': active_scene,
        'text': scenes[active_scene],
    };
};

module.exports = LightController;
