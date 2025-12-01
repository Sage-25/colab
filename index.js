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


function printMathScore (studentName, studentMathScore) {
  let report = `Hello ${studentName} your math score is ${studentMathScore}`
  console.log(report)
}

printMathScore("Damilola", 50)
printMathScore("Femi", 90)
printMathScore("Chidera", 100)


// RETURN STATEMENT
function mathScoreRecord (nameStudent, mathScoreStudent) {
  let scoreReport = `Hey ${nameStudent} your math score for this semester is ${mathScoreStudent}`

  return scoreReport
}

let studentScoreReport = mathScoreRecord("Femi", 100)
console.log(studentScoreReport)

let samuelsScore = mathScoreRecord("Samuel", 69.5)
console.log(samuelsScore)



function averageCalculator(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4)/4

  return average
}

let averageOutcome = averageCalculator(23,24,26,33)
console.log(averageOutcome)


//RETURN STATEMENT PRACTICAL
function designStyles(colours, texts, widgets, grids) {
  let productStyle = `The ${colours} are the essense of the design, while the ${texts} are the communications tool of the product, followed by the ${widgets} which helps with consistency and the ${grids} helps with aligning your information across your design`

  return productStyle
}

let productCommunication = designStyles("blue colour", "Sans Seriff Fonts", "Style guide", "2 point grid")
console.log(productCommunication)


// let x = 10 + '5'
// console.log(x)

// let count =5; count = 10;
// console.log(count)

// let isStudent = true;
// console.log(isStudent)

// let percentage = 10 % 3
// console.log(percentage)

// let figure = 10++
// console.log(figure)

function add (a,b = 10) {
  let addtionalFigure = (a + b)
  
  return addtionalFigure
}

let moreFigure = add (5,2)
console.log(moreFigure)

let msg = 'Hello';
console.log(msg)

// TYPE OF
let myVariable = 100
console.log(typeof myVariable)

let myvariable = {
  firstName : "Chinedu",
  lastname : "Okeke",
  Role : "Product Design"
}

console.log(typeof myvariable)

// TERNARY OPERATORS
let votingAge = 18
let voterAge = 14

if(votingAge >= voterAge) {
  console.log("Eligible to vote")
} else {"Not elgible to vote"

}


let votersDetail = votingAge >= voterAge ? "I want to vote" : "I =don't want to vote"

console.log(votersDetail)


let figuresLarge = 20 > 40 ? "hot" : "cold"
console.log(figuresLarge)


// OBJECT DESTRUCTION
const car = {
  brand : "Hyundai",
  model : "Santafe",
  year : 2018,
  color : "Black",
  engineType : "GDI",
  mileage : 55000,
  roadWorthiness : function () {
    let value = 100000 - this.mileage
    let roadW = value > 60000 ? "Not Road Worthy" : "Very Road Worthy"

    return roadW
  }
}

let mileageResult = car.roadWorthiness()
console.log(mileageResult)

const {brand:bd, model:md, engineType:et} = car
console.log(et, bd, md)


const house = {
  color : "Milk",
  size : "340sqm",
  style : "Duplex"
}

const {size} = house
house.size = "800sqm"
console.log (size)


const user = {
  name : "Ada",
  age : 25,
  address : {
    city : "Lagos",
    country : "Nigeria",
    street : "Yaba"
  }
}

const {age, address: {country}} = user
console.log(country)


//METHOD
const person = {
  name : "Anne",
  city : "Enugu",
  age : 23,
  adultHoodChecker : function () {
    let outcome = this.age > 18 ? "Adult" : "Non-Adult"
    return outcome
  }
}

console.log(person.adultHoodChecker())


function addTwoNumbers(a, b){
  let sum = a + b 
  return sum
}

// FUNCTION EXPRESSION
const sayMyName = function(){
  console.log("Chinedu Okeke")
}

sayMyName()


const addTwoNumberrs = function(a,b) {
  let sumNumber = a + b
  console.log(sumNumber)
}

addTwoNumberrs(23, 12)

// ARROW FUNCTION
const hereIsMyName = () => {
  console.log("Chinedu")
}

hereIsMyName()

const sayUserName = (username, ageRange) => {
  let said = `Your user name is ${username} and I am ${ageRange} years old`
  console.log(said)
}

sayUserName("Linda", 18)


// SINGLE ARROW FUNCTION
const namely = myName => `Call me ${myName}`

console.log(namely("Chinedu"))

const sayName = (firstName, lastName) => {

}

// ARRAY (Data Structure for listing data)
[
  "Anjola",
  "Damilola",
  "Joy",
  "Christian"
]

[
  23,
  24,
  26,
  "Abuja",
  "Chinedu",
  false
]

const countrysToVisit = ["Greece", "SouthAfrica", "United Kingdom", "United States"]

console.log(countrysToVisit)

const aiCompanies = ["ChatGPT", "Gemini", "Perplexity"]
let result = aiCompanies[0]
aiCompanies[0] = "Bolt"
let len = aiCompanies.length

console.log(len)

// ARRAYS PART II
// [`Angola`, `New Zealand`, `Ghana`, `Congo`, `Madagascar`]

// ["Dell", "Lenovo", "Apple", "HP"]

// [23, 45, 20, 44, 32]


// const carA = 

// const carB = 

// const carC = 

const listOfCarsToFix = [
  {
    carName : "Mercedes",
    carColor : "White",
    carChasis : "TBGDHUWIDUYDLSADW",
    carModel : "GLE",
    carYear : 2020
  },

  {
    carName : "Toyota",
    carColor : "Black",
    carChasis : "EWRJENDVCJDFE",
    carModel : "Camry",
    carYear : 2018
  },

  {
    carName : "Toyota",
    carColor : "Silver",
    carChasis : "LOEIOSYSNCWJFS",
    carModel : "Venza",
    carYear : 2016
  }

]

// const PersonA =

// const PersonB = 

const measurementList = [
  {
    head : 45,
    neck : 22,
    hand : 30,
    leg : 33,
    stomach : 30
  },

  {
    head : 20,
    neck : 28,
    hand : 36,
    leg : 40,
    stomach : 30
  }
]

// const userOne = 

// const userTwo = 

// const userThree = 


const listOfUsers = [
  {
    name : "John Klep",
    username : "jokl",
    email : "john@gmail.com"
  },

  {
    name : "Phillip Bassey",
    username : "philb",
    email : "phillip.b@gmail.com"
  },

  {
    name : "Vivian Rohn",
    username : "vivr",
    email : "vivianr@gmail.com"
  }
]


// ARRAY METHODS
const countriesName = ["Nigeria", "Ghana", "Kenya"]
countriesName.push("Uganda")

console.log(countriesName)


const countriesCode = ["Nigeria", "Ghana", "Kenya"]
countriesCode.pop()

console.log(countriesCode)


const countries = ["Nigeria", "Ghana", "Kenya"]
countries.unshift("Zambia")

console.log(countries)


const countriesNew = ["Nigeria", "Ghana", "Kenya"]
countriesNew.shift("Zambia")

console.log(countriesNew)


// INDEXOF
const countriesOld = ["Nigeria", "Ghana", "Kenya"]
const resultOld = countriesOld.indexOf("Kenya")

console.log(resultOld)


const countriesList = ["Nigeria", "Ghana", "Kenya", "Zambia", "Congo", "Namibia"]
const resultList = countriesList.includes("Cameron")

console.log(resultList)


const boys = ["Anderson", "Kunle", "Hassan"]
const girls = ["Ene", "Faith", "Deborah"]

const allStudent = boys.concat(girls)

console.log(allStudent)



// ARRAY CONTINUATION
const arrayOfCountries = ["Namibia", "Germany", "Nigeria", "Ghana", "Botswana"]
let resultArray = arrayOfCountries.slice(1, 2)

console.log(resultArray)


const arrayOfCountriesTwo = ["Namibia", "Germany", "Nigeria", "Ghana", "Botswana"]
let resultArrayTwo = arrayOfCountriesTwo.splice(1, 1)

console.log(resultArrayTwo)


const arrayOfCountriesTwoo = ["Namibia", "Germany", "Nigeria", "Ghana", "Botswana", "South Africa", "Gambia"]
let resultArrayTwoo = arrayOfCountriesTwoo.join(",")

console.log(resultArrayTwoo)


const arrayOfCountriesTwooo = ["Namibia", "Germany", "Nigeria", "Ghana", "Botswana", "Gambia"]
let resultArrayTwooo = arrayOfCountriesTwooo.reverse()

console.log(resultArrayTwooo)


const arrayOfCountriesTwoooo = [3,2,9,1,9,0,42,5,7,4]
let resultArrayTwoooo = arrayOfCountriesTwoooo.sort()

console.log(resultArrayTwoooo)


// LOOPS
// FOR LOOP
const arrayOfCountriesNew = ["Ghana", "Nigeria", "South Africa", "England"]

// Initialization, condition & execution
for (let x = 0; x < 3; x++ ){
  let result = arrayOfCountriesNew[x]
  console.log(result)
}


const arrayOfNames = ["Andrew", "Bieme", "Tom", "Amaka", "Paul"]

for (let x = 0; x < 5; x++) {
  let item = arrayOfNames[x]
  console.log(item)
}


const arrayOfNumbers = [1, 2, 3, 4, 5, 6]
const emptyArray = []

for (let x = 0; x < 6; x++) {
  let numberItems = arrayOfNumbers[x] * 3
  emptyArray.push(numberItems)
}

console.log(emptyArray)


const arrayOfStudents = ["John", "Jane", "Joel", "Joy", "Joshua"]

for (let x = 0; x < 5; x++) {
  let studentNumbers = arrayOfStudents[x] + "JSS3"
  console.log(studentNumbers)
}


const studentRecords = [
  {
    fullname : "Joy Paul",
    level : "Primary 6",
    regNo : 354858,
    averageScore : 77,
    age : 14
  },

  {
    fullname : "Joshua John",
    level : "Primary 5",
    regNo : 3548,
    averageScore : 88,
    age : 14
  },

  {
    fullname : "Eunice Eke",
    level : "Primary 6",
    regNo : 104858,
    averageScore : 98,
    age : 15
  }
]

// for (let x = 0; x < 3; x++) {
//   let resultRecords = studentRecords [x]
//   console.log(resultRecords)
// }

studentRecords.forEach((item, index, array) => {
  console.log(item)
  console.log(index)
})


const familyRecord = [
  {
    firstName : "Kamsi",
    lastName : "Okeke",
    age : 12,
    CountryOfOrigin : "Nigeria",
    CurrentResidency : "United States Of America",
    homeAddress : "23, Sabotua Close, Fidelity Junction"
  },

  {
    firstName : "Femi",
    lastName : "Okeke",
    age : 18,
    CountryOfOrigin : "Nigeria",
    CurrentResidency : "United States Of America",
    homeAddress : "23, Sabotua Close, Fidelity Junction"
  },

  {
    firstName : "Simon",
    lastName : "Okeke",
    age : 24,
    CountryOfOrigin : "Nigeria",
    CurrentResidency : "United States Of America",
    homeAddress : "23, Sabotua Close, Fidelity Junction"
  }
]

for (let x = 0; x < 3; x++) {
  let recordedMember = familyRecord[x]
  console.log(recordedMember)
}


