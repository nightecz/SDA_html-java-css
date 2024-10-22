// functions

// function myFn (arg1, arg2) {
//    // tělo funkce
// }
let globalVar = 9


function sum (a, b) {
    // zbytečnélet result = a + b
    //bad practise = console.log(result)
    return result a + b
}

//let result = sum(8,3) //
//console.log(result)
console.log(sum(8, 3))


console.log(sum)


const sum1 = function (a, b) {
    return a + b
}

//ES5, ES6 ... arrow functions

const sum2 = (a, b) => {
    return a + b
}

const sum3 = (a, b) => a + b
const double = (a) => 2 * a
const myFn = () => 'ahoj'

const subtract = (a, b) => a - b
