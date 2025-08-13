const mapToName = require("./mapToName")

test('empty array', () => {
    expect(mapToName([])).toEqual([]);
});
test('array with one element', () => {
    expect(mapToName([{name: 'Alice', age: 25 }])).toEqual(['Alice']);
});
test('array with multiple elements', () => {
    expect(mapToName([
        {name: 'Alice', age: 25},
        {name: 'Bob', age: 30},
        {name: 'Charlie', age: 35}
    ])).toEqual(['Alice', 'Bob', 'Charlie']);
});
