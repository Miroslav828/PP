//1. Write a function to check whether the `input` is a string or not.
// "My random string" = true
//  12  = false

function isString(a) {

    if (typeof a === 'string') {
        var b = 'true';
    } else {
        var b = 'false'
    }
    return b;
}

var result = isString('12');
console.log(result)

//option 2
function isString(a) {
    return typeof a === 'string';
}
var result = isString('12');
console.log(result)

//2. Write a function to check whether a string is blank or not.
// "My random string" = false
// " " = true
// 12 = false
// false = false

function isBlank(c) {
    var d
    if (typeof c === 'string' && c === '') {
        d = 'true';
    } else {
        d = 'false';
    }
    return d;
}

var result = isBlank('some string');
console.log(result);

//3. Write a function that concatenates a given string n times (default is 1).
// "Ha"=  "Ha"
//  "Ha", 3 = 'HaHaHa'

function haHa(string, n) {
    var p = '';
    var i = 0;
    do {
        p += string, i++;
    } while (i < n);

    return p;
}
var result = haHa('Mila', 3);
console.log(result);


// 4. Write a function to count the number of letter occurrences in a string.
// 'My random string', 'n' = 2

function numberOfLetters(string, m) {
    var letter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === m) {
            letter++;
        }
    }
    return letter;
}
var result = numberOfLetters('ovo me bas nervira', 'a');
console.log(result);

//5. Write a function to find the position of the first occurrence of a character in a string. The
//result should be the position of character. If there are no occurrences of the character, the
//function should return -1.

function positionA(string) {
    var a = 1;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            return a
        } else {
            a++;
        }
    }
    if (a > string.length) {
        return -1;
    }
}
var result = positionA('ni jedno slovo ');
console.log(result);

//6. Write a function to find the position of the last occurrence of a character in a string. The
//result should be in human numeration form. If there are no occurrences of the character,
//function should return -1.

function lastA(string) {
    var a;
    var b = 0;
    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === 'a') {
            a = i + 1;
            return a;
        } else {
            b++;
        }
        ;
    } if (b === string.length) {
        return -1;
    }
}
var result = lastA('mnji');
console.log(result);

//7. Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.
//"My random string" -> ["M", "y", null, "r", "a"]
//"Random" ->  ["R"&quot;", "a"&quot;", "n", "d", "o", "m"]

function strToarr(string) {
    var arr = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            arr[i] = string[i];
        } else {
            arr[i] = 'null';
        }
    }
    return arr;
}

result = strToarr('My Random');
console.log(result);

//8. Write a function that accepts a number as a parameter and checks if the number is prime or
//not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
//divisors other than 1 and itself.

function primeNr(number) {
    var sum = 0;
    for (var i = 2; i < number; i++) {
        if (number % i !== 0) {
            sum++;
        }
    }
    if (sum === (number - 2)) {
        return 'number is prime'
    } else {
        return ' number is not prime'
    }
}
var result = primeNr(22);
console.log(result);

//9. Write a function that replaces spaces in a string with provided separator. If separator is not
//provided, use “-” (dash) as the default separator.
//'My random string', '_' -> 'My_random_string';
//'My random string', '+' ->  'My+random+string':
//'My random string' ->; 'My-random-string';

function separator(string, separator) {

    if (separator === undefined) {
        separator = '-';
    }
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newString = newString + separator
        } else {
            newString = newString + string[i];
        }
    } return newString;
}

var result = separator('My  random string ', '@');
console.log(result);

//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function deoStringa(string, n) {
    var noviString = '';
    var greska = 'greska';
    if (n > string.length) {
        return greska;
    } else {
        for (var i = 0; i < n; i++) {
            noviString += string[i];
        }
        noviString += '...';
        return noviString;
    }
}
var result = deoStringa('ovo postaje komplikovano', 100);
console.log(result);

//11. Write a function that converts an array of strings into an array of numbers. Filter out all
//non-numeric values.
//['1', '21', undefined, '42', '1e+3', Infinity] -> [1, 21, 42, 1000]

function arrStrNum(array) {
    var newArr = [];
    for (i = 0; i < array.length; i++) { // prvo mora parseFLoat pa onda isFinite
        if (isFinite(array[i])) {
            newArr[newArr.length] = parseFloat(array[i]);
        }
    }
    return newArr;
}
var result = arrStrNum(['1', '21', undefined, '42', '1e+3', Infinity]);
console.log(result);

//12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function retired(currentYear, yearOfBirth, gender) {
    var retire;
    if (gender === 'male' && currentYear - yearOfBirth < 65) {
        retire = 65 - (currentYear - yearOfBirth);
        return retire;
    } else {
        retire = 'vec je u penziji'
    }
    if (gender === 'female' && currentYear - yearOfBirth < 60) {
        retire = 60 - (currentYear - yearOfBirth);
        return retire;
    } else {
        return 'vec je u penziji'
    }
}

//option 2

function retired(currentYear, yearOfBirth, gender) {
    var retire;

    if (gender === 'male') {
        retire = 65 - (currentYear - yearOfBirth)

    } else if (gender === 'female') {
        retire = 60 - (currentYear - yearOfBirth)
    } else {
        return 'uneti podaci nisu tacni'
    }
    if (retire > 0) {
        return retire;
    } else {
        return 'vec je u penziji'
    }
}

var result = retired(2021, 1932, 'njgjkgj');
console.log(result);





//13. Write a function to humanize a number (formats a number to a human-readable string) with
///the correct suffix such as 1st, 2nd, 3rd or 4th.
//1 -> 1st
//11 -> 11th

