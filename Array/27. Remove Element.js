var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === val) {
            for (let j = i; j < nums.length; j++) {
                nums[j] = nums[j + 1];
            }
            nums.pop();
        } else {
            i = i + 1;
        }
    }
    return (nums.length);
};


console.log(removeElement([3, 2, 2, 3], 3));