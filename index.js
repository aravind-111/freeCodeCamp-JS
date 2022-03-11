// 1

    // This is an in-line comment.
    /* This is a
    multi-line comment */

// 2

    var myName;

// 3

    // Setup
    var a;

    // Only change code below this line

    a=7;

// 4

    // Setup
    var a;
    a = 7;
    var b;

    // Only change code below this line

    b = a;

// 5

    var a = 9;

// 6

    var myFirstName = "a";

    var myLastName = "b";

// 7

    // Only change code below this line
    var a = 5;
    var b = 10;
    var c = "I am a";
    // Only change code above this line

    a = a + 1;
    b = b + 5;
    c = c + " String!";

// 8

    // Variable declarations
    var studlyCapVar;
    var properCamelCase;
    var titleCaseOver;

    // Variable assignments
    studlyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;

// 9

    const catName = "Oliver";
    const catSound = "Meow!";

// 10

    const FCC = "freeCodeCamp"; // Change this line
    let fact = "is cool!"; // Change this line
    fact = "is awesome!";
    console.log(FCC, fact); // Change this line

// 11

    const sum = 10 + 10;

// 12

    const difference = 45 - 33;

// 13

    const product = 80 * 1;

// 14

    const quotient = 66 / 33;

// 15

    let myVar = 87;

    // Only change code below this line
    myVar = ++myVar;

// 16

    let myVarr = 11;

    // Only change code below this line
    myVarr = --myVarr;

// 17

    const myDecimal = 5.7;

    // Only change code below this line
    console.log(myDecimal);

// 18

    const pproduct = 2.5 * 2;

// 19

    const qquotient = 4.4 / 2.0; // Change this line

// 20

    let remainder;

    remainder = 13 % 11;

// 21

    let a = 3;
    let b = 17;
    let c = 12;

    // Only change code below this line
    a += 12;
    b += 8;
    c += 7;

// 13

    let a = 11;
    let b = 9;
    let c = 3;

    // Only change code below this line
    a -= 6;
    b -= 15;
    c -= 1;

// 14

    let a = 5;
    let b = 12;
    let c = 4.6;

    // Only change code below this line
    a *= 5;
    b *= 3;
    c *= 10;

// 15

    let a = 48;
    let b = 108;
    let c = 33;

    // Only change code below this line
    a /= 12;
    b /= 4;
    c /= 11;

// 16

    const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// 17

    const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 18

    const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// 19

    const myStr = "This is the start." + " This is the end."; // Change this line

// 20

    let myStr = "This is the first sentence.";
    myStr += " This is the second sentence.";

// 21

    // Only change code below this line
    const myName = "Joe";
    const myStr = "Biden" + myName + "is a fool";

// 22

    // Change code below this line
    const someAdjective = "good";
    let myStr = "Learning to code is ";
    myStr += someAdjective;

// 23

    // Setup
    let lastNameLength = 0;
    const lastName = "Lovelace";

    // Only change code below this line
    lastNameLength = lastName.length;

// 24

    // Setup
    let firstLetterOfLastName = "";
    const lastName = "Lovelace";

    // Only change code below this line
    firstLetterOfLastName = lastName[0]; // Change this line

// 25

    // Setup
    let myStr = "Jello World";

    // Only change code below this line
    myStr = "Hello World"; // Change this line
    // Only change code above this line

// 26

    // Setup
    const lastName = "Lovelace";

    // Only change code below this line
    const thirdLetterOfLastName = lastName[2]; // Change this line

// 27

    // Setup
    const lastName = "Lovelace";

    // Only change code below this line
    const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// 28

    // Setup
    const lastName = "Lovelace";

    // Only change code below this line
    const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// 29

    const myNoun = "dog";
    const myAdjective = "big";
    const myVerb = "ran";
    const myAdverb = "quickly";

    // Only change code below this line
    let wordBlanks = myNoun + " "  + myAdjective + " " + myVerb + " " + myAdverb; // Change this line
    // Only change code above this line

// 30

    // Only change code below this line
    const myArray = ["ds", 87];

// 31

    // Only change code below this line
    const myArray = [["dsf"], ["dsfa"]];

// 32

    const myArray = [50, 60, 70];

    const myData = myArray[0];

// 33

    // Setup
    const myArray = [18, 64, 99];

    // Only change code below this line

    myArray[0] = 45;

// 34

    const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
    ];
    
    const myData = myArray[2][1];

// 35

    // Setup
    const myArray = [["John", 23], ["cat", 2]];

    // Only change code below this line
    myArray.push(["dog", 3]);

// 36

    // Setup
    const myArray = [["John", 23], ["cat", 2]];

    // Only change code below this line

    const removedFromMyArray  = myArray.pop();

// 37

    // Setup
    const myArray = [["John", 23], ["dog", 3]];

    // Only change code below this line

    const removedFromMyArray = myArray.shift();

// 38

    // Setup
    const myArray = [["John", 23], ["dog", 3]];
    myArray.shift();

    // Only change code below this line
    myArray.unshift(["Paul", 35]);

// 39

    const myList = [["dsadsa", 12], ["dsadsa", 12], ["dsadsa", 12], ["dsadsa", 12], ["dsadsa", 12],];

// 40

    function reusableFunction() {
        console.log("Hi World");
    }
    
    reusableFunction();

// 41

    function functionWithArgs(a, b) {
        console.log(a+b);
    }
    
    functionWithArgs(1, 2);

// 42

    function timesFive(a) {
        return a*5;
    }
    
    timesFive(5);

// 43

    // Declare the myGlobal variable below this line
    const myGlobal = 10;
    const oopsGlobal = 5;

    function fun1() {
    // Assign 5 to oopsGlobal Here
    }

    // Only change code above this line

    function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
    }

// 44

    function myLocalScope() {
        // Only change code below this line
        const myVar = 10;
        console.log('inside myLocalScope', myVar);
    }
    myLocalScope();
    
    // Run and check the console
    // myVar is not defined outside of myLocalScope
    console.log('outside myLocalScope', myVar);

// 45

    // Setup
    const outerWear = "T-Shirt";

    function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater"
    // Only change code above this line
    return outerWear;
    }

    myOutfit();

// 46

    // Setup
    let sum = 0;

    function addThree() {
    sum = sum + 3;
    }

    // Only change code below this line


    function addFive() {
    sum = sum + 5;
    }

    // Only change code above this line

    addThree();
    addFive();

// 47

    // Setup
    let processed = 0;

    function processArg(num) {
    return (num + 3) / 5;
    }

    // Only change code below this line

    processed = processArg(7)

// 48

