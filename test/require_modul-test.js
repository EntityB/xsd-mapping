var assert = require('assert');
describe('Test modul', function () {
    describe('#require', function () {
        var xsdMapping = require('../');
        it('xsdMapping is object', function () {
            assert.equal(1, typeof xsdMapping === "object");
        });

        it('xsdMapping.map is function', function () {
            assert.equal(1, typeof xsdMapping.map === "function");
        });
        it('xsdMapping.mapping is function', function () {
            assert.equal(1, typeof xsdMapping.mapping === "function");
        });
    });
});