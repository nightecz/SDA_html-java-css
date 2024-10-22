/*
- vyhledat li - udělat z nich pole
- vyhledat strong
- na všechny li nastsavit listener (v cyklu)
    -textContent li vložit so strongu
*/

// const lis = document.querySelectorAll('li')
const strong = document.querySelector('strong')

const myFn = (e) => {
    console.log('li clicked')
    console.log(e.target)
    strong.textContent = e.target.textContent
}

const lis = Array.from(document.getElementsByTagName('li'))


lis.forEach((li) => {
    li.addEventListener('click', myFn)
    // li.removeEventListener('click', myFn) //remove event listener
})

document.querySelector('ul').addEventListener('click', (e) => {
    console.log('ul clicked')
    console.log(e.target)
})

document.body.addEventListener('click', (e) => {
    console.log('body clicked')
    console.log(e.target)
})

// ať klikne kdekoliv uživatel spustí se tahle eventa

document.addEventListener('click', (e) => {
    console.log('document clicked')
    console.log(e.target)
})
// EVENT BUBBLING