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

