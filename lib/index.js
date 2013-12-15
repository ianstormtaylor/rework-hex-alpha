
var convert = require('rgb');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Hex alpha tester.
 */

var tester = /#[0-9a-f]{4}([0-9a-f]{4})?/i;

/**
 * Plugin to convert hex colors with alpha values into their RGBA equivalents
 * for more browser support.
 *
 * @param {Object} stylesheet
 */

function plugin (stylesheet) {
  stylesheet.rules.forEach(function (rule) {
    if (!rule.declarations) return;
    rule.declarations.forEach(function (dec, i) {
      if (!tester.test(dec.value)) return;
      dec.value = convert(dec.value);
    });
  });
}