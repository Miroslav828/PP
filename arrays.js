// 1. Write an array of months in a year. Using console.log display June, October and January
// from the array.

var year = ["January", "February", "March","April", "May" , "June", "July", "August", "September", "October", "November", "December"];

console.log(year[5], year [9], year[0]);


//2. Write an arrays of days in a week. Using console.log display Sunday from the array.

var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log (week[6]);

//3. Print all negative elements from the array [2, -4, 5, -2, -11].

var niz = [2, -4, 5, -2, -11];

console.log(niz [1], niz[3], niz[4]);

//4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
//72, 14, 9].

var niz2 = [5, 15, -5, 20, 12, 18, 72, 14, 9];

console.log(niz2[1], niz2[4], niz2[5], niz2[6], niz2[8] );

//5. What is the index of number 24 in the following array?
//[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
//   10, 26, 7]];
//  Using console.log:
//  ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.

var niz5 = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26,7]];

console.log(niz5[3]);
console.log(niz5[3][2]);

console.log(niz5[0][3]);