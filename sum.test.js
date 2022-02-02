import  {reverseString,stringLength} from "./sum.js";

test("check length of the string", () => {
  expect(stringLength('hello')).not.toBe(3);
});

test('string length is 10', () => {
  expect(stringLength('abcdefghi')).toBe(9);
});

test('string length is 3', () => {
  expect(stringLength('abc')).toBe(3);
});

test('reverse the string', () => {
  expect(reverseString('abc')).toBe('cba'); 
})

test('Too large', () => {
  expect(() => {
    stringLength('abcdefghijklm');
  }).toThrow();
});

test('Too small', () => {
  expect(() => {
    stringLength('');
  }).toThrow();
});