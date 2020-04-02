/*
    Write a program to  find factorial of a given number (n)
*/

// Method 1: Recursion method

const factorial = num => {
    if (num < 0) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

console.log(factorial(5)); // 120

// Method 2: Using for loop

const factorial1 = number => {
    var total = 1;
    for (let i = 0; i < number; i++) {
        total = total * (number - i);
    }
    return total;
};

console.log(factorial1(5)); // 120
