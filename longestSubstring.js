var lengthOfLongestSubstring = function(s) {
    let leftIndex = 0;
    let rightIndex = 1;
    let longest = '';
    let currSub = s.substring(leftIndex, rightIndex);

    while (rightIndex <= s.length - 1){
        console.log(longest, currSub)
        if (!currSub.includes(s[rightIndex])) {
            currSub += s[rightIndex];
            if (currSub.length > longest) {
                longest = currSub;
            }
            rightIndex++
        } else {
            if (leftIndex === rightIndex) {
                
                rightIndex++
            } else {
                leftIndex++
            }
        }
            
    }
    
   
    console.log(longest)
    return longest.length;
};

console.log(lengthOfLongestSubstring("pwwkew"))