const imageMeta = require('../index.js');
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

describe('testimg.jpg', function() {
    let data;

    beforeEach(function(done) {
        imageMeta(__dirname + '/testimg.jpg', function(meta) {
            data = meta;
            done();
        });
    });

    it('should have exif and iptc', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data).length, 2);
    });
    it('should have 7 exif groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.exif).length, 7);
    });
    it('should have 11 iptc groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.iptc).length, 11);
    });

    // We can have more its here
});

describe('testimg-nometa.jpg', function() {
    let data;

    beforeEach(function(done) {
        imageMeta(__dirname + '/testimg-nometa.jpg', function(meta) {
            data = meta;
            done();
        });
    });

    it('should have 7 exif groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.exif).length, 7);
    });
    it('should have 0 iptc groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.iptc).length, 0);
    });

    // We can have more its here
});


describe('testimg-basic.jpg', function() {
    let data;

    beforeEach(function(done) {
        imageMeta(__dirname + '/testimg-basic.jpg', function(meta) {
            data = meta;
            done();
        });
    });

    it('should have 7 exif groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.exif).length, 7);
    });
    it('should have 3 iptc groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.iptc).length, 3);
    });

    // We can have more its here
});
describe('testimg-strippedexif.jpg', function() {
    let data;

    beforeEach(function(done) {
        imageMeta(__dirname + '/testimg-strippedexif.jpg', function(meta) {
            data = meta;
            done();
        });
    });

    it('should have exif and iptc', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data).length, 2);
    });
    it('should have 7 exif groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.exif).length, 7);
    });
    it('should have 0 iptc groups', function() {
        // Test implementation goes here
        assert.equal(Object.keys(data.iptc).length, 0);
    });

    // We can have more its here
});
