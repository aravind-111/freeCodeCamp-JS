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

    function nextInLine(arr, item) {
        // Only change code below this line
        // arr.push(item)
        // return arr.length > 1 ? arr[0] : item;
    
        arr.push(item)
        return arr.length>0 ?arr.shift(item):1;
        // Only change code above this line
    }
    
    // Setup
    const testArr = [1, 2, 3, 4, 5];
    
    // Display code
    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));

// 49

    function welcomeToBooleans() {
        // Only change code below this line
    
        return true; // Change this line
    
        // Only change code above this line
    }
  
    
// 50

    function trueOrFalse(wasThatTrue) {
        // Only change code below this line
    
        if(wasThatTrue) return "Yes, that was true";
    
        else return "No, that was false";
    
        // Only change code above this line
    
    }

// 51

    // Setup
    function testEqual(val) {
        if (val == 12) { // Change this line
        return "Equal";
        }
        else if(val == 10) {
        return "Not Equal";
        }
    }
    
    testEqual(10);

// 52

    // Setup
    function testStrict(val) {
        if (val === 7) { // Change this line
        return "Equal";
        }
        else {
        return "Not Equal";
        }
    }
    
    testStrict(10);

// 53

    // Setup
    function compareEquality(a, b) {
        if (a === b) { // Change this line
        return "Equal";
        }
        return "Not Equal";
    }
    
    compareEquality(10, "10");

// 54

    // Setup
    function testNotEqual(val) {
        if (val != 99) { // Change this line
        return "Not Equal";
        }
        return "Equal";
    }
    
    testNotEqual(10);

// 55

    // Setup
    function testStrictNotEqual(val) {
        if (val !== 17) { // Change this line
        return "Not Equal";
        }
        else {
        return "Equal";
        }
    }
    
    testStrictNotEqual(10);

// 56

    function testGreaterThan(val) {
        if (val > 100) {  // Change this line
        return "Over 100";
        }
    
        if (val > 10) {  // Change this line
        return "Over 10";
        }
    
        return "10 or Under";
    }
    
    testGreaterThan(10);

// 57

    function testGreaterOrEqual(val) {
        if (val >= 21) {  // Change this line
        return "20 or Over";
        }
    
        if (val >= 10) {  // Change this line
        return "10 or Over";
        }
    
        return "Less than 10";
    }
    
    testGreaterOrEqual(10);

// 58

    function testLessThan(val) {
        if (val < 25) {  // Change this line
        return "Under 25";
        }
    
        if (val < 55 ) {  // Change this line
        return "Under 55";
        }
    
        return "55 or Over";
    }
    
    testLessThan(10);

// 59

    function testLessOrEqual(val) {
        if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
        }
    
        if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
        }
    
        return "More Than 24";
    }
    
    testLessOrEqual(10);

// 60

    function testLogicalAnd(val) {
        // Only change code below this line
    
        if ((val === 25 || val === 30 || val === 50) && val != "qw") {
            return "Yes";
        }
    
        // Only change code above this line
        return "No";
    }
    
    testLogicalAnd(10);

// 61

    function testLogicalOr(val) {
        // Only change code below this line
    
        if (val < 10 || val > 20) {
        return "Outside";
        }
    
        // Only change code above this line
        return "Inside";
    }
    
    testLogicalOr(15);

// 62

    function testElse(val) {
        let result = "";
        // Only change code below this line
    
        if (val > 5) {
        result = "Bigger than 5";
        }
        else {
        result = "5 or Smaller";
        }
    
        // Only change code above this line
        return result;
    }
    
    testElse(4);

// 63

    function testElseIf(val) {
        if (val > 10) {
        return "Greater than 10";
        }
    
        else if (val < 5) {
        return "Smaller than 5";
        }
    
        else {
        return "Between 5 and 10"
        };
    }
    
    testElseIf(7);

// 64

    function orderMyLogic(val) {
        if (val < 10 && val > 5) {
        return "Less than 10";
        } else if (val < 5) {
        return "Less than 5";
        } else {
        return "Greater than or equal to 10";
        }
    }
    
    orderMyLogic(7);

// 65

    function testSize(num) {
        // Only change code below this line
        if (num < 5) return "Tiny";
        else if (num < 10) return "Small";
        else if (num < 15) return "Medium";
        else if (num < 20) return "Large";
        else return "Huge";
    
        // Only change code above this line
    }
    
    testSize(7);

// 66

    const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

    function golfScore(par, strokes) {
    // Only change code below this line
    if(strokes === 1) return "Hole-in-one!";
    else if(strokes <= (par -2)) return "Eagle";
    else if(strokes === (par - 1)) return "Birdie";
    else if (strokes === par) return "Par";
    else if (strokes === (par + 1)) return "Bogey";
    else if(strokes === (par + 2)) return "Double Bogey";
    else if(strokes >= (par + 3)) return "Go Home!";

    // Only change code above this line
    }

    golfScore(5, 4);

// 67

    function caseInSwitch(val) {
        let answer = "";
        // Only change code below this line
    
        switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        }
        // Only change code above this line
        return answer;
    }
    
    caseInSwitch(1);

// 68

    function switchOfStuff(val) {
        let answer = "";
        // Only change code below this line
    
        switch (val) {
        case "a": 
            answer = "apple";
            break;
        case "b": 
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
        }
    
    
        // Only change code above this line
        return answer;
    }
    
    switchOfStuff(1);

// 69

    function sequentialSizes(val) {
        let answer = "";
        // Only change code below this line
        switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        }
    
    
        // Only change code above this line
        return answer;
    }
    
    sequentialSizes(1);

// 70

    function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line
    
        switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        }
    
        // Only change code above this line
        return answer;
    }
    
    chainToSwitch(7);

// 71

    function isLess(a, b) {
        // Only change code below this line
        
        return a < b;
    
        // Only change code above this line
    }
    
    isLess(10, 15);

// 72

    // Setup
    function abTest(a, b) {
        // Only change code below this line
    
        if(a < 0 || b < 0) return;
    
        // Only change code above this line
    
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    
    abTest(2,2);

// 73

    let count = 0;

    function cc(card) {
    // Only change code below this line

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--;
        break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // Only change code above this line
    }

    cc(2); cc(3); cc(7); cc('K'); cc('A');

// 74

    const myDog = {
        // Only change code below this line
    
    name: "panni",
    legs: 5,
    tails: 2,
    friends: [1, 3, 5],
    
        // Only change code above this line
    };

// 75

    // Setup
    const testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
    };
    
    // Only change code below this line
    const hatValue = testObj.hat;      // Change this line
    const shirtValue = testObj.shirt;    // Change this line

// 76

    // Setup
    const testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
    };
    
    // Only change code below this line
    const entreeValue = testObj["an entree"];   // Change this line
    const drinkValue = testObj["the drink"];    // Change this line

// 77

    // Setup
    const testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
    };
    
    // Only change code below this line
    const playerNumber = 16;  // Change this line
    const player = testObj[playerNumber];   // Change this line

// 78

    // Setup
    const myDog = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };
    
    // Only change code below this line
    
    myDog["name"] = "Happy Coder";

// 79

    const myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };
    
    myDog["bark"] = "asas";

// 80

    // Setup
    const myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"],
        "bark": "woof"
    };
    
    // Only change code below this line
    
    delete myDog.tails;

// 81

    function phoneticLookup(val) {
        var result = "";
        var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
        };
    // After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.
    
    
        result = lookup[val];
        // Only change code above this line
        return result;
    }
    phoneticLookup("charlie");

// 82

    function checkObj(obj, checkProp) {
        // Only change code below this line
        if (obj.hasOwnProperty(checkProp)) {
            return obj[checkProp];
        } else {
            return "Not Found";
        }
        // Only change code above this line
    }

// 83

    const myMusic = [
        {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
        },{
            "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
        }
    ];

// 84

    const myStorage = {
        "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
        }
    };
    
    const gloveBoxContents = myStorage.car.inside["glove box"];

// 85

    const myPlants = [
        {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
        },
        {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
        }
    ];
    
    const secondTree = myPlants[1].list[1];

// 86

    // Setup
    var recordCollection = {
        2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
        artist: 'Robert Palmer',
        tracks: []
        },
        5439: {
        albumTitle: 'ABBA Gold'
        }
    };
    
    // Only change code below this line
    function updateRecords(records, id, prop, value) {
        if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
        } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
        } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
        } else if (value === "") {
        delete records[id][prop];
        }
        return records;
    }
    
    updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// 87

    // Setup
    const myArray = [];

    // Only change code below this line
    let i = 5;
    while (i >= 0) {
    myArray.push(i);
    i--
    }

// 88

    // Setup
    const myArray = [];

    // Only change code below this line
    for(let i = 1; i<=5; i++) {
    myArray.push(i);
    }

// 89

    // Setup
    const myArray = [];

    // Only change code below this line

    for(let i = 1; i<10; i++) {
    myArray.push(i);
    i++
    }

// 90

    // Setup
    const myArray = [];

    // Only change code below this line

    for(let i=9; i>0; i--) {
    myArray.push(i);
    i--;
    }

// 91

    // Setup
    const myArr = [2, 3, 4, 5, 6];

    // Only change code below this line
    let total = 0;
    for(let i=0; i<myArr.length; i++) {
    total = total + myArr[i];
    }

// 92

    function multiplyAll(arr) {
        let product = 1;
        // Only change code below this line
        for (let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            product = product * arr[i][j];
        }
        }
        // Only change code above this line
        return product;
    }
    
    multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 93

    // Setup
    const myArray = [];
    let i = 10;

    // Only change code below this line
    do {
    myArray.push(10);
    i++;
    } while (i< 5)

// 94

    function sum(arr, n) {
        // Only change code below this line
    
        if(n <= 0) return 0;
        else return sum(arr, n - 1) + arr[n-1];
    
        // Only change code above this line
    }

// 95

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

//   96
  
    function lookUpProfile(name, prop) {
        // Only change code below this line
        for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
            } else {
            return "No such property";
            }
        }
        }
        return "No such contact";
        // Only change code above this line
    }
    
    lookUpProfile("Akira", "likes");

// 97

    function randomFraction() {

        // Only change code below this line
    
        Math.random();
    
        return Math.random();
    
        // Only change code above this line
    }

// 98

    function randomWholeNum() {

        // Only change code below this line
    
        return Math.floor(Math.random() * 10);
    }

// 99

    function randomRange(myMin, myMax) {
        // Only change code below this line
        return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
        // Only change code above this line
    }

// 100

    function convertToInteger(str) {
        return parseInt(str);
    }
    
    convertToInteger("56");

// 101

    function convertToInteger(str) {
        return parseInt(str, 2);
    }
    
    convertToInteger("10011");

// 102

    function checkEqual(a, b) {
        return a === b ? "Equal" : "Not Equal";
        
    }
    
    checkEqual(1, 2);

// 103

    function checkSign(num) {
        return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    }
    
    checkSign(10);


// 104

    function countdown(n) {
        if (n < 1) {
        return [];
        } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
        }
    }

// 105

    function rangeOfNumbers(startNum, endNum) {
        if (endNum - startNum === 0) {
        return [startNum];
        } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
        }
    }