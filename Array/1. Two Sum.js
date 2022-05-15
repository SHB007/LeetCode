const prompt = require("prompt-sync")();

// var numbers = [];
// numbers = parseInt(prompt());

// var target = 0;
// target = parseInt(prompt());

// var output = [];

var nums = [1, 2, 3, 4, 5];
var target = 5;

var twoSum = function(nums, target) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push(i);
                output.push(j);
                break
            }
        }
    }
    return output
};