// Primitives
//Numbers
// Booleans
// strings
// Undefined
//Null

//Objects
// Everything else e.g arrays, are all objects.


//Primitives 
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// a = 46 & b = 23 when checked on the console.


// objects 
var obj1 = {
    name: 'chris',
    age: '26',
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// obj1 & obj2 produced 30 on the console