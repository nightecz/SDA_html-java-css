let a = 10
let b = a
a = a + 5
console.log(a) // 15
console.log(b) // 10


const person = {
    first: 'Karel',
    last: 'Houska'
}

const person2 = person // nevytváří kopii objektu

person.first = 'Franta'

console.log(person.first) // 'Franta' 
console.log(person2.first) // 'Franta'