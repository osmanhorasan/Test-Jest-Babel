const add = require("./sum.js")
describe('sum.js', function () {
    test('add two numbers', () => {
        expect(add(1,5)).toBe(6)
    })
})