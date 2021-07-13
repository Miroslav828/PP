function Students (name, surname){
    this.name = name;
    this.surname = surname;
}
Students.prototype.getStudentData = function (){
    return `${this.name} ${this.surname}`;
}