import  {reverseString,stringLength} from "./sum.js";
import Calculator from "./task3.js";
import capitalizeString from "./task4.js"


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

/***************************/


describe('add 3 + 4 = 7', () => {
  test('Added correctly', () => {
    expect(Calculator.add(3,4)).toBe(7);
  });
});

/*******************************/

test('It needs to be a string', () => {
  expect(() => {
    capitalizeString(504);
  }).toThrow();
});

test('hello to Hello', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});

test('morning to Morning', () => {
  expect(capitalizeString('morning')).toBe('Morning');
});

test('hello world to Hello world', () => {
  expect(capitalizeString('hello world')).toBe('Hello world');
});