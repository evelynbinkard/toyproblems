const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let currMinIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[currMinIndex]) {
                currMinIndex = j;
            }
        }
        let currMin = array[i];
        array[i] = array[currMinIndex];
        array[currMinIndex] = currMin;
    }
    return array;
};

console.log(selectionSort([2,3,5,1,4]));