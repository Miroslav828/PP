// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

var a = [2, 4, 7, 11, -2, 1];
var b = a.flatMap (x => [x, x]);
console.log(b);

//option 2

var a = [2, 4, 7, 11, -2, 1];
var b = a.flatMap (function(x){
    return [x, x];
});
console.log (b);


//4.Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]
//Output:  { minValue: -2, minLastIndex: 6 }


function findMin (array){
return {
    minValue: Math.min.apply (Math, array),
    minLastIndex: array.lastIndexOf (Math.min.apply (Math, array)),
}
}
console.log (findMin([1, 4, -2, 11, 8, 1, -2, 3]));

//5. 
// a. Write a function that finds all the elements in a given array less than a given element. 
//Input: [2, 3, 8, -2, 11, 4], 6 
//Output: [2, 3, -2, 4]


var a = [2, 3, 8, -2, 11, 4];
var b = 6;
function filterLessThanGivenParam (array, param){
    function lessThanGivenEL (item) {
    
        return item < param;    
    }
    return array.filter(lessThanGivenEL);
}
console.log(filterLessThanGivenParam(a, b));

// b. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
//		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
 //      Output: [’Programming’, ‘product’]



//filter, toLowerCase, subString

function allWithPro (arr,substr) {
    return arr.filter(function(element) {       
        return element.toLowerCase().startsWith(substr);
    })
}

console.log(allWithPro(['JavaScript', 'Programming', 'fun', 'product'], 'pro'));


// 8. Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

function daysToBirthday (input){
    var day1 = new Date();
    var day2 = new Date(input)
    
    return Math.round(Math.abs(day2 - day1)/(1000*3600*24)); 
}
   
console.log(daysToBirthday('07/17/2021'));

// 2 option

function birdthDay(inputDate){
    var newInput=new Date(inputDate);
    var today=new Date();
    return Math.round((newInput.getTime()-today.getTime()) / (1000 * 3600 * 24));
}
var result=birdthDay("2021 06 09");
console.log(result);

// 9. Write a function that for a given departure and arrival time calculates the time the trip takes.
	// Input: 8:22:13 11:43:22
	// Output: 3 hours 21 minutes 9 seconds

    


