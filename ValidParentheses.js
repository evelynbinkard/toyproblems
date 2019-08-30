/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const inputArr = s.split('');
    
    const recur = (arr) => {
        console.log('begin recur', arr)
        if (arr.length === 1) {
            return false;
        } else if (arr.length === 0) {
            
            return true;
        } else if (arr.length === 2 && checkForMatch(arr[0], arr[1])) {
            
            return true;
        } else if (arr[0] === ')' || arr[0] === ']' || arr[0] === '}') {
            return false;
        } else {
            
            for (let i = 1; i < arr.length; i++) {
                console.log('in loop', arr)
                if (checkForMatch(arr[0], arr[i])) {
                
                    let copyArray = arr.slice(1, i);
                    console.log('copy before conditionals', copyArray)
                    if (copyArray.length === 2 && checkForMatch(copyArray[0], copyArray[1])) {
                        return true;
                    }
                    if (copyArray.length === 2 && !checkForMatch(copyArray[0], copyArray[1]) && !arr[i+1]) {
                        return false;
                    }
                    console.log('copy', copyArray)
                    if (copyArray.length === 1 && !arr[i+1]) {
                        return false;
                    }
                    console.log(i)
                    console.log('before splice conditional', arr)
                    if (arr[i+1]) {
                        let spliced = arr.splice(i + 1) 
                        console.log('spliced', spliced)
                        return recur(copyArray.concat(spliced));
                    } else {
                        return recur(copyArray)
                    }
        
                }
                if ((i === arr.length - 1) && !checkForMatch(arr[0], arr[i])) {
                    return false;
                }
            }
        }
    }
    return recur(inputArr);
};

const checkForMatch = (openingString, closingString) => {
    if (openingString === '(' && closingString === ')') {
        return true;
    }
    if (openingString === '[' && closingString === ']') {
        return true;
    }
    if (openingString === '{' && closingString === '}') {
        return true;
    }
    return false;
};

console.log(isValid("(([]){})"));
