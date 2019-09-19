var removeDuplicates = function(nums) {
    let leftPoint = 0;
    let rightPoint = 1;

    while (rightPoint < nums.length) {
        //if the rightPoint is different than left,
        if (nums[leftPoint] !== nums[rightPoint]){
            //remove element from the right
            let movingEl = nums[rightPoint];
            nums.splice(rightPoint, 1);
            //use splice to insert it to the right of left point
            nums.splice(leftPoint + 1, 0, movingEl);
            //turn left point to that index
            leftPoint++;
        }
        //right point moves forward
        rightPoint++;
    }
    return nums.slice(0, leftPoint + 1)
};

console.log(removeDuplicates([1,1,2]));