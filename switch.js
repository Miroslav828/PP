//1. Write a program that shows text representation of a day in a week for a number input from
//1 to 7. Print output in console.
//For input 1, output should be “Monday”.

var day = 1

switch (day) {
    case 1:
        console.log('ponedeljak')
        break;
    case 2:
        console.log('utorak')
        break;
    case 3:
        console.log('sreda')
        break;
    case 4:
        console.log('cetvrtak')
        break;
    case 5:
        console.log('petak')
        break;
    case 6:
        console.log('subota')
        break;
    case 7:
        console.log('nedelja')
        break;
}

//2. Write a program that shows text representation of a day in a week for a number input from
//1 to 7. All other cases output a message explaining that input must be a number between 1
//and 7.
//For input 1, output should be “Monday”.
//For input 10, output should be “Input must be a number between 1 and 7”.

day = 8;

switch (day) {
    case 1:
        console.log('ponedeljak')
        break;
    case 2:
        console.log('utorak')
        break;
    case 3:
        console.log('sreda')
        break;
    case 4:
        console.log('cetvrtak')
        break;
    case 5:
        console.log('petak')
        break;
    case 6:
        console.log('subota')
        break;
    case 7:
        console.log('nedelja')
        break;
    default:
        console.log('mora biti broj izmedju 1 i 7')
        break;
}

//3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
//is a weekday or weekend. All other cases output a message explaining that input must be a
//number between 1 and 7.
//For input 2, output should be “It’s weekday”.
//For input 6, output should be “It’s weekend”.
//For input 12, output should be “Input must be number between 1 and 7”.

day = 10;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('its weekday')  
        break;
    case 6:
    case 7:
        console.log('its weekend')
    default:
        console.log('Input must be number between 1 and 7' )
        break;
}

//4. Write a program that for a 1-12 number input (representing a month in a year) shows that
//month’s name. All other cases output a message explaining that input must be a number
//between 1 and 12.
//For input 2, output should be “February”.
//For input 6, output should be “June”.
//For input 13, output should be “Input must be a number between 1 and 12”.

var month = 5;

switch (month) {
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
        break;
    case 6:
        console.log('June')
        break;
    case 7:
        console.log('July')
        break;
    case 8:
        console.log('August')
        break;
    case 9:
        console.log('September')
        break;
    case 10:
        console.log('October')
        break;
    case 11:
        console.log('November')
        break;
    case 12:
        console.log('December')
        break;
    default:
        console. log ('Input must be a number between 1 and 12')
        break;
}

//5. Write a program that for a 1-12 number input (representing a month in a year) shows what
//season it is. All inputs different from 1-12 output a message explaining that input must be a
//number between 1 and 12.

month = 1;

switch (month) {
    case 1:    
    case 2:
    case 3:  
    console.log ('its Winter time')
        break;
    case 4:
    case 5:
    case 6:  
    console.log ('its Spring time')
        break;    
    case 7:
    case 8:
    case 9:  
    console.log ('its Summer time')
        break;
    case 10:
    case 11:
    case 12:  
    console.log ('its Autumn time')
        break;
    default:
    console. log ('Input must be a number between 1 and 12')    
        break;
}

//6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
//message about that grade in the following manner: A - 'Good job';, B - 'Pretty good';, C -
//'Passed';, D - 'Not so good';, F - 'Failed';. Input different from letters A-F outputs a message
//&quot;Unknown grade&quot;.

var letter = 'A';

switch (letter) {
    case 'A':
        console.log('Good job')
        break;
    case 'B':
        console.log('Pretty good')
        break;
    case 'C':
        console.log('Passed')
        break;
    case 'D':
        console.log('Not do good')
        break;
    case 'F':
        console.log('Failed')
        break;
    default:
        console.log('Unknown grade')
        break;
}

//7. Write a program that takes as input a city name and outputs the country where the city is.
//You may choose which cities and countries you want to output yourself, however there has
//to be at least 5 countries and 15 cities. Note that each country must have a different
//number of cities. Input different from the listed cities should output a message 'Please
//choose a different city';.

var city = 'Moscow';

switch (city) {
    case 'Moscow':
    case 'Ekaterinburg':
    case 'Rostov':
    case 'St. Peterburg':
    case 'Samara' :   
        console.log ('Russia')
        break;  
    case 'Belgrade':
    case 'Novi Sad':
    case 'Nis':
        console.log ('Serbia')
        break;
    case 'Rome':
    case 'Milano':
    case 'Venezia':
    case 'Torino':
        console.log ('Italy')
        break;
    case 'Munich':
        console.log ('Gemany')
        break;
    case 'Madrid':
    case 'Barcelona':
        console.log ('Spain')
        break;    
    default:
        console.log('Please choose a different city')
        break;
}

//8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 5;
var b = 0;
var c = '+';


switch (c) {
    case '+':
        console.log (a + b)
        break;
    case '-':    
        console.log (a - b)
        break;
    case '*':
        if (b === 0){
         console.log ("b cant be 0")   
        }
        else{
        console.log (a * b)}
        break;
    case '/':    
        console.log (a / b)
        break;
    default:
        console.log ('greska')
        break;
}
