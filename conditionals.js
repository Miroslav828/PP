/*Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console.*/

var a = 5
var b = 10
if (a > b) {
    console.log(a,' je veci broj')
}
else {console.log(b,' je veci broj')}

/* Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.*/


var c = 3
if (c % 2 === 0){console.log ('even')}
else {console.log ('odd')}

/*Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.*/

var d = 15
if (d % 3 === 0 && d % 5 === 0){
    console.log(d)
}

/*Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.*/


var a1 = 3
var a2 = 7
var a3 = 2
if (a1 * a2 *a3 <0){console.log ('the sign is -')}
else {console.log('the sign is +')}

/*Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”*/


var t = 20
if (typeof t === 'number'){
    if (t%2 === 0){console.log ( t,'/ 2','=' ,t/2)}
    else {console.log ("X")}}


 /*Write a conditional statement to
find the largest of five
numbers. Display the result in
console.*/

var b1 = -5
var b2 = -2
var b3 = -6
var b4 = 0
var b5 = -1

if (b1 > b2 && b1 > b3 && b1 > b4 && b1 > b5){console.log (b1)}
if (b2 > b1 && b2 > b3 && b2 > b4 && b2 > b5){console.log (b2)}
if (b3 > b1 && b3 > b2 && b3 > b4 && b3 > b5){console.log (b3)}
if (b4 > b1 && b4 > b2 && b4 > b3 && b4 > b5){console.log (b4)}
if (b5 > b1 && b5 > b2 && b5 > b3 && b5 > b4){console.log (b5)}

/*Write a conditional statement to
sort three numbers.*/

var c1 = 8
var c2 = 6
var c3 = 61

if (c1 >= c2 && c2 >= c3){console.log (c1, c2, c3)}
if (c1 >= c3 && c3 >= c2){console.log (c1, c3, c2)}
if (c2 >= c1 && c1 >= c3){console.log (c2, c1, c3)}
if (c2 >= c3 && c3 >= c1){console.log (c2, c3, c1)}
if (c3 >= c1 && c1 >= c2){console.log (c3, c1, c2)}
if (c3 >= c2 && c2 >= c1){console.log (c3, c2, c1)}