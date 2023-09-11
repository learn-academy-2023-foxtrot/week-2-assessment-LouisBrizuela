// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
// console.log(cohort.split(""))

// a) Your answer: I believe the output will be an array of the string
// b) Verify and explain: the .split is a method that turns the string into an array of substrings

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I dont think it will output anything because name is never defined
// b) Verify and explain: "undefined" this is because "name" was never defined

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: multiplies every number in the array by 2
// b) Verify and explain: the output is "[8, 10, 12, 14, 16]" because map iterates through each index of the array the, function then muliplies them by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: will make a new array with only odd numbers
// b) Verify and explain: the output is "[11, 13, 15]" because .filter iterates through the array, the function checks for odd numbers and returns true if odd, then only the odd numbers are placed in a new array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: will output "Javascript"
// b) Verify and explain: the object "myCodingSkills" is called and asked to return the value stored in the array(key) named: "languages" this is futher specified which an index, which in this case is "0"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: "George" because it is placing the name into the class learn
// b) Verify and explain: the output is "student: George, cohort: Echo, year: 2023" because it is going to output everything in the learn class 
