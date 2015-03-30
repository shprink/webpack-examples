require('./src/index.es6.js');
require('./src/index.coffee');
require('./src/index.css');
require('./src/index.scss');
require('./src/index.less');

var imgBig = '<img src="' + require("./src/image_big.jpg") + '" />';
var imgSmall = '<img src="' + require("./src/image_small.png") + '" />';


module.exports = function() {
    return null;
};