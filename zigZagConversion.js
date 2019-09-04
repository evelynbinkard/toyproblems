var convert = function(s, numRows) {
    //set up a matrix with numRows of arrays
    const arr = s.split('');
    const matrix = [];
    for (let r = 0; r < numRows; r++) {
            matrix.push([]);
    }
    
    let count = 0;

    while (arr.length > 0) {
        console.log(matrix)
        if (count < numRows) {
                matrix[count].push(arr.shift());
                count++;
        } else {
                console.log('in else statement')
                for (let i = (numRows - 2); i >= 1; i--) {
                        matrix[i].push(arr.shift());
                }
                count = 0;
        }
    }
    return matrix.map(row => row.join('')).join('')

};

console.log(convert('paypalishiring', 4));