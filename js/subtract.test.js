const subtract = require('./subtract')

test('subtracting two numbers', () =>{
    expect(
        subtract(4, 2)
        ).toBe(2)
});