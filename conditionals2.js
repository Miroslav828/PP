/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F */

var c = 60;
var f = (9 * c / 5) + 32;

console.log(c , '°C is', f ,'°F')

/* Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
 */

 var a = 11;
 var b = a - 13;
 if (a > 13){
     console.log (b * 2)
    }
    else {console.log (13 - a);
 }

 /* Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.*/


var broj1 = 12;
var broj2 = 5;

if (broj1 === broj2){
    console.log (3*(broj1+broj2))
} else {
    console.log (broj1 + broj2);
}

/*
Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.*/

var broj3 = 50
var broj4 = 50
if (broj3 + broj4 === 50 || broj3 === 50 || broj4 === 50) {
    console.log ('true')
}else {
    console.log ('-');
}

/*Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.*/


var nekibroj = 500
if (nekibroj > 20 && nekibroj <100){
    console.log ("20 ↔ 100")
}
if (nekibroj >= 100 && nekibroj <= 400){
    console.log("100 ↔ 400")
}
if (nekibroj < 20 || nekibroj > 400) {
    console.log('-')
}


