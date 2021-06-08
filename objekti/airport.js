'use strict';

(function (){
    console.log('Hi')

function Person (name, surname){
    if(!name || !surname){
        throw new Error('fields name and surname are required');
    }
    this.name = name;
    this.surname = surname;
    this.getData = function (){
        return this.name + ' '+ this.surname
    };
} 

function Seat (number, category){
    category = category || 'e'; 
    if (!['e','b'].includes(category)){
        throw new Error('invalid category input');
    }
    this.number = number || Math.floor(91 * Math.random() + 10);
    this.category = category;
    this.getData = function (){
        return this.number + ', ' + this.category.toUpperCase()
    };
}

function Passenger (person, seat) {
    if (!person ||  !(person instanceof Person)) {
        throw new Error('Invalid person input');
    }
    if (!seat || !(seat instanceof Seat)){
        throw new Error ('Invalid seat input');
    }
    this.person = person;
    this.seat = seat;
    this.getData = function (){
        return this.seat.getData() + ', ' + this.person.getData()
    };
}

function Flight (relation, date){
    if (!relation || !date){
        throw new Error ('invlid input');
    }
    this.relation = relation;
    this.date = new Date (date);
    this.listOfPassengers = [];
    this.addPassenger = function (passenger){
        if(!passenger || !(passenger instanceof Passenger)){
            throw new Error ('invalid input')
        }
        this.listOfPassengers.push (passenger);
    }
    this.getData = function (){
        var year = this.date.getFullYear();
        var month = this.date.getMonth() + 1;
        var day = this.date.getData();
        var result = '\t' + day +'.'+ month +'.' + year +',' +this.relation + '/n'; 
        this.listOfPassengers.forEach(function(passenger){
            result += '\t\t' + passenger.getData() + '\n'  
        })
    }
}

function Airport (){
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];
    this.addFlight = function (flight){
        if(!flight || !(flight instanceof Flight)){
            throw new Error ('invalid input')
        }
        this.listOfFlights.push (flight);
    }
}


var person1 = new Person ('Miroslav', 'Madic');
var seat1 = new Seat ();
var passenger1 = new Passenger(person1, seat1);
var belgradeTivat = new Flight ('Belgrade - Tivat', 'Jun 16 2021');
var nikolaTesla = new Airport;
belgradeTivat.addPassenger (passenger1);
console.log(person1.getData());
console.log(seat1.getData());
console.log(passenger1.getData());
console.log(belgradeTivat);
console.log(nikolaTesla);




}())