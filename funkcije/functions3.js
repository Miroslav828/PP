//1. Write a program to insert a string within a string at a particular position (default is 1,
//    beginning of a string).
//    'My random string', 'JS ' ->'JS My random string'
//    'My random string', 'JS ', 10 ->; 'My random JS string'

function insertStr(string1, string2, n) {
    var newStr = '';
    if (n === undefined) {
        newStr = string2 + string1;
    } else {
        for (var i = 0; i < string1.length; i++) {
            if (i === n - 1) {
                newStr = newStr + string2;
            }
            newStr = newStr + string1[i];
        }
    }
    return newStr;
}

var result = insertStr('neki string', 'DA', 5);
console.log(result);

// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, " ", undefined, 47, null]

function joinArrToStr(array) {
    var str1 = '';
    for (i = 0; i < array.length; i++) {
        var pomocna = parseFloat(array[i]);
        if (isFinite(pomocna)) {
            str1 += array[i];
        }
    }
    return str1;
}
var result = joinArrToStr([NaN, 0, 15, false, -22, '', undefined, 47, null, 55]);
console.log(result);

// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22,' ', undefined, 47, null] ->; [15, -22, 47]

function filterFalsy(array) {
    var Arr1 = [];
    for (var i = 0; i < array.length; i++) {
        if (!isNaN (array[i])  && array[i] !== 0 && array[i] !== '' && array[i] !== false && array[i] !== undefined && array[i] !== null) {
            Arr1[Arr1.length] = array[i];
        }
    }
    return Arr1;
}
var result = filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result);

// option 2

function filterFalsy(array) {
    var arr1 = [];
    for (var i = 0; i < array.length; i++) {
        if (!!array[i]){
            arr1[arr1.length] = array[i]
        }
     }

    return arr1;
}
var result = filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result);


// 4. Write a function that reverses a number. The result must be a number.
//12345 -> 54321 // Output must be a number'

function reverse(number) {
    var newNum = '';
    number = number + '';
    for (var i = number.length - 1; i >= 0; i--) {
        newNum += number[i];
    }
    newNum = parseInt(newNum);
    return newNum;
}

var result = reverse(123456789);
console.log(result);

//5. Write a function to get the last element of an array. Passing a parameter 'n' will return the
//last 'n' elements of the array.
//[7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function lastEl(array, n) {
    var newArray = [];
    if (n === undefined) {
        newArray[newArray.length] = array[array.length - 1]
    }
    for (var i = array.length - n; i < array.length; i++) {
        newArray[newArray.length] = array[i]
    }
    return newArray
}
console.log(lastEl([7, 9, 0, -2]));

// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.
// 6, 0 ->[0, 0, 0, 0, 0, 0]
// 2, "none" ->["none", "none"]
// 2 ->[null, null]

function ponavljanje (n, m){
    var newArray = [];
    if (m === undefined){
        for (var i = 0; i < n; i++)
        newArray[i] = 'null'
    }
    else {
        for (var i = 0; i < n; i++)
        newArray[i] = m
    }
    return newArray
}

console.log (ponavljanje(6, 'none'));

// 7. Write a function that says whether a number is perfect.
// 28 ->28 is a perfect number.

function perfectNr (num){
    var sum = 0;
    for (var i = 1; i < num; i ++){
        if (num%i === 0){
            sum += i
        }
    }
    if (sum === num){
        return console.log(num +' is a perfect number');
    }
        else {
            return console.log(num +' is not a perfect number')
        }  
}

 (perfectNr(28));

 // 8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> " 'aa' was found 2 times"

function findWord(string1, string2) {
    var arr = [];
    var newStr = '';
    var times = 0;
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] !== ' ' && i !== string1.length - 1) {
            newStr += string1[i]
        } else if (string1[i] === ' ' || i === string1.length - 1) {


            if (i !== string1.length - 1) {
                arr[arr.length] = newStr;
                newStr = '';
            } else {
                arr[arr.length] = newStr + string1[i];
            }
        }
    }
    for (var j = 0; j < arr.length; j++) {
        if (string2 === arr[j]) {
            times++;
        }
    }
    return times;
}

var result = findWord('The fox quick brown fox', 'fox');
console.log(result);

 //9.Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(string){
    var hidden = '';
    var n;
    for (i = 0; i <string.length; i++){
        if (i < 3 || i > n){
            hidden += string[i]
        } else if(i === 3){
            hidden += '...';
        } else if (string[i] === '@'){
            hidden += '@';
            n = i;
        }       
    }
    return hidden;
}
var result = hideEmail('myemailaddress@bgit.rs');
console.log(result);


/** Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */

function mostFr (array){
 var count = 0;
 var item = '';
 for (i = 0; i < array.length; i++){
     var count1 = 0;
     for( j = 0; j < array.length; j++ ){
         if (array[i]===array[j]){
             count1++;
        }
     }
     if (count1 > count){
         count = count1;
         item = array[i];
     }
 }
return console.log('the most fr item is '+item + ' which appears '+ count + ' times.');
}
mostFr ([3, 'a' ,'a', 2, 3]);