// 1. zadatak, Jovana



function switchhMinMax(arr){
    var arr;
    var min=arr[0];
    var max=arr[0];
    var indMin;
    var indMax;
    for(i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
            indMin=i;
        }
        if(arr[i]>max){
            max=arr[i];
            indMax=i;
        }
    }
    arr[indMin]=max;
    arr[indMax]=min;
    return arr;
}
console.log(switchhMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/**Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function ar(arr){
    var arr;
    for(i=0; i<arr.length; i++){
        arr[i]=arr[i]/2+5;
        if(arr[i]===0){
            arr[i]=20;
        }
    }
    return arr;
}
console.log(ar([ 3, 500, -10, 149, 53, 414, 1, 19 ]));


// 3. zadatak Jovana

function grades(arrName,arrpoints){
    var arrName;
    var arrpoints;
    var result='';
    for(i=0; i<arrName.length; i++){
        if(arrpoints[i]<51){
            result += arrName[i]+ " acquired " + arrpoints[i] + " points and failed to complete the exam.\n"
        }else if (arrpoints[i]<=60){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 6.\n"
        }else if (arrpoints[i]<=70){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 7.\n"
        }else if (arrpoints[i]<=80){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 8.\n"
        }else if (arrpoints[i]<=90){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 9.\n"
        }else if (arrpoints[i]<=100){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 10.\n"
        }
    }
    return result;

}

console.log(grades([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));

//(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
//Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

function sortArr(arrS) {
    var tempBox;
    for (var i = 0; i < arrS.length; i++) {
        for (var j = i + 1; j < arrS.length; j++) {
            if (arrS[i] > arrS[j]) {
                tempBox = arrS[i];
                arrS[i] = arrS[j];
                arrS[j] = tempBox;
            }
        }
    arrS[i] = arrS[i]*2
    }
    return arrS;
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

// 5. (skip :))Sort a previously defined array in a descending order and display it in the
//console.
//Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function sortArr(arrS) {
    var tempBox;
    for (var i = 0; i < arrS.length; i++) {
        for (var j = i + 1; j < arrS.length; j++) {
            if (arrS[i] < arrS[j]) {
                tempBox = arrS[i];
                arrS[i] = arrS[j];
                arrS[j] = tempBox;
            }
        }
    }
    return arrS;
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

// 6.

function calc(num) {
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 1; i <= num; i++) {
        if (i%2 === 0) {
            sumEven += i;  
        }
        else if ( i%2 !== 0 && i <= num/2) {
            sumOdd += i;
        }
    }
    return (sumEven - sumOdd)*12.5; 
}

console.log(calc(1000));

// 7. 

function firstTwo(arrTwo) {
    var newS = '';
    for (var i = 0; i < arrTwo.length; i++) {
        if ( typeof arrTwo[i] === 'string' && arrTwo[i].length >= 2) {
        newS += arrTwo[i][0] + arrTwo[i][1];
        }
    }
    return newS;
}

console.log(firstTwo([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

// 8. 

function descendingOrder(arr){
    var arr1 = ''
     for (var i = arr.length -1 ; i>=0; i--){
         arr1 += arr[i]
     }       
     return arr1
 }
 console.log(descendingOrder('Belgrade Institute of Technology'));

 
 // 9.

 function combinatio(){
    var pom = ''
    for (var i = 1; i <= 7; i++){
        for (var j = 1; j <=7; j++){
            if (i !== j){  
                pom += '(' + i +',' + j +'), ' ;   
            }
        }
    }
    return pom
}
console.log(combinatio());

// 10.
function primeNum(num){
    for (i=2; i<num/2; i++){
        if(num%i===0){
            return false;
        }  
    }
    return true;
}
result=primeNum(15);
console.log(result);



//12.

function greatestDicisor(x, y) {
    
        for (var i = x; i > 0; i--) {
            if (x % i === 0 && y % i === 0) {
                return i
            }
        }
}
console.log(greatestDicisor(81, 9));

//11.Check if a given string is a palindrome (spaces are ignored).
//Input:  eye  | Geek  | a nut for a jar of tuna
//Output: true | false | true

function palindromeString(str){
    var ignoredSpace='';
    var isPal=true;
    var start;
    var end;
    for(i=0; i<str.length; i++){
        if(str[i] !== " "){
            ignoredSpace += str[i];
        }
    }
    for(start=0, end=ignoredSpace.length-1 ; start<end ; start++, end --){
        if(ignoredSpace[start] !== ignoredSpace[end]){
            return isPal=false;
        }
    }
    return isPal;
}
console.log(palindromeString("a nut for a jar of tuna"));


