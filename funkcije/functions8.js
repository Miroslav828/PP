// Write IIFE that replaces the first and the last element of the given array and prints out its
//elements.
//Input array: [4, 5, 11, 9]
//Output array: [ 9, 5, 11, 4]


(function (input) {
    var output = [];
    for (i = 0; i < input.length; i++) {
        if (i === 0) {
            output[input.length - 1] = input[i];
        }
        else if (i === input.length - 1) {
            output[0] = input[i];
        }
        else {
            output[i] = input[i];
        }
    }
    return console.log(output);
})([4, 5, 11, 9]);

//Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

(function (a, b) {

    var c = a * b;
    return console.log('surface area of rectannge is', c);
})(4, 5);

// Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

(function (input) {
    var output = '';
    var count = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] === 'm' || input[i] === 'M') {
            count++;
            output += '*';
        }
        else {
            output += input[i];
        }
    }
    return console.log(output, ',', count);
})('prograMming');

// Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com


(function (name, surname) {
    return console.log(name + '.' + surname + '@gmail.com');
})('pera', 'peric');

// Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28

(function (number) {
    var a = number + '';
    var b = parseFloat(a);
    return console.log(b);

})(0534);

//Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

(function (password) {
    var result = 'Your password is invalid!'
    var count = 0;

    for (i = 0; i < password.length; i++) {
        if (isFinite(parseInt(password[i]))) {
            count++;
        }
    }
    if (count !== 0 && password.length >= 6) {
        result = 'Your password is cool!';
    }
    return console.log(result);

})('Jpi1iiGu');

// option with callback

var password1 = "kkjhmmm";

function isValidPass(pass, successCallback, errorCallback) {
    var count = 0;
    for (i = 0; i < password1.length; i++) {
        if (isFinite(parseInt(password1[i]))) {
            count++;
        }
    }
    if (count !== 0 && password1.length >= 6) {
        return successCallback();
    } else {
        return errorCallback();
    }
}

function goodPass() {
    console.log("Your password is cool!");
}
function badPass() {
    console.log("Your password is invalid!");
}

isValidPass(password1, goodPass, badPass);


// Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
//Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var input = [1, 2, 8, 11, 4, 9, 3];

function isOdd(number) {
    if (number % 2 !== 0) {
      return true;
    } 
  }

(function oddArray(array, action) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if (action(array[i])) {
            newArray[newArray.length] = array[i];
        }
    }
    return console.log(newArray);
})(input, isOdd);







