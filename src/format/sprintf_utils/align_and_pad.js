import Const from './const';
import isNil from '../../helper/object/is_nil';
import padLeft from '../../manipulate/pad_left';
import padRight from '../../manipulate/pad_right';

/**
 * Aligns and pads `subject` string.
 *
 * @ignore
 * @param  {string} subject              The subject string.
 * @param  {string} paddingCharacter     The padding character.
 * @param  {string} [alignmentSpecifier] The alignment specifier that says if the result should be left-justified or right-justified.
 * @param  {number} [width]              The width how many characters this conversion should result in.
 * @return {string}                      Returns the aligned and padded string.
 */
export default function(subject, paddingCharacter, alignmentSpecifier, width) {
  if (isNil(width) || subject.length >= width) {
    return subject;
  }
  var padType = alignmentSpecifier === Const.LITERAL_MINUS ? padRight : padLeft;
  return padType(subject, width, paddingCharacter);
}