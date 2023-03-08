/*
function functionName(param1, param2){
    //statements
}

function myFunction(num1,num2){ 
    num3=num1*num2;
    return num3
}

funVariable=function myFunc(num1,num2){
    num3=num1*num2;
    return num3;
}

console.log(funVariable(10,20)); // 200

function welcome(){console.log("Hello World");}
function goodbye(){console.log("See you later");}

function greet(choice){
    choice();
}

greet(welcome);
greet(goodbye);

// Higher Order Function
function greet(){
    var hello=function welcome(){console.log("hello world");}
    return hello;
}

var retFunc=greet();
retFunc();

// Anonymous function

function test(test1){
    test1();
}

test(function(){console.log("Testing");});

// Arrow function
function test2(test){
    test();
}
test2(()=>{console.log("Arrow function")})

// Mutli-paratemer, multi line code
calculateCost=(ticketPrice, noOfPerson)=>{
    noOfPerson=ticketPrice*noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500,2)); // 1000

trip=()=>"Let's go to trip";
console.log(trip()); // Let's go to trip

trip=place=> "Trip to "+place;
console.log(trip("Paris")); // Trip to Paris

trip=_=> "Trip to "+_;
console.log(trip("France")); // Trip to France

// Variable Scopes
function validateTravellerPassword(password){
    for(var i=0;i<password.length;i++){

    }
}

function validateTravellerName(name){
    for(let i=0;i<name.length;i++){
    }
    //console.log(i); // This will give an error as i is not accessible outside the for block
}
validateTravellerName("Jack");
validateTravellerPassword("12345");

{
    const a=10;
}
//console.log(a);

// Built-in Functions

var x="123";
console.log(Number(x)); // 123
console.log(Number("123")); // 123
console.log(Number("123.1")); // 123
console.log(Number(10/0)); // Infinity
console.log(Number(NaN)); // NaN
console.log(Number("123abc")); // NaN


// Array
// Create an array
placesToVisit=["Paris", "New York", "Switzerland"];
console.log(placesToVisit[0]); // Paris
console.log(placesToVisit[2]); // Switzerland

// Destructuring Array
numArr=[100, 200, 300];
var [a, b, c]=numArr;
// The numArr is now destructured and indivdual values are stored in the individual variables
console.log(a);
console.log(b);
console.log(c);

// Array functions
// push()
places=["Paris", "New York"];
places.push("Switzerland");
//console.log(places); // [ 'Paris', 'New York', 'Switzerland' ]

// pop()
places.pop();
console.log(places); // [ 'Paris', 'New York']

// index()
console.log(places.indexOf("New York")); // 1

// splice(pos,n)
places = ["Paris", "New York",  "Switzerland"];
places.splice(1, 2); // This will remove 2 elements from index 1
console.log(places); // ["Paris"]

// forEach()
places = ["Paris", "New York",  "Switzerland"];
places.forEach(function(place) {
    console.log(place);
});
// Paris
// New York
// Switzerland

// map()
placesToVisit = ["Paris", "New York",  "Switzerland"];
function displayUpperCase(place){
    return place.toUpperCase();
}

placesUpperCase=placesToVisit.map(displayUpperCase);
console.log(placesUpperCase); // [ 'PARIS', 'NEW YORK', 'SWITZERLAND' ]

// filter()
placesToVisit = ["Paris", "New York",  "Switzerland"];

function filterPlaces(val){
    if(val.length > 5){
        return true;
    }
}

filteredPlaces=placesToVisit.filter(filterPlaces);
console.log(filteredPlaces); //[ 'New York', 'Switzerland' ]


placesToVisit = ["Paris", "New York",  "Switzerland"];

function findPlaces(val){
    if(val.length>5){
        return true;
    }
}

foundPlaces=placesToVisit.find(findPlaces);
console.log(foundPlaces); // New York

// Arrray with Arrow function
// forEach()
placesToVisit.forEach(place => console.log("Trip to: "+place));
// Trip to Paris
// Trip to New York
// Trip to Switzerland

// filter()
filteredPlace=placesToVisit.filter(place => place.length>5);
console.log(filteredPlace); // [ 'New York', 'Switzerland' ]

// map()
placesUpperCase=placesToVisit.map(place => place.toUpperCase());
console.log(placesUpperCase); //[ 'PARIS', 'NEW YORK', 'SWITZERLAND' ]

// find()
findPlace=placesToVisit.find(place => place.length > 5);
console.log(findPlace); //New York


// Date Object
// to get today's Date
var today = new Date();
console.log("Today's Date is ",today); //Tue Feb 28 2023 15:47:14 GMT+0530 (India Standard Time)

// pass value in milliseconds
var startingDate = new Date(0);
console.log("Date starts from ",startingDate); //the starting date is Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

var dateInMillisecond = new Date(100000000000);
console.log("Date for given milliseconds is ",dateInMillisecond); // Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)

// pass value in yyyy,mm,dd
var dateObj = new Date(2019,02,21);
console.log("Date for given value is ", dateObj); // Month starts from 0: Thu Mar 21 2019 00:00:00 GMT+0530 (India Standard Time)

//get month from given date
var month_name = function(dt){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
console.log(month_name(new Date("10/11/2009"))); // 'October'
console.log(month_name(new Date("02/12/2019"))); // February

//set the value of year
 var todayDate = new Date();
  todayDate.setFullYear(2020);
  console.log("Value of todayDate after setFullYear",todayDate) // Fri Feb 28 2020 15:47:14 GMT+0530 (India Standard Time)


// Object creation using object literal
var empOne={
    name: "John",
    empNumber: 1001,
    emailId: "john@gmail.com",
    swipeIn(){
        console.log("Swipe in City: "+this.name);
    }
};

var student=new Object();
student.studentId=10;
student.studentName="Mark";

console.log(student); // { studentId: 10, studentName: 'Mark' }

var student={studentId: 101, studentName: "Mir"};
console.log(student); // { studentId: 101, studentName: 'Mir' }

console.log(empOne.empNumber); // 1001
empOne.empNumber=1002;
console.log(empOne["empNumber"]); // 1002
empOne.swipeIn(); // Swipe in City: John


// Iterating an Object
var empOne={
    name: "John",
    empNumber: 1001,
    emailId: "john@gmail.com"
};

// for..in
for(let property in empOne){
    console.log(empOne[property]);
}
// John
// 1001
// john@gmail.com

// object.values()
console.log(Object.values(empOne)); // [ 'John', 1001, 'john@gmail.com' ]

// Object destructuring
let {name, ...rest} = empOne;
console.log(name); // John
console.log(rest); // { empNumber: 1001, emailId: 'john@gmail.com' }


// Class in Javascript
// Creating a class
class Employee{
    constructor(id, name, age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swaped in at "+new Date())
    }
    static code(){
        console.log("Employee is coding");
    }
}

e1=new Employee(100, "Mark", 23);
e2=new Employee(101, "Jane", 24);
// 23
console.log(e1.age);
// Employee 100 has swaped in at Thu Mar 02 2023 16:34:07 GMT+0530 (India Standard Time)
e1.swipeIn();
// Employee 101 has swaped in at Thu Mar 02 2023 16:34:07 GMT+0530 (India Standard Time)
e2.swipeIn();
Employee.code(); // static method

class PartTimeEmployee extends Employee{
    constructor(id, name, age, contractPeriod){
        super(id, name, age);
        this.contractPeriod=contractPeriod;
    }
}
e1=new Employee(100,"Mark",23);
e2= new PartTimeEmployee(101,"Jane",34,3);
PartTimeEmployee.code();
e2.swipeIn();
console.log(e2.contractPeriod);


// JSON
// parse()
var json='{"firstName":"John", "lastName":"Doe"}';
var nameObj=JSON.parse(json); // will convert JSON string into an Javascript object
console.log(nameObj.firstName+" "+nameObj.lastName); // John Doe

// stringify()
var jScores={"Java":70, "Javascript": 80, "CSS": 30};
var tScores=JSON.stringify(jScores); // will convert object to JSON string
console.log(typeof(jScores)); // returns Object
console.log(typeof(tScores)); // returns String


// Regular Expression
function validateName(name){
    if(name.match(/\$/)){
        return false;
    }
    else {
        return true;
    }
}


// Error Handling

function validateName(name){
    if(name.Match(/[\$\#]/)){
        console.log("Input is invalid");
        return false;
    }
    else {
        console.log("Input is valid");
        return true;
    }
}
function validate(){
validateName("Hello");
}
validate();


// try-catch block
function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            // All the below lines of try do not run as error was thrown in previous line
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        // code for Handling error
        console.log(error.message);
    }
}
validateName("Josh") // name.Match is not a function



// Conditional Statements in a Catch block
function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here All the below lines of try do not run as error was thrown in previous line
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        if (error instanceof TypeError)
            console.log("Type Error Occurred");
        else if (error instanceof RangeError)
            console.log("Range Error Occurred");
        else if (error instanceof SyntaxError)
            console.log("Syntax Error Occurred");
        else
            console.log("Some other Error Occurred");
    }
}
validateName("Josh$");


// finally block
function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            // All the below lines of try do not run 
            //  as error was thrown in previous line
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
            console.log("Error Occurred");
    }
    finally{
        console.log("Cleaning up resources");
    }
}
validateName("josh$");

// Throwing of an error
var err=new Error(); // you can pass the message or not it is optional
err.name="InvalidEmailError";
err.message="Invalid Email";
throw err;

function validateName(name) {
        try {
            if (name.match(/\$/)) {
                  throw new Error("Name should not contain $");
            }
            else {
                return true;
            }
        }
        catch (error) {
                console.log(error.message);
        }
        finally{
            console.log("Cleaning up resources");
        }
    }
validateName("Hello$");


// Array Map Method
let arr=[45, 23, 21]
let a=arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value+index;
});

console.log(a);


// Array reduce method: Reduces an array to a single value
let arr2=[1, 2, 3, 5, 2, 1]
let reducedArr=arr2.reduce((val1, val2)=>{
    return val1+val2;
});
console.log(reducedArr); // 14 (1+2+3+5+2+1)

// Using function
const reduced_func = (v1, v2) => {
    return v1+v2;
}

let reducedArr2=arr2.reduce(reduced_func);
console.log(reducedArr2); // 14

*/

// DOM API

window.alert("Hello");

alert("Hello");