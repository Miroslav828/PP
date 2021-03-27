//Write a program that will iterate from 0 to 10 and display squares of numbers.

for (var x = 0; x <= 10; x++) {
    console.log(x * x);
    }

    //1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

for (var a = 0; a <=15; a++){
    if (a%2 === 0){
        console.log(a, "paran");
    }
    else {
        console.log (a, "neparan")
    }
}

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;

for (var b = 0; b <1000; b++){
    if (b%3 === 0 && b%5 === 0){
        sum +=b;
    }
}
console.log(sum);

// 3. Write a program to compute the sum and product of an array of integers.

var nizCelihBrojeva = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var suma = 0;
var proizvod = 1;

for (i = 0; i <nizCelihBrojeva.length; i++){
    suma += nizCelihBrojeva[i];
    proizvod *= nizCelihBrojeva[i];
}

console.log(suma);
console.log(proizvod);

// 4. Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];

var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var y = '';

for (i = 0; i < x.length; i++){
    y = x [i];
    console.log(y);
}

// 5. Write a program that prints the elements of the following array.
// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27]
//    ];
//

var array1 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
for (i=0; i < array1.length; i++){
    for (j = 0; j < array1[i].length ; j++){
        console.log (array1[i][j]);
    }
}


// 6. Write a program that outputs the sum of squares of the first 20 numbers.

var sum1 = 0;
for (var c = 1; c <= 20; c++){
    var d = c * c;  // moze i samo sum1 += c * c
    sum1 += d ;
}
console.log(sum1);

// 7. 

var students = [["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]];
var sum = 0;

for (i = 0; i < students.length; i++){
    sum = sum + students [i][1];
    var average = sum/students.length;
}

if (average < 60){
    console.log ('average mark is', average);
}
    else if (average <= 70){
        console.log ('Grade is D');
    }
    else if (average <=80){
        console.log ('Grade mark is C'); 
    }
    else if (average <= 90){
        console.log ('Grade is B');
    }
    else if (average <=100){
        console.log ('Grade mark is A'); 
    }



// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
// divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
// program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
// "Fizz" or "Buzz" for numbers divisible by only one of those).



// prva verzija
 
for (var z = 1; z <= 100; z++){
    if (z % 3 === 0){
        console.log('Buzz');
    }
        else if (z % 5 === 0){
            console.log('Fizz');
        }
       else console.log(z);   
}

// druga verzija

for (var y = 1; y <= 100; y++){
    if (y % 3 === 0 && y % 5 === 0){
        console.log('FizzBuzz');
    }
        else if (y % 3 === 0){
            console.log('Buzz');
        }    
        else if (y % 5 === 0){
            console.log ('Fizz')
        }
            else 
            console.log (y);
    }

 
