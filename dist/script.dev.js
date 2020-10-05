"use strict";

var StringToFind = 'cat';
var StringToSearch = 'My cat has eaten caterpillars';

var searchString = function searchString() {
  var substr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var search = new RegExp(substr);
  var result = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === substr[0]) {
      var shortstr = string.substr(i);

      if (shortstr.match(search) && shortstr.match(search).length > 0) {
        result.push(i);
      }
    }
  }

  var position = result.length > 0 ? result.join() : 'not found';
  return position;
}; // const searchString = (substr = StringToFind, string = StringToSearch) => {
//   const regExpValue = new RegExp(substr)
//   for (let i = 0; i < string.length; i++) {
//     const element = string[i]
//   }
//   console.log(string.match(searchValue))
// }
// // searchString()
// // let onyekaString = 'my name is christopher'


console.log(searchString(StringToFind, StringToSearch)); // // console.log(this._name)