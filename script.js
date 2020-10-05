const StringToFind = 'cat'
const StringToSearch = 'My cat has eaten caterpillars'

const searchString = function (substr = '', string = '') {
  const search = new RegExp(substr);
  let result = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substr[0]) {
      let shortstr = string.substr(i)
      if (shortstr.match(search) && shortstr.match(search).length > 0) {
        result.push(i)
      }
    }
  }
  let position = result.length > 0 ? result.join() : 'not found'
  return position

}

// const searchString = (substr = StringToFind, string = StringToSearch) => {
//   const regExpValue = new RegExp(substr)
//   for (let i = 0; i < string.length; i++) {
//     const element = string[i]
//   }
//   console.log(string.match(searchValue))
// }
// // searchString()
// // let onyekaString = 'my name is christopher'
console.log(searchString(StringToFind, StringToSearch))
// // console.log(this._name)