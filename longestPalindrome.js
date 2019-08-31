var longestPalindrome = function(s) {
    const arr = s.split('');
    let leftPointIndex = 0;
    let windowSize = arr.length;

    //while window fits in the array
    while (leftPointIndex + windowSize <= arr.length) {
        
        let window = arr.slice(leftPointIndex, (leftPointIndex + windowSize));
        //is it a palindrome?
        console.log(window)
        if (isPalindrome(window)){
            return window.join('')
        } else {
            console.log(window)
            //can the window move to the right?
            if (leftPointIndex + windowSize + 1 <= arr.length) {
                //if yes
                    //move it move it
                    leftPointIndex += 1
                } else {
                //no?
                    //shrink the window, start over at 0
                    windowSize -= 1;
                    leftPointIndex = 0;
                }
    }}
   
};

const isPalindrome = (array) => {
    if (array.join('') === array.reverse().join('')) {
        return true;
    } else {
        return false;
    }
};

console.log(longestPalindrome("acecar"))

// array.forEach((letter, index) => {
    //const array = s.split('');
//     for (i = array.length - 1; i >= 0; i--) {
        
//         if (letter === array[i]) {

//             let shallow = array.slice(index, i+1)
            
                
//             if ((shallow.join('') === shallow.reverse().join('')) && (shallow.join('').length > longest.length)){
//                     longest = shallow.join('');
//             }
//         }
//     }
// })