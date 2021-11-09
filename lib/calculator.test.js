const Calculator = require('./calculator');

describe('calculator', () => {
  it('sums two numbers', () => {
    const received = Calculator.add(2, 3);
    const expected = 5;

    expect(received).toEqual(expected);
  });
  it('subtracts number 1 from number 2', () => {
    const received = Calculator.subtract(3, 2);
    const expected = 1;

    expect(received).toBe(expected);
  });
});
