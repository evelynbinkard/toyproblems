
const partition = (arr, low, high) => {
    let pivotVal = arr[high];
    let leftIndex = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivotVal) {
            leftIndex++;
            swap(arr, j, leftIndex);
        }
    }

    swap(arr, (leftIndex + 1), high);
    return (leftIndex + 1)
};

const swap = (arr, indexOne, indexTwo) => {
    let hold = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = hold;
}

const quickSort = (arr, low, high) => {
    if (low < high){
        let partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1) 
        quickSort(arr, partitionIndex +1, high);
    }
    return arr;
}

console.log(quickSort([4,8,2,1], 0, 3))