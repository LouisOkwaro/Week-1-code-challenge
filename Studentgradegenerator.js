
// Prompt function is called which prompts the user to input marks.

const prompt = require('prompt-sync')();

let marks = prompt('Enter marks you have');
console.log(`${marks}`); //Marks keyed in by user

// The studentGradeGenerator function contains conditionals for the grade ranges. 
// It outputs "Marks not recognized" if a number not within 0-100 is keyed in by user.

function studentGradeGenerator(marks) {
if (marks >= 0 && marks <= 39) {
    console.log("Grade E.");
} else if (marks >= 40 && marks <= 49) {
    console.log("Grade D.");
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade C.");
} else if (marks >= 60 && marks <= 79) {
    console.log("Grade B.")
} else if (marks >= 80 && marks <= 100) {
    console.log("Grade A.");
} else {
    console.log("Marks not recognized");
}
}
studentGradeGenerator(marks);
