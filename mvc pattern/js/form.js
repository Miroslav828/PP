var festival = new Festival();

var titleNode = document.querySelector(".title");
var mLengthNode = document.querySelector(".mLength");
var genreNode = document.querySelector(".genre");
var button1Node = document.querySelector(".button-1");
var movieErrorNode = document.querySelector(".error-1");
var movieListNode = document.querySelector(".list-1");
var movieSelectNode = document.querySelector(".movie");
var dateNode = document.querySelector(".date");
var button2Node = document.querySelector(".button-2");
var programListNode = document.querySelector(".list-2");
var programErrorNode = document.querySelector(".error-2");
var programSelectNode = document.querySelector(".program");
var button3Node = document.querySelector(".button-3");


function createMovie() {
   var title1 = titleNode.value;
   var mLength1 = mLengthNode.value;
   var genre1 = genreNode.value;

   if (!title1) {
      movieErrorNode.textContent = "movie title is required"
      return;
   }
   if (!mLength1) {
      movieErrorNode.textContent = "movie length is required"
      return;
   }
   if (!genre1) {
      movieErrorNode.textContent = "genre is required"
      return;
   }
   movieErrorNode.textContent = "";

   var movie1 = new Movie(title1, mLength1, genre1);

   var newMovieIndex = festival.addMovie(movie1);

   var movieDataLi = document.createElement("li");
   movieDataLi.textContent = movie1.getData();
   movieListNode.appendChild(movieDataLi);

   var movieOption = document.createElement("option");
   movieOption.textContent = movie1.title;
   movieOption.setAttribute('value', newMovieIndex);
   movieSelectNode.appendChild(movieOption);

   titleNode.value = "";
   mLengthNode.value = "";
   genreNode.value = "";

}

function createProgram() {

   var date1 = dateNode.value;
   var dateBefore = new Date (date1)


   if (!date1) {
      programErrorNode.textContent = "date is required!"
      return;
   }
   if (dateBefore.getTime() < Date.now()) {
      programErrorNode.textContent = "Invalid date!";
      return;
    }
      programErrorNode.textContent = "";


   var program1 = new Program(date1);

  
   var newProgramIndex = festival.addProgram(program1);



   var programDataLi = document.createElement("li");
   programDataLi.textContent = program1.getData();
   programListNode.appendChild(programDataLi);

   var programOption = document.createElement("option");
   programOption.textContent = program1.finalDate();
   programOption.setAttribute('value', newProgramIndex);
   programSelectNode.appendChild(programOption);

   dateNode.value = "";
}

function addMovieToProgram() {

   var movieValue = movieSelectNode.value;
   var programValue = programSelectNode.value;
   var selectedMovie = festival.listOfAllMovies[movieValue];
   var selectedProgram = festival.listOfAllPrograms[programValue];
   var oldDataProgram = selectedProgram.getData();
   selectedProgram.addMovieToList(selectedMovie);
   var programliNodeAll = document.querySelectorAll(".list-2 li");
   programliNodeAll.forEach(function (li) {
      if (li.textContent === oldDataProgram) {
         li.textContent = selectedProgram.getData();
      }
   })
}


button1Node.addEventListener('click', createMovie);
button2Node.addEventListener("click", createProgram);
button3Node.addEventListener('click', addMovieToProgram);