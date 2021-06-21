function Festival (){
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
}
Festival.prototype.addMovie = function(movie){
   this.listOfAllMovies.push(movie)
   return this.listOfAllMovies.length - 1;
}
Festival.prototype.addProgram = function(program){
    this.listOfAllPrograms.push(program);
    return this.listOfAllPrograms.length - 1;
}


function Movie(title, length, genre) {

    this.title = title;
    this.mLength = parseInt(length);
    this.genre = genre;
}
Movie.prototype.getGenreCode = function () {
    var firstLetter = this.genre.charAt(0);
    var lastLetter = this.genre.charAt(this.genre.length - 1);
    return (firstLetter + lastLetter).toUpperCase();
};
Movie.prototype.getData = function () {
    return this.title + ", " + this.mLength + "min, " + this.getGenreCode();
};

function Program(date) {
    this.date = new Date(date);
    this.listOfmovies = [];
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var finalDate = day + "." + month + "." + year+ ".";
    this.finalDate = function() {
        return finalDate;
};
}
Program.prototype.addMovieToList = function(movie){
    
        return this.listOfmovies.push(movie);
    };
Program.prototype.getTotalLength = function () {
    var totalLength = 0;
    this.listOfmovies.forEach(function (movie) {
        totalLength = totalLength + movie.mLength;
    })
    return totalLength;
};

Program.prototype.getData = function (){   
  

    return this.finalDate() + " ," + this.listOfmovies.length +" movies, duration: "+ this.getTotalLength() +" min";
}

