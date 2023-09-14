// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleBy", () => {     // this will test is the function will work
    it("returns is it divisable by 3", () => {

    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    expect(divisibleBy(object1)).toEqual("15 is divisable by three")

    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    expect(divisibleBy(object2)).toEqual("0 is divisable by three")

    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"
    expect(divisibleBy(object3)).toEqual("-7 is not divisable by three")
    
    })
})

// pseudo code
// name : divisibleBy
// input : object
// output : string and number
// process : conditional statement that checks if the value is divisable by 3 or not

// b) Create the function that makes the test pass.

const divisibleBy = (object) => {   // the object will be passed through here
    if (object.number % 3 === 0) { // this will check if the number is divisable by 3 using the % operator
        return `${object.number} is divisable by three` // will return the same number back and string saying it is divisable by three
    }
    else if (object.number % 3 !== 0) { // this will check if the number is not divisable by 3 usiong the ! operator
       return `${object.number} is not divisable by three` // this will return the same number back and string saying this it is not divisable by three
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capArray", () => {        // this will test if the function will work
    it("returns the first letter of each word in the arrays capitalized", () => {
    
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    
    })
})
// b) Create the function that makes the test pass.

const capArray = (array) => {   // the arrays will be passed through here
        return array.map((value) => {   // this will allow the function to iterate through each element of my array
            return value[0].toUpperCase() + value.substring(1) // this will capitalize each letter in index "0" and then will concatenate the rest of the string starting at index "1"
        })
    }

// Pseudo code:
// name : capArray
// input : array
// output : array
// process : use .map() to iterate through the array and use .toUpperCase to capitalize the letter in index 0, then concatenate the rest of the string using .substring() and starting from subtring 1

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.





describe("firstVowel", () => {      //this will test if the function will work
    it("returns the index of the first vowel", () => {
        
        const vowelTester1 = "learn"
        // Expected output: 1
        expect(firstVowel(vowelTester1)).toEqual(1)
        
        const vowelTester2 = "academy"
        // Expected output: 0
        expect(firstVowel(vowelTester2)).toEqual(0)
        
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name : firstVowel
// input : string
// output : 1 number
// process : create a variable to hold a string of the vowels, iterate the string in order to get the index of the letters, create a conditional statement that checks if the string has vowels, and then return the index 

const firstVowel = (string) => {    // the strings will be passed through here
    let vowels = "aeiou"    // this will hold the vowels 
    for (let i = 0; i < string.length; i++) {   // this will iterate through the string and keep a count of the string length
        if (vowels.includes(string[i])) {   // this will check if any of the letters that are being iterated are a vowel
            return i    // this will return the index of the letter that is the first vowel
        }
    }
}
