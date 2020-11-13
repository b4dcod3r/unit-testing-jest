const { test } = require('@jest/globals')
const sum = require('./sum')

test('adds two numbers', () =>{
    expect(sum(4, 2)).toBe(6)
});