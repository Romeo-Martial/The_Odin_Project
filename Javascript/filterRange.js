// Array -> Array 
// Filters an array to include only numbers within a specified range
function filterRange(arr, a, b) {
    return arr.filter(elt => a <= elt && elt <= b);
}

module.exports = filterRange;