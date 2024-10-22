//callback functions
// funkce je argumentem jiné funkce

//const sum = (a, b) => (
//    console.log(a+b)
//)


// const sum = (a, b) => {
//    return a + b
//}

const sum = (a, b, callback) => {
//    let result = a + b
//    callback(result)
        callback(a + b)
}

sum(7, 8, console.log) //vypočítej 7, 8, až to budeš mít vrať to jako argument do console.log

// alert('ahoj')

sum(10, 12, alert)

const triple = (a) => {
    return 3 * a
}

let result = sum(2, 3, triple) //15
console.log(result)