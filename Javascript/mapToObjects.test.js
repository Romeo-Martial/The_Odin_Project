const mapToObjects = require('./mapToObjects');

test('empty array', () => {
    expect(mapToObjects([])).toEqual([]);
});
test('array with one element', () => {
    expect(mapToObjects([{name: 'Alice', surname: 'Smith', id: 1}])).toEqual([{fullName: 'Alice Smith', id: 1}]);
});
test('array with multiple elements', () => {
    expect(mapToObjects([
        {name: 'Alice', surname: 'Smith', id: 1},
        {name: 'Bob', surname: 'Johnson', id: 2},
        {name: 'Charlie', surname: 'Brown', id: 3}
    ])).toEqual([
        {fullName: 'Alice Smith', id: 1},
        {fullName: 'Bob Johnson', id: 2},
        {fullName: 'Charlie Brown', id: 3}
    ]);
});
