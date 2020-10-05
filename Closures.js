// Closures
// what are closures 

// An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

// a function that returns a functions which calculates how many years we have left until retirement

function retirement(retirementAge) {
    var a = 'years left until retirment';
    // return another function the below function calaculates the year someone has left
    // this below is also an anonymouse function no name only a parameter
    return function (yearOfBirth) {
        //calculate the year of birth 
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);

    }
}

var retirmentUs = retirment(66);
var retirementGermany =
    retirment(65);
var retirmentIceland =
    retirement(67);


retirementGermany(1990);
retirmentUs(1990);
retirementIceland(1990);


//Result
// 40 years left until retirment
// (2016 -(2016-1990))