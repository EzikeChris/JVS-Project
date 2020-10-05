// Arrays are zero based

// initialize new array
var name = ['USMAN', 'MATHEW', 'JONATHAN'];
var years = new Array(2019, 2020, 2021);

console.log(names[2]);
// checks the third name

console.log(names.length);
// this shows the total number of elements in the array which is 3

// mutate array data
name[1] = 'ISHAYA';
// changed/replaced mathew with ishaya
names[names.length] = 'LEVI';
//added levi to the arrays

console.log(names);
//checks the arrays


// Arrays can be used for diffrent data types

var chris = ['chris', 'ezike', '1993', 'developer', 'false'];
// all the bio of chris stored in an array which can be changed using array methods


// Array Methods

// Push method adds another bio like .length above to chris's bio
chris.push('barcelona');
console.log(chris);

// unshift method adds an element to the begining of an arrays like 'push' which adds to the end
chris.unshift('Mr');
console.log(chris)

// POP  methhod Removes data from the end of an array Hint by using POP constant removes all the data from the array
chris.pop()
console.log(chris)

// Shift removes data from the front of the arrays not from the back of the arrays
chris.shift()
console.log(chris)

// indexOf() another method of arrays which passes the  position of a single array inside an array// similar to string method
console.log(chris.indexOf(1993)); // answer is 2
// take note, if the element passed in doesnt exist in ana array it passes a negative e.g -1 its a method used for checking if an element or data exist in an array or not

// Example of Indexof checking of the availability of a data in an array

var doesChrisHaveHiv = chris.indexOf('Hiv') == -1 ?
    'chris has no HIV' : 'chris has HIV';
console.log(doesChrisHaveHiv);