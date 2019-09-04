var maxArea = function(height) {
   let result = 0;

   height.forEach((item, index) =>{
       for(let i = index + 1; i < height.length; i++) {
           let currArea = ((i - index) * (Math.min(item, height[i])));
           if (currArea > result) {
               result = currArea;
           }
       }
   })
   return result;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))