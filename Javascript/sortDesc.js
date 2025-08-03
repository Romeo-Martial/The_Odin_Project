// Array -> Array 
// Sorts an array in descending order
function sortDesc(arr) {
    // compare the first elt of the array with the first elt of the sorted-rest of the array
    // if this elt is greater than the first elt of the sorted-rest of the array
    // then join it as the first elt of the sorted array
    // else insert it in the sorted-rest of the array
    if (arr.length === 0) {
        return [];
    }
    let sortedArray = sortDesc(arr.slice(1));
    if (arr[0] >= sortedArray[0]) {
        return [arr[0]].concat(sortedArray);
    }
    else {
        return insert(arr[0], sortedArray);
    }
}

function insert(elt, arr){
    // if the array is empty, return an array with the element
    if (arr.length === 0) {
        return [elt];
    }
    // if the element is greater than or equal to the first element of the array
    // then insert it at the beginning
    if (elt >= arr[0]) {
        return [elt].concat(arr);
    }
    // otherwise, insert it in the rest of the array
    return [arr[0]].concat(insert(elt, arr.slice(1)));
}

module.exports = sortDesc;