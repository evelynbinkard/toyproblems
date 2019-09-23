const insertionSort = (array) => {

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let lastSorted = i - 1;
        while (lastSorted >= 0 && current < array[lastSorted]) {
            array[lastSorted + 1] = array[lastSorted];
            lastSorted--
        }
        array[lastSorted + 1] = current;
    }
    return array;
}

console.log(insertionSort([3,6,4,1]));