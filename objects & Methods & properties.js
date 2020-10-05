// objects we define key value pairs, each value has a name called a key, objects are used for grouping values together in no particular order
// in objects you use curly braces while on arrays you have brackets 
// arrays can be put or used inside objects 

// object literal 
var chris = {
    firstName: 'chris',
    lastName: 'ezike',
    birthYear: '1993',
    // placing arrays inside objects 
    family: ['Bobby', 'Amarachi', 'Celina'],
    job: 'It support',
    isMarried: fasle

};
console.log(chris);

// to find an element inside an object e.g firstName you make use of (dot Notation).firstName or .birthYear in the console
console.log(chris.birthYear);
// another way is to use brakcets like an array 
console.log(chris['firstName']);
// alternatively using a variable lets say x 
var x = 'lastName';
console.log(chris[x]);

// adding data to your objects like arrays 
john.job = 'logistics';
john['isMarried'] = true;
console.log(john);

// new object syntax
var mercy = new object();
mercy.firstName = 'mercy';
mercy.birthYear = 1960;
mercy['lastName'] = 'Niang';
console.log(mercy);

// object Methods 

var chris = {
    firstName: 'chris',
    lastName: 'ezike',
    birthYear: '1993',
    // placing arrays inside objects 
    family: ['Bobby', 'Amarachi', 'Celina'],
    job: 'It support',
    isMarried: fasle,
    calcAge: function (birthYear) {
        return 2018 - birthYear;

    }

};
console.log(chris.calcAge(1993));

// objects has a basic key called this. which points to itself
var chris = {
    firstName: 'chris',
    lastName: 'ezike',
    birthYear: '1993',
    // placing arrays inside objects 
    family: ['Bobby', 'Amarachi', 'Celina'],
    job: 'It support',
    isMarried: fasle,
    /// using this. method of objects/ remove birthYear from function and use object method this.
    calcAge: function () {
        return 2018 - this.birthYear; // what this. means is chris(the current object which is chris) used to call all chris key value pairs or bio

    }

};
console.log(chris.calcAge(1993));

// Contructor
// constructor acts like a blueprint which is used to create instances(objects) which are objects 


//Iheritance (this is made possible through the prototype property every object has)
// When one object is based on another object is called inheritance
// when one object is accessed to gain access to another objects property and methods 
// javascript a prototype based langauage which means iheritance works by using prototypes
// which means each and every javascript object has a prototype property