// 1.Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

var arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
var arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 
var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < arr_1.length; i++){
    sum1 +=arr_1[i];
    sum2 +=arr_2[i];
}

console.log(sum1 + sum2);

//2. Using a for loop print all even numbers up to and including n. Don’t include 0.

var n1 = 22;
var arrEven = [];

for (var a = 2; a <= n1; a+=2){
    arrEven[arrEven.length] = a;
}
console.log(arrEven);

//3. Using a for loop output the elements in reverse order


var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

var arrReverse = [];

for (var i = 0; i < arr.length; i ++){
    arrReverse[arrReverse.length] = arr[arr.length - 1 - i];
}
console.log(arrReverse);

// option2

var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
var arrReverse = [];

for (var i = 0; i < arr.length; i ++){
    arrReverse[arrReverse.length] = arr[arr.length - 1 - i]; // arrReverse[i] ili arrReverse[arr.Reverse.lenght]
    console.log(arrReverse[i]);
}

//4. Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

var arr_3   = [4, 6, 7];
var arr_4    = [8, 1, 9];
var arr_5 = [];

for (var i = 0; i < arr_3.length; i ++){
    arr_5 [i] = arr_3[i] + arr_4[i];
}
console.log(arr_5);

//5. Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

var str1 = 'javascript';
var strZ = '';


for (var i = 0; i < str1.length ; i++){
    if ((i+1)%2 !== 0){
        strZ =  strZ + str1 [i];
    } else {
        strZ = strZ +'Z';
    }
}
console.log(strZ);

//6. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

var str2 = "nothing more";
var y = 0;

for (var i = 0; i < str2.length; i++){
    if (str2[i] === "y"){
        y++
    }
}
if (y === 0){
    console.log("no");
}else {
    console.log('yes');
}

//7. Given a number n Calculate the factorial of the number

var n2 = 5;
var fact = 1;

for (var i = n2; i > 0; i--){
    fact = fact * i;
}
console.log(fact);

// option 2

var n2 = 5;
var fact = 1;

for (var i = 1; i <= n2 ; i++){
    fact = fact * i;
}
console.log(fact);

//Write a program that will allow someone to guess a four digit pin exactly 4
//times. If the user guesses the number correctly. It prints “That was
//correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.




//9. Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
//Palindrome: a word, phrase, or sequence that reads the same backward as
//forward, e.g., madam or nurses run.

var str3 = "racecar";
var start = 0;
var end = str3.length -1;
var isSym = true;

for (start = 0, end = str3.length - 1; start < end; start++, end--){
    if (str3[start] !== str3[end]){
        isSym = false;
    }
}
console.log(isSym ? "symetric" : "not symetric");

// 2. option

var str3 = "racecar";
var sym = 0;
var a = str3.length;


for (var i = 0; i < str3.length; i++){
    if (str3[i] === str3[str3.length-1-i]){
       sym++ ;
    }
}
if (sym === a){
    console.log('Symetric'); //????? ne radi ako se stavi sym === str3.lenght
}else {
    console.log('Not symetric'); 
}


//10. This is a code wars kata. click here to train on “Grasshopper – Summation” on
//code wars. Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0

var num = 8;
var sum = 0;

for (var i = 1; i <= num; i++){
    sum = sum + i;
}

console.log(sum);