//1. Write a program that calculates the maximum of two given numbers.

function maxNr (a, b){
    if (a > b){
        return a;
    } 
    else if (a < b){
        return b;
    }
    else {
        return 'numbers are equal';
    }
}

var result = maxNr(2, 3);
console.log(result);

// 2. Write a program that checks if a given number is odd.

function odd (a) {
 if (a%2 === 0){
     return 'number is even';
 }
    else { 
        return 'number is odd';
 }
}

var result = odd (3);
console.log(result);

//3. Write a program that checks if a given number is a three digit long number.

function nrDigit (a){
    var b = a + ''; // nisam znao , if a > 99 && a <1000
    if (b.length === 3){
        return 'number is three digit long';
    } 
    else { 
        return 'number is not three digit long';
    }
}
var result = nrDigit (123);
console.log(result);

// 4. Write a program that calculates an arithmetic mean of four numbers.

function middle (a, b, c, d) {
    return (a + b + c + d)/4; 
}
var sum = middle (4, 5, 6, 7);
console.log(sum);


// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****



function drawing (a){
    var arr = '';
    
    for (var i = 1; i <= a; i++){
       for (var j = 1; j <= a; j++){
           if (i === 1 || j === 1 || i === a || j === a){
            arr += '*';
           }
           else {
               arr +=' ';
           }
           
       } 
       arr += '\n';
    }
    return arr;
}
var result = drawing(10);
console.log(result);



//6. Write a program that draws a horizontal chart representing three given values. For
//example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *

function drawing2 (a, b, c){
    d = '';
    for (var i = 1; i <= a; i++){
        d += '*';
    }
    d+= '\n';
    for (i = 1; i <= b; i++){
        d+= '*';
    }
    d+= '\n';
    for  (i = 1; i <= c; i++){
        d+= '*'
    }
    return d;
}

var result = drawing2 (1, 7, 5);
console.log(result);



// 7. Write a program that calculates a number of digits of a given number.

function nrOfDigits (a){
    var b = a +'';
     var result = b.length;
     return result
}

var broj = nrOfDigits (5677);
console.log (broj);



 

//8. Write a program that calculates a number of appearances of a given number in a given
//array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3

function nrOfRepeat (arr, e){
    var sum = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] === e){
            sum ++;
        }
        
    }
    return sum;
}
var  niz =[1, 2, 2, 5, 6];
var result = nrOfRepeat (niz, 2);
console.log (result);

// 9. Write a program that calculates the sum of odd elements of a given array.

function sum1OfOdd (arr){
 var suma1 = 0;
 for (i = 0; i < arr.length; i ++){
     if (arr[i]%2 !== 0){
         suma1 += arr[i];
     }
 }
 return suma1;
}

var result = sum1OfOdd ([1,2,3,4,5,6]);
console.log (result);

//10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

function brojSlova (string){
    var suma = 0;
    
    for (i = 0; i < string.length; i ++){
        if (string[i]=== 'a' || string[i] === 'A' ){
            suma++;
        }
    }
return suma;
}

var result = brojSlova ('matematikA');
console.log(result);

//11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

function dodavanje(string, a){
    var print = '';
    for (i = 1; i <=a; i++){
        print += string;
    }
    return print;
}
var result = dodavanje ('prst', 5);
console.log (result);

