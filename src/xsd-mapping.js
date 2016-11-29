var rules = require("./rules");


/**
 * 
 * @param data JSON
 * @param xsd must have format of parsed scheme
 * 
 */
var map = function (data, xsd) {

};

/**
 * 
 * @param xsd 
 * 
 */
var Mapping = function (xsd) {
    this.xsd = xsd;
};

Mapping.prototype = {
    map: function (data) {
        return map(data, this.xsd);
    }
};

module.exports = {
    map: map,
    mapping: function (xsd) {
        return new Mapping(xsd);
    }
};