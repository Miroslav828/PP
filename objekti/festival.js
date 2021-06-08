'use strict';
(function () {
    console.log('Hi')

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length - 1)
            var result = firstLetter + lastLetter;
            return result.toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        if (!title || !genre || !(genre instanceof Genre) || !length) {
            throw new Error('Invalid input');
        }
        this.title = title;
        this.genre = genre;
        this.mLength = length;
        this.getDataMovie = function () {
            return this.title + ', ' + this.mLength + ', ' + this.genre.getData()
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfmovies = [];
        this.numberOfmovies = 0;
        this.addMovie = function (movie) {
            return this.listOfmovies.push(movie);
        };
        this.getTotalLength = function () {
            var totalLength = 0;
            this.listOfmovies.forEach(function (movie) {
                totalLength += movie.mLength
            })
            return totalLength;
        }
        this.getData = function () {

            var result =  this.date + ', ' + this.getTotalLength() + '\n';
            this.listOfmovies.forEach(function (movie){
                result += '\t'+ movie.getDataMovie() + '\n';
            })
            return result;


        };

    }

    function Festival(nameOfFest) {
        this.nameOfFest = nameOfFest;
        this.listOfPrograms = [];
        this.numberOfMoviesInPrograms = 0;
        this.AddProgram = function (program) {
            return this.listOfPrograms.push(program)
        }
    }

    var movie1 = new Genre('action');
    console.log(movie1);
    console.log(movie1.getData());
    var prviFilm = new Movie('Otpisani', movie1, 200);
    var drugiFilm = new Movie('film', movie1, 100);
    console.log(prviFilm);
    console.log(prviFilm.GetDataMovie());
    var program1 = new Program('May 29 2021');
    console.log(program1.addMovie(prviFilm));
    console.log(program1.listOfmovies);
    console.log(program1.addMovie(drugiFilm));
    console.log(program1.listOfmovies);
    var festival1 = new Festival('Zlatna Palma');
    console.log(program1.getData());






})();


