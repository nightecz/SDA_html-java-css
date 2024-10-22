// v inputu zakázat písmeno X

const input = document.querySelector('input')
// input.addEventListener('keyup', (e) => {
//     console.log(e)
// })

input.addEventListener('keydown', (e) => {
    // if (e.key.toLowerCase() === 'x') {
    if (['x', 'X'].indexOf(e.key) > -1) {
        e.preventDefault()
    }
})

const ar = [1, 3, 6]
console.log(ar.index0f(3)) //1
console.log(ar.index0f(7)) //-1


// truthy / falsy values
/*
    false,
    undefined,
    null,
    NaN
    ''
    0

    co není falsy je truthy
    [] - truthy
     {} - truthy
*/

let result = ''
if (result) {
    // podmínka se nesplní, neproběhne
}

result = 'ahoj'
if (result) {
    // kód proběhne
}
const ar2 = []
// je pole prázdné ???
if (!ar2.length) {}