var students = [["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]]
    var averageMark = 0;

    for (var i = 0; i < students.length; i++) {
        averageMark += students[i][1];
        var average = averageMark / students.length;
    } 
    console.log("Average grade is " + average)

    if (average < 60) {
        console.log("Grade : F");
    }
    else if (average <= 70) {
        console.log("Grade : D");
    }
    else if (average <= 80) {
        console.log("Grade : C");
    }
    else if (average <= 90) {
        console.log("Grade : B");
    }
    else if (average <= 100) {
        console.log("Grade : A");
    }
