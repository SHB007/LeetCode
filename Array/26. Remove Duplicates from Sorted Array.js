var removeDuplicates = function(nums) {
    
    for (let i = 0; i < nums.length;) {
        if (nums[i] === nums[i + 1]) {
            for (let j = i + 1; j < nums.length; j++) {
                nums[j] = nums[j + 1];
            }
            nums.pop();
        }else{
            i=i+1;
        }
    }
    return (nums.length);
};

console.log(removeDuplicates([1,1,2]))