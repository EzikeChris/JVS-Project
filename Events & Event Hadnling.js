// Events & Event Handling

// Events are notifications that are sent to notify the code that something happened on the webpages
// events occurs when things happen like clicking a button, resizing a window or scrolling down or pressing a key

//Event listener
// a function that performs an action based on a certian events, it waits for an event to occur before it executes

// Event Handler
// when selecting an event handler you make you of document.QuerySelector to select the class or id or the element to assign an event handler
document.querySelector('.btn-roll').addEventListener()

// Call back function
// a function that is called by another function eg through the event listener
function btn() {}
btn()
document.querySelector('.btn-roll').addEventListener('click', btn)
// a function not called by the dev, but by another function is called the call back function as above, a function that is passed into another function as an argument

//document.getElementById
// primary only works for id's in your HTML documents faster than query selector

// unlike queryselector you dont use the # symbol with getelementbyid
document.getElementById('score-0').textContent = '0' // this is where you change the text or element
