const insertionSort = (array) => {

    for (let i = 1; i < array.length; i++) {
        let currentVal = array[i];
        let lastSortedInd = i - 1;
        while (lastSortedInd >= 0 && currentVal < array[lastSortedInd]) {
            array[lastSortedInd + 1] = array[lastSortedInd];
            lastSortedInd--
        }
        array[lastSortedInd + 1] = currentVal;
    }
    return array;
}

console.log(insertionSort([3,6,4,1]));