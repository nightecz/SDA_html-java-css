const input = document.querySelector('input')
// input.addEventListener('focus', () => {
//    console.log('focus')
// })
// input.addEventListener('blur', () => {
//    console.log('blur')
// })
// input.addEventListener('change', () => {
//    console.log('change')
// })

// e.preventDefault()

input.addEventListener('input', (e) => {
    console.log('input')
})
input.addEventListener('keydown', (e) => {
    console.log('keydown')
    e.preventDefault()
})
input.addEventListener('keyup', (e) => {
    console.log('keyup')
})

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
})
