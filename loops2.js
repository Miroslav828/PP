//1. Write a program that checks if a given element e is in the array a.
//Input: e = 3, a = [5, -4.2, 3, 7]
//Output: yes
//Input: e = 3, a = [5, -4.2, 18, 7]
//Output: no

var e = 10;
var a = [10, -4.2, 7, 3, 8, 9];
var b = 0; 

for (i = 0 ; i < a.length; i++){
    if (e === a[i]){
     b += 1;
     
    } 
}


if (b !== 0){
    console.log('yes')
}
    else {console.log ('no')}



// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var w = [-3, 11, 5, 3.4, -8];

for ( i = 0; i < w.length; i++){
    if (w[i] > 0){
        w[i]*=2;
    }

}
console.log(w);

//3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var array = [-5, 2, 2, -1, 6];
var min = array[0];
var index = 0

for (i = 0; i < array.length; i++){
    if (array[i]<= min){
        min = array[i];
        index = i;
    }
}
console.log(min, index);

//4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var array = [4, 3, 2, -1, 6];
var min = array[0];

for ( var i = 0; i < array.length; i++ ){
    if (array[i] < min){
        min = array[i];
    }  
}
var min1 = array[0];
for ( var j = 0; j < array.length; j++){
    if (array[j] < min1 && array[j] !== min){
        min1 = array[j];
    }
}

console.log(min1);


//5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var array = [3, 11, -5, -3, 2];
var sum = 0;

for (i = 0; i < array.length; i++){
    if (array[i]>=0){
        sum += array[i];
    }
}
console.log(sum);

//6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

var array = [2, 4, -2, 7, -2, 4, 2];
for (i = 0; i < array.length; i++){
    if (array[i] === array[array.length-1 - i]){
        console.log('jeste');  
    }
    else console.log('nije')
}

var array = [3, 4, 12, 8];
for (i = 0; i < array.length; i++){
    if (array[i] === array[array.length-1 - i]){
        console.log('jeste');  
    }
    else console.log('nije')
}


//9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

// Output array: [4, 6, 8]

var a = [4, 6, 2, 8, 2, 2];
var e = 2;

for (i = 0; i < a.length; i++){
    if (e === a[i]){
        delete a[i];
    }
}
console.log(a);

//8. Write a program that concatenates two arrays.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a = [4, 5, 6];
var b = [3, 8, 11, 9];
var c = [];

for (i=0; i < a.length; i++){
     c[i] = a[i];
}
for (j=0; j < b.length; j++, i++){
     c[i] = b[j];
}
console.log(c);

//7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];


// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

var a = [2, -2, 33, 10, 12, 5, 8];
var e = 78;
var p = 3;

if(p > a.length){
    console.log ('greska');
}
else{
for (i=0 ; i < a.length; i++){
    if (i === p){
        a[i] = e; 
        console.log(a)  ;
    }
}
}


   