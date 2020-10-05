// function is an instance of the object type:
// a function behaves like any other object
// we can store functions in a variable
// We can pass a function as an argument to another function
// we can also return a function from a function


//First Class Function
var years = [1990, 1965, 1937, 1937, 2005]; // an array of years 


// Created A generic function which loops over an input, then gave it a function (Fn) as input which is used to calculate something based on each element of the array
function arrayCalc(arr, fn) {
    var arrRes = []; // empty array which will be filled and return the results 
    // we the use the for loop to loop over the arrays 
    for (var i = 0, i < arr.length; i++) {
        // create a new variable which is our counter)
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// We then created a group of call back functions used on the array
function calculateAge(el) {
    return 2016 - el;
    // this returns the ages of the above years after it had been subtracted from 2016 using the array
}

function isFullAge(el) {
    return el >= 18;
    // this would loop through the years above to check which is greater or equal to 18years using a true or false answere
}

function maxHeartRate(el) {
    // if the element is greater or equal to 18 and equal or less than 81
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        // else if the person is out of this ranges you simply return minus 1 
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullage = arrayCalc(years, isFullAge);
var rates = arrayCalc(years, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(maxHeartRate);