'use strict';
(function () {
    console.log('Hi')

    function Country(name, odds, continent) {
        if (!name || !odds || !continent) {
            throw new Error('fields name, odds and continent are required')
        }
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    function Person(name, surname, dateOfBirth) {
        if (!name || !surname || !dateOfBirth) {
            throw new Error('fields name and surname are required');
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        this.getData = function(){
            return this.name + ' ' + this.surname + '' + this.dateOfBirth.getDate() + '.' + this.dateOfBirth.getMonth() + '.' + this.dateOfBirth.getYear() + '.';
        }
    }

    function Player(person, betAmount, country) {
        if (!person || !(person instanceof Person)) {
            throw new Error('invalid input')
        };
        if (!country || !(country instanceof Country)) {
            throw new Error('invalid input')
        }
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    };
    function Address (country, city, postalCode, street, number){
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getData = function (){
            return this.street + ' '+ this.number + ',' + this.postalCode + ' ' + this.city + ','+ this.country;
        }
    }

    function Bettingplace (address){
        this.address = address;
        this.listOfPlayers = [];
    }
    function BettingHouse (competion){
        this.competion = competion;
        this.listOfbettingPlaces = [];
        this.numbersOfPlayers = 0;
    }

    var continents ={
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTHAMERICA: 'SA',
        NORTHAMERICA: 'NA', 
        AUSTRALIA: 'AU',
    }



    var srbija = new Country('Srbija', 5000, 'EU');
    var peraPeric = new Person('Pera', 'Peric', 'jun 17 1982');
    var igrac1 = new Player (peraPeric, 1050, srbija);
    console.log(srbija);
    console.log(peraPeric);
    console.log(igrac1);



})()