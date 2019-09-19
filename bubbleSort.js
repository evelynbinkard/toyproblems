const bubbleSort = (array) => {
    let sorted = false;

    while (!sorted) {
        for (let i = 0; i < array.length; i++) {
            sorted = true;

            if (array[i] < array[i-1]) {
                let hold = array[i];
                array[i] = array[i-1];
                array[i-1] = hold;
                sorted = false;
            };
        }
    }
    return array;

};

console.log(bubbleSort([4,7,1,3]))