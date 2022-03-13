const sum = require('./tasks');

test('sum', () => {
    const salary = 100;
    const add = 20;

    const result = sum(salary, add);

    expect(result).toBe(120);
})