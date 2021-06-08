// vCreate an object that represents your favourite coffee. Please include coffee name, strength, flavour, 
//milk, sugar, … everything you like!

var coffee = {
    name: 'Mokka',
    strength: '6',
    flavour: 'chocolate',
    milk: 'no',
    sugar: 'medium'
}

//Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

var movie = {
    title: 'Mi nismo andjeli',
    actors: {
        mainMale: 'Nikola Kojo',
        mainMemale: 'Branka Katic'
    },
    director: 'Srdjan Dragojevic',
    genre: 'komedija',
    popularity: '10'
}


// Write a function that creates an object that represents a project. Each project is described by: description,  
// programming language, git repository, boolean status that says if the project is in development or not. 
// Add a method that prints out the project's repository,  a method that checks if the project is written in 
// JavaScript as well as a method that checks if the project is in development or not.

function CreateObject (desc, progDesc, gitRep, boolSt) {
    return {
        description: desc,
        programmingLanguage: progDesc,
        gitRepository: gitRep,
        booleanStatus: boolSt,
        printRepository: (function(){
          return gitRep;
        })(),
        ifJS: (function(){
            return progDesc === 'JavaScript';
        })(),
        ifDevelopment: (function(){
        return boolSt ? 'Project is in development': 'Project is not in development'    
        })(),
    }
}

var miroslav = CreateObject('prvi projekat','JavaScript', '//miroslav828/pp', false);
console.log(miroslav);

var Jovana=CreateObject("second project","html", "//Jole994.pp.c",false)
console.log(Jovana);


// Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type 
// of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.  

function recipe (nam, cuisine, compl, ingredients, prepTime, instruction){
    return {
        name: nam,
        typeOfCuisine: cuisine,
        complexity: compl,
        listOfIngredients: ingredients,
        preparingTime: prepTime,
        preparingInstruction: instruction,
        printIngredients: function(){ 
          console.log(ingredients)
        },
        preparedIn15Min: function(){
            return prepTime < 15;
        },
        changeTypeOfCuisine: function(value){
            return this.typeOfCuisine = value ;  
        },
        newListOfIngredients: function(remove){
            var newList = [];
            for (var i = 0; i <ingredients.length; i++){
                if (ingredients[i] !== remove ){
                    newList[newList.length] = ingredients[i];
                }    
            } return this.listOfIngredients = newList;

        }, 
    }
}

var recept = recipe('palacinke','domaca', 1, ['brasno', 'mleko', 'secer', 'jaja'], 10, 'mix everything');
console.log (recept);

recept.changeTypeOfCuisine('italijanska');
console.log (recept);

recept.newListOfIngredients('mleko');
console.log(recept);



// drugi nacin, constructor function 

function Recipe(nam, cuisine, compl, ingredients, prepTime, instruction){
    this.name = nam;
    this.typeOfCuisine = cuisine;
    this.complexity = compl;
    this.listOfIngredients = ingredients;
    this.preparingTime = prepTime;
    this.preparingInstruction = instruction;
    this.printIngredients = function(){ 
      console.log(this.listOfIngredients)
    };
    this.preparedIn15Min = function(){
        return prepTime < 15;
    };
    this.changeTypeOfCuisine = function(value){
         this.typeOfCuisine = value ;  
    };
    this.newListOfIngredients = function(remove){
        var newList = [];
        for (var i = 0; i <ingredients.length; i++){
            if (ingredients[i] !== remove ){
                newList[newList.length] = ingredients[i];
            }    
        }  this.listOfIngredients = newList;

    };
}

var recept = new Recipe('plazma torta', 'globalna', 3, ['secer', 'plazma', 'slag', 'margarin', 'tajni sastojak'], 60, 'pomesati, umutiti, poredjati')

console.log(recept.name);
console.log(recept);

recept.changeTypeOfCuisine('domaca');

console.log(recept);