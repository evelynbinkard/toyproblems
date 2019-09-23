const mergeSort = (array) => {
    //base case
    if (array.length <= 1) {
        return array;
    }
    let middle = array.length/2;
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));

};

const merge = (left, right) => {
    const result = [];

    while(left.length || right.length) {
        if (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        } else if (left.length) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result;
}

console.log(mergeSort([9,1,5,0,4,12]))