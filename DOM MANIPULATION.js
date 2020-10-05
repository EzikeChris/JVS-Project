// DOM (DOCUMENT OBJECT MODEL) how javascript interacts with the webpage for the first time
// technical DOM means how javascript interacts with the webpages
// DOM structured representation of an HTML document/ The DOM is used to connect webpages to scripts like javascripts


// Using diffrent javascript methods to interact with the DOM (webpages)/ HTML webpages are stored in the DOM, Which can be accessed and manipulated with the DOM
// HTML is the content of a webpages, while CSS is the prsentation//

//DOM NOTES
// object that gives us acess to the DOM is the document object(document.)
// In  Your .JS file using document.queryselector you can use such method to changes / manipulate your HTML & CSS


document.querySelector('#score-0')
// used to select the content in our HTML 



document.querySelector('#current-0' + activePlayer).textContent = dice;
// used querySelector to change / manipulate the text / values / elements of our webpages HTML
//set a value or insert a value also called a setter


var x = document.querySelector('score-0').textContent;
console.log(x);
// used to get a value from the webpage another function of html


// also use Document.querySelector to change CSS
document.querySelector('.dice').style.display = 'none';