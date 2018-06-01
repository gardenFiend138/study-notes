// figure out which testing library to use; get setup
import assert from 'assert';
import {
  isUnique,
  isUniqueInPlace,
  myReverse,
  myUnique,
  isAnagram,
  escapeSpaces,
  myTransform,
  getColumnAndRowWithZero,
  setColumnAndRowToZero,
  isSubstring,
  isRotation,
} from '../arrays_and_strings';

let actual;
let expected;

describe('isUnique', () => {
  it('returns true if a string has all unique characters', () => {
    actual = isUnique('abcde');

    assert.equal(actual, true);
  });

  it('returns false if a string does not have all unique characters', () => {
    actual = isUnique('abcdea');

    asert.equal(actual, false);
  });
});

describe('isUniqueInPlace', () => {
  it('returns true if a string has all unique characters', () => {
    actual = isUniqueInPlace('abcde');

    assert.equal(actual, true);
  });

  it('returns false if a string does not have all unique characters', () => {
    actual = isUniqueInPlace('abcdea');

    asert.equal(actual, false);
  });

  // it('')
  /*
   For this one, use hasOwnProperty and iterate through the props, making sure
   that none of it's properties are strings, arrays, or objects
   ??
   */
});
