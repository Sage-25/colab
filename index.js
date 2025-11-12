// console.log('Javascript is next!')

// console.log("Chinedu Okeke")

// console.log('20 + 2')

// 100
// 10.5

// true
// false

// Numbers
// String
// Boolean
// Variables
// Variable reassignement

// var numberStore = 46;
// console.log (numberStore)

// let numberBox = 100;

// const numberRoom = 23;

// let nameOfStudent = "Brain Brain";
// let ageOfStudent = 33;

// let firstName = "Brian";
// let lastName = "Okafor";
// let age = 20;
// let homeAddress = "32, Ajubade Street";

// let number1 = 30;
// let number2 = 20;
// let number3 = 10;

// console.log(number1);
// console.log(number2);
// console.log(number3);

// let ageOfStudent = 40;
// let nameOfStudent = "Johnson Blue";
// let hasStudentPaid = false;
// let studentRegNo = "HG4958DF";

// console.log(ageOfStudent);
// console.log(nameOfStudent);
// console.log(hasStudentPaid);
// console.log(studentRegNo);

let number = 10
number ++
console.log(number);

let newNumber = 20
newNumber --
console.log(newNumber);

let mainNumber = 30
mainNumber +=2
console.log(mainNumber);

let anotherNumber = 25
anotherNumber -= 5
console.log(anotherNumber);

let gameScore = 200
gameScore *= 10
console.log(gameScore);

let gameNewScore = 5000
gameNewScore /= 15
console.log(gameNewScore);

// COMPARISON OPERATION
let number1 = 10
let number2 = 5

let outcome = number1 > number2

console.log(outcome);


let number3 = 10
let number4 = 5

let outCome = number3 < number4

console.log(outCome);


let damilolaScore = 10;
let victorScore = 10;

let outcomeComparison = damilolaScore == victorScore;
console.log(outcomeComparison);


let cutOffMark = 50;
let femiScore = 50;

let cutOffResult = cutOffMark <= femiScore;
console.log(cutOffResult);


let cutOffMark1 = 50;
let simonScore = 50;

let cutOffResult1 = cutOffMark1 !== simonScore;
console.log(cutOffResult);


let cutOffMark2 = 80;
let simonScore1 = 50;

//CONTROL FLOW STATEMENT
if(simonScore1 >= cutOffMark2) {
  console.log("Hey Dami! You have passed!")
} else {
  console.log("Hey Dami! You failed. Try again next semester")
}

let cartCost = 200
let accountBalance = 20

if (accountBalance >= cartCost) {
  console.log ("Purchase Successfful!")
} else {
  console.log('Insufficient Funds!')
}

// LOGICAL OPERATIONS
let cutOffmark = 240;
let validAge = 18;
let studentScore = 300;
let studentAge = 16;

if(studentScore >= cutOffMark && studentAge >= validAge) {
  console.log("Congratulations! You have been given an admission.")
} else {
  console.log("Your admission status is nill!")
}

let cutOffmark1 = 240;
let validAge1 = 18;
let studentScore1 = 200;
let studentAge1 = 26;

if(studentScore1 >= cutOffMark1 || studentAge1 >= validAge1) {
  console.log("Congratulations! You have been given an admission.")
} else {
  console.log("Your admission status is nill!")
}

//CONCACTENATION
let temperature = 20;

let sentence = (`The temperature is ${temperature} degree`);
console.log(sentence);


let studentName = "Anthonia";
let studentScoreMain = 54;

let studentSentence = (`Hey ${studentName} your score is ${studentScoreMain}`);
console.log(studentSentence);

let savedPassword = "rainfall"
let enteredPassword = "rainfal"

if(enteredPassword === savedPassword) {
  console.log("Login is successful")
} else {
  console.log("Incorrect Password")
}

//OBJECT LITERALS
const carRecord = {
  carName : "Honda",
  carColour : "Black",
  carModel : "Civic",
  carVin : "348BFN32HFB",
  carYear : 2016,
}

console.log(carRecord);


const humanRecord = {
  humanName : "Linda",
  humanAge : 22,
  humanCountry : "Nigeria",
  humanHeight : 6.4,
  humanGender : "Female"
}

console.log(humanRecord);


const bankCustomer = {
  customerName : "Joshua Malaks",
  customerNationality : "Nigerian",
  customerBVN : 5837235474838,
  customerPhoneno : 8077635142,
  customerState : "Osun State",
  customerAddress : "14 Victor Olaiya Avenue, Aguda Surulere"
}

console.log(bankCustomer);


const studentRecord = {
  studentName : "Paul",
  studentDepartment : "Chemistry",
  studentFaculty : "Science",
  studentRegNo : "98523"
}

console.log(studentRecord);


const carDetailsRecord = {
  carName : "Toyota",
  carYear : 2026,
  carModel : "Venza",
  carColour : "Silver",
  carTireSize : 15,
  carMileage : 100000,
  carType: "Sedan"
}

console.log(carDetailsRecord);

//ACCESSING OBJECT PROPERTIES (DOT NOTATION, )
let mileage = carDetailsRecord.carMileage
console.log(mileage);

let colour = carDetailsRecord.carColour
console.log(colour);

// // ADDING OBJECT PROPERTIES WITH DOT NOTATION
// carDetailsRecord.vinNumber = "FJGBCD885737DCH"
// console.log(carDetailsRecord);

// UPDATING AN EXISTING PROPERTY
carDetailsRecord.carModel = "Camry"
console.log(carDetailsRecord);

// DELETE AN EXISTING PROPTERY WITH THE DELETE KEYWORD
delete carDetailsRecord.carColour

// // FREEZE AN EXISTING PROPERTY (You can't add, delete or change)
// Object.freeze(carDetailsRecord);
// carDetailsRecord.vinNumber = "FJGBCD885737DCH"

// console.log(carDetailsRecord)

// Object.freeze(carDetailsRecord);
// delete carDetailsRecord.carYear

// console.log(carDetailsRecord)

// SEAL AN OBJECT LITERAL (You can't delete but you can update)
Object.seal(carDetailsRecord)
carDetailsRecord.carYear = 2078

console.log(carDetailsRecord)

Object.seal(carDetailsRecord)
delete carDetailsRecord.carYear

console.log(carDetailsRecord)


//OBJECT LITERAL NESTING
const studentRecordNew = {
  fullName : 14,
  age : 14,
  studentClass : "JSS3",
  lastSemesterResult : {
    mathematics : "A",
    english : "B",
    biology : "A",
    technicalDrawing : "B"
  }
}

console.log(studentRecordNew);

let studentDetail = studentRecordNew.studentClass
console.log(studentDetail)

let studentDetailNew = studentRecordNew.lastSemesterResult.technicalDrawing
console.log(studentDetailNew)

let englishGrade = studentRecordNew.lastSemesterResult.english
console.log(englishGrade)


const streetRecord = {
  streetName : "Park Street",
  streetZone : "Cadastral Zone",
  council : "Municipal",
  houseA : {
    houseOwner : "Jacintha",
    houseColour : "Beige",
    houseModel : "Duplex",
    landSize : "450sqm"
  },

  houseB : {
    houseOwner : "Patricia",
    houseColour : "Milk",
    houseModel : "Bungalow",
    landSize : "450sqm"
  },

  houseC : {
    houseOwner : "Paul",
    houseColour : "Skyblue",
    houseModel : "Duplex",
    landSize : "1000sqm"
  }
}

console.log(streetRecord)


//FUNCTION
let age1 = 32
let age2 = 20
let age3 = 28

function averageAge() {
  let average = (age1 + age2 + age3) / 3
  console.log(average)
}

averageAge()

function nameOfFunction () {
  console.log(`This is a function`)
}

nameOfFunction()


function totalPriceOfTwoItems(firstItemPrice, secondItemPrice) {
  let totalPrice = firstItemPrice + secondItemPrice
}


function totalPriceOfTwoItemsNew(price1, price2) {
  let totalPriceNew = price1 + price2
  console.log(totalPriceNew)
}

totalPriceOfTwoItemsNew(200, 100)
totalPriceOfTwoItemsNew(45, 90)
totalPriceOfTwoItemsNew(320, 98)