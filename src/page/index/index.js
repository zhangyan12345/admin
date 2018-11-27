
require('./index.css');
require('page/common/nav/index.js');
var navSide = require('page/common/nav-side/index.js');
var _index = {
    init: function () {
        navSide.init({
            name: 'index'
        });
    }
};
$(function () {
    _index.init();
});

