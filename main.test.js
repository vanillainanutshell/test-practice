const { expect } = require('@jest/globals');
const { default: expectationResultFactory } = require('jest-jasmine2/build/expectationResultFactory');
const stringLength = require('./modules/stringLength.js');
const reverseString = require('./modules/reverseString');
const simpleCalc = require('./modules/calculator');
const capitalize = require('./modules/capitalize');


describe('Testing stringLength', () => {
    test('Expect length of string to be > 10', () => {
        expect(stringLength('012345678910')).toBe('string is too long');
    })
    test('Expect length of string to be < 1', () => {
        expect(stringLength('')).toBe('string is empty');
    })

})

describe('Testing reverseString', () => {
    test('Expect string to be reversed', () => {
        expect(reverseString('banana')).toBe('ananab');
    })
})

describe('Testing calculator', () => {
    test('Expect result to be 2', () => {
        expect(simpleCalc.add()).toBe(2);
    });
    test('Expect result to be 0', () => {
        expect(simpleCalc.subtract()).toBe(0);
    });
    test('Expect result to be 1', () => {
        expect(simpleCalc.divide()).toBe(1);
    });

    test('Expect result to be 1', () => {
        expect(simpleCalc.multiply()).toBe(1);
    });
});

test('Testing captalize', () => {
    expect(capitalize('coding')).toBe('Coding');
});