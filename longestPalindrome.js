var longestPalindrome = function(s) {
    
    let leftPointIndex = 0;
    let windowSize = s.length;

    //while window fits in the array
    
    while (leftPointIndex + windowSize <= s.length) {
        
        let window = s.slice(leftPointIndex, (leftPointIndex + windowSize));
        //is it a palindrome?
        
        if (isPalindrome(window)){
            
            return window
        } else {
           
            //can the window move to the right?
            if (leftPointIndex + windowSize + 1 <= s.length) {
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

const isPalindrome = (string) => {
    const array = string.split('')
   
    if (array.join('') === array.reverse().join('')) {
        return true;
    } else {
        return false;
    }
};

console.log(longestPalindrome("acecar"))
console.timeEnd('start')

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