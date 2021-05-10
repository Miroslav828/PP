//1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
//E, I, O, and U.

function vowels(string) {
    var brojac = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' || string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U') {
            brojac++
        }
        
    }return console.log (brojac);
}
vowels('treba izbrojati sve samoglasnike');

//2. Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combine(arr1,arr2){
    var newArr=[];
    var smaler=arr1;
    var bigger=arr2;
    if(arr1.length >= arr2.length){
        smaler=arr2;
        bigger=arr1;
    }
    for (var i=0; i<smaler.length; i++ ){
        newArr[newArr.length]=arr1[i];
        newArr[newArr.length]=arr2[i];
    }
    for(k=smaler.length; k<bigger.length; k++){
        newArr[newArr.length]=bigger[k];
    }
    return newArr;
}
console.log(combine([5, 6, 7], [9,2,3,5, 6]));

// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotationEl (array, k){
    var newArray = [];
    if (k !== undefined && k <= array.length){
 for (var i = k; i < array.length; i++){
     newArray[newArray.length] = array[i];
 }
 for (i = 0; i < k; i++){
     newArray[newArray.length] = array [i];
     
 } 
 return newArray;
} else if( k === undefined){
    newArray = array;
    return newArray;
} else if (k > array.length){
    return console.log("uneti broj je veci od broja elemenata niza");
}
}
var result = rotationEl ([1, 2, 3, 4, 5, 6, 7, 8, 9], 12);
console.log (result);

//4. Write a function that takes a number and returns array of its digits.


function arrayOfdigits (number){
    var newStr = ''+number;
    var newArr = [];
    for (var i = 0; i < newStr.length; i++ ){
        newArr[i] = newStr[i];
    }
    return newArr;
}
var result = arrayOfdigits(1);
console.log(result);

//5. Write a program that prints a multiplication table for numbers up to 12.

function tablicaMnozenja() {
    
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
        console.log(i, ' * ', j, ' = ', i * j);
        }
    }
   
}
tablicaMnozenja();

// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

// (30°C x 1.8) + 32 = 86°F

function cToF (num){
    var fahrenheit = (num * 1.8) + 32;
    return console.log(fahrenheit, 'F');
}
cToF(50);

//7. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

function maxNum (array){
    var newArray = [];
    var max = -Infinity;
    for (var i = 0; i < array.length; i++){
        if(typeof array[i] === 'number'){
            newArray[newArray.length] = array[i];
        }
    }
    for (var j = 0; j < newArray.length; j++){
        if (newArray[j] > max){
            max = newArray[j];
        }
    } 
    if(max !== - Infinity)
    return console.log(max);
    else return console.log(' ne postoji element koji je broj');
}
maxNum(['dva','tri', 'jedan', 1]);

// 8. Write a function to find the maximum and minimum elements. Function returns an array.

function minMaxArr (array){
    var min = +Infinity;
    var max = -Infinity;
    var finalArr = [];
    for (var i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];    
        }
    }
    for( var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    finalArr[0] = max;
    finalArr[1] = min;
    return console.log(finalArr);
}

minMaxArr([1, 2, 4, 6, 3, -24, -78, 100, -99, -100]);


//9. Write a function to find the median element of array.

function medianEl (array){
    var a = array.length;
    var b = (a-1) / 2;
    if(a % 2 !== 0){
        return console.log(array[b]);
    } else{
        return console.log('niz ima paran broj elemenata, nema srednji clan');
    }   
}
medianEl([1,2,3,4,5]);

//10. Write a function to find the element that occurs most frequently.

// 11. Write a function to find and return the first, middle and last element of an array if the array has odd number 
//of elements. If number of elements is even, return just the first and the last. In other cases (empty array),
 //input array should be returned.

 function firstMiddleLast (array){
     var newArr = [];
     if (array.length%2 !== 0 && array.length !== 1 && typeof array === 'array'){
        newArr[newArr.length] = array[0];
        newArr[newArr.length] = array[(array.length-1)/2];
        newArr[newArr.length] = array[array.length-1];            
        }
        else if (array.length%2 === 0 && array.length !== 0 && typeof array === 'array'){
            newArr[newArr.length] = array[0];
            newArr[newArr.length] = array[array.length-1];
        } else  {
            return array;
        }
    return newArr;
    }
 
    var result = firstMiddleLast(123456);
    console.log(result);

    //12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number of
    // parameters.

function average() {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arguments.length; i++) {
        var converted = parseFloat(arguments[i]);
        if (isFinite(converted)){
        count ++;    
        sum += converted;
        }
    }
    return sum / count;
}
var result = average(1, 2, 3, 'a');
console.log(result);

    // 13. Write a function to find all the numbers greater than the average.

    function biggerThanAverage (){
        var sum = 0; 
        var arrayBigger = [];
        var average;
        for (var i = 0; i < arguments.length; i++){
            sum += arguments[i];
            }
       average = sum /arguments.length;
       for (var i = 0; i < arguments.length; i++){
           if (arguments[i] > average){
               arrayBigger[arrayBigger.length] = arguments[i];
           }
       }
       return arrayBigger;
    }

var result = biggerThanAverage(1, 2, 3, 4, 5, 6)
console.log(result);

// 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
//Starvation: less than 15
//Anorexic: less than 17.5
//Underweight: less than 18.5
//Ideal: greater than or equal to 18.5 but less than 25
//Overweight: greater than or equal to 25 but less than 30
//Obese: greater than or equal to 30 but less than 40
//Morbidly obese: greater than or equal to 40

function BMI (weight, height){
    var bmi = weight / (height * height);
    if (bmi < 15){
         console.log('Starvation');
    }  else if(bmi >= 15 && bmi <17.5) {
         console.log('Anorexic');
        } else if(bmi >= 17.5 && bmi < 18.5){
         console.log('Underweight');
        } else if (bmi >=18.5 && bmi <25){
         console.log('Ideal');
        } else if (bmi >= 25 && bmi <30){
         console.log('Overweight');
        } else if (bmi >= 30 && bmi < 40){
         console.log('Obese');
        } else if (bmi >= 40){
         console.log('Morbidliy obese');
        }
        return bmi;
}
BMI(85, 1.83);

//15.Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// ["Hello", "World", "in", "a", "frame"]

function slika (array){
 var a = '';
 var b = array[0].length;
 for (var i = 0; i <array.length; i ++){
     if (array[i].length > b){
         b = array[i].length;
     }     
 }
 for (var k = -1; k < array.length + 1; k++){
     for (var j = -2; j <b + 2; j ++){
         if (j === -2 || k === -1 || j === (b + 1 ) || k === array.length){
             a = a + '*';
         } else if(j >= 0 && j < array[k].length){
             a += array[k][j];
         } else {
             a += ' ';
         }
     }
     a += '\n';   
 }
 return a;
}


var result = slika (['hello', 'world','najduzi', 'b']);
console.log(result);




