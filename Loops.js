/// Loops Iterations Notes
// loops are basically a process of automating task/ instead of sending out multiple mails over and over and over you use loops to send in the mails at the expected time of the day each day.


/// For loop & Examples

for (var i = 0;)
    // this is the variable that will be updated in every loop
    for (i < 10)
        // the condition that is evealuated before each loop iteration in other to see if the next loop should be executed
        // i(which is 0) is less than 10, automatically the next loop will start
        for (i++)
            // counter update after each iteration

            // the loop Example
            for (var i = o; i < 10; i++) {
                console.log(i);
            }
//i = 0, 0 < 10 true, log in to console, i++
//i = 1, 1< 10 true, log in to console, i++
//i = 2, 2 < 10 true, log in to console, i++
//..........till 
//i = 9, 9 < 10 true, log in to console, i++
//i = 10, 10 < 10 false, exist the loop!!!!!



//example 2
// if you wanted the loop to move to less than or eqaul to 20
for (var i = 1; i <= 20; i++) {
    console.log(i);
}
// this means the loop would count from 1 up till or less than 20


// Practical examples 


var chris = ['chris', 'ezike', '1993', 'developer', 'false'];
// imagine if you wanted to log in this on the console you  would need to
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
// .....etc like creating fifty lines of chris bio

var chris = ['chris', 'ezike', '1993', 'developer', 'false'];
for (var i = o; i < chris.length; i++) {
    console.log(chris[i]);
    // basically your checking the .length of variable chris's bio starting from 0 < less than 5 since the are five strings inside the array (if you include false)

}


/// While Loop & Examples 
var i = 0;
while (i < john.lenght) {
    console.log(john[i]);
    i++;
}

//continue & break statements 

// Continue statement explained

// continues to quite the current iteration of a loop and continue with the next one
// while break statement are to break a current loop
var chris = ['chris', 'ezike', 1993, 'developer', false];
for (var i = o; i < chris.length; i++) {
    // the below means, when filtering through the array('strings'), it should skip any element that has no string like 1993 & false
    if (typeof chris[i] !== 'string') continue;
    console.log(chris[i]);

}

//Break Statement Explained
//Break exist the entire iteration unlike continue which keeps filtering through the array

var chris = ['chris', 'ezike', 1993, 'developer', false];
for (var i = o; i < chris.length; i++) {
    if (typeof chris[i] !== 'string') break;
    // what this means is, it checks the strings from 'chris' to 'ezike' once it encounters 1993 it breaks and stop and wont continue 
    console.log(chris[i]);
}

//looping backwards 
for (var i = chris.length = 1; i >= 0; i == ) {
    console.log(john[i]);
}