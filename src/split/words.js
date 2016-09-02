import coerceToString from '../helper/string/coerce_to_string';
import isNil from '../helper/object/is_nil';
import nilDefault from '../helper/undefined/nil_default';
import { REGEXP_WORD } from '../helper/string/regexp';
import toString from '../helper/string/to_string';

/**
 * Splits `subject` into an array of words.
 *
 * @function words
 * @static
 * @since 1.0.0
 * @memberOf Split
 * @param {string} [subject=''] The string to split into words.
 * @param {string|RegExp} [pattern] The pattern to watch words. If `pattern` is not RegExp, it is transformed to `new RegExp(pattern, flags)`.
 * @param {string} [flags=''] The regular expression flags. Applies when `pattern` is string type.
 * @return {Array} Returns the array of words.
 * @example
 * v.words('gravity can cross dimensions');
 * // => ['gravity', 'can', 'cross', 'dimensions']
 *
 * v.words('gravity', /\w{1,2}/g);
 * // => ['gr', 'av', 'it', 'y']
 */
export default function(subject, pattern, flags) {
  var subjectString = coerceToString(subject),
    patternRegExp;
  if (isNil(pattern)) {
    patternRegExp = REGEXP_WORD;
  } else if (pattern instanceof RegExp) {
    patternRegExp = pattern;
  } else {
    var flagsString = toString(nilDefault(flags, ''));
    patternRegExp = new RegExp(toString(pattern), flagsString);
  }
  return nilDefault(subjectString.match(patternRegExp), []);
}