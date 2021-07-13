// Write a function that capitalizes the first letter of each string argument it receives.  
	// Function arguments: ['hello', 'there', 'ES', 6]
	// Output: ['Hello', 'There', 'ES']


let capitalizeFirstLetter = (...arguments) => {
    
    let newArray = arguments.filter(word => typeof word == 'string');
    return newArray.map(word => word[0].toUpperCase() + word.slice(1));
 
}

console.log(capitalizeFirstLetter('hello', 'there', 'ES', 6));


// Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only



// Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]



let increaseElements = (array, value=1) =>{
  return array.map(elements => elements + value)
};

console.log(increaseElements([4, 6, 11, -9, 2.1]));

// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

let evenElements = (...arguments) =>{
    return arguments.filter(element => element%2 === 0);
}

console.log(evenElements(6, 11, 9, 0, 3));

// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

let filterStrings =  (...arguments) => {
    return arguments.filter(element => element.includes('js') || element.includes('JS') );
}
console.log (filterStrings('compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'));


// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

let filterInteger = (...arguments) => {
    return arguments.filter (e => Number.isInteger(e) );
}
console.log(filterInteger(1.6, 11.34, 9.23, 7, 3.11, 8));


// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]

 let filterIntegerContain5 = (...arguments) => {
     return arguments.filter (e => Number.isInteger(e) && e.toString().includes(5) )
 };
  console.log(filterIntegerContain5(23, 11.5, 9, 'a5bc', 45, 28, 553 ));
  

// Sasin zadatak 9


  let persons = [{name:'Sasa', age:47}, {name:'Dusan', age:19}, {name:'Sladja', age:26}, {name:'Nikola', age:35}];
//console.log(persons[0].name); 

/* b.	Write a function that prints out the names of persons older than 25. */

const printOlder = array => array.forEach ((item => {
    const { age, name } = item;
    if (age > 25) console.log(name);
}));

printOlder(persons);

/* c.	Write a function that check if there is a person older than 40.*/

const isOlder = array => array.forEach ((item => {
    const { age, name } = item;
    if (age > 40) console.log(`${name} is older than 40`)
}));

isOlder(persons);
