// referenční datové typy

// pole, array ...... list
// [1, 67, 78, 'ahoj', true, NaN

// objekt, objekt .... Dictionary
const  myVar = [1, 67, 78, 'ahoj', true, NaN]
console.log(myVar)
console.log(myVar[2]) //78)

/*

 - array
 - object
 - function

*/

const myObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 565656,
    key4: [1, 2, 3],
    key5: {
      nestedKey1: 'value???'
    },
    'my-another-key': 'another value'
  }

console.log(myObj.Key4)

const myObj1 = {}

myObj1.first = 'Karel'
console.log(myObj1)

let a = 'first'

//myObj1[a] ..... myObj.first

let myNum = 1
console.log(myObj['key' + myNum]) // 'value1'
myNum = myNum + 1
console.log(myObj('key' + myNum)) // 'value2'