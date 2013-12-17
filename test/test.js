
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var rework = require('rework');
var hex = require('..');

describe('rework-hex-alpha', function () {
  it('should work', function () {
    var input = fixture('input');
    var output = fixture('output');
    var css = rework(input).use(hex).toString().trim();
    assert.equal(css, output);
  });
});

/**
 * Read a fixture by file `name`.
 *
 * @param {String} name
 */

function fixture (name) {
  return fs.readFileSync(path.resolve(__dirname, name + '.css'), 'utf8').trim();
}