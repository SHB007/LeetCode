var plusOne = function (digits) {
    let cLength = digits.length - 1;
    if (digits[cLength] == 9) {
        for (let i = cLength; i >= 0; i--) {
            if (digits[i - 1] == 9) {
                digits[i] = 0;
                continue;
            } else if (i == 0 && digits[i] == 9) {
                digits[i] = 1;
                digits.push(0);
            } else {
                digits[i - 1] = digits[i - 1] + 1;
                digits[i] = 0;
                break
            }
        }
    } else {
        digits[cLength] = digits[cLength] + 1;
    }
    return (digits)
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([1, 9, 9]));