const ul = document.querySelector('ul')
const strong = document.querySelector('strong')

ul.addEventListener('click', (e) => {
    console.log('ul clicked')
    e.stopPropagation()
    // console.log('clicked')
    // console.log(e.target)
    if (e.target.tagName == 'LI') {
    strong.textContent = e.target.textContent
    }
})

// Event Delegation 

// click outside

document.addEventListener('click', (e) => {
    console.log('document clicked')
    // leží e.target uvnitř ul?
    // if (ul.contains(e.target)) {
    //    strong.textContent = ''
    // }
    strong.textContent = ''
})

const btn = document.querySelector('button')
btn.addEventListener('mouseenter', (e) => {
    console.log('mouseenter', e)
})
btn.addEventListener('mouseover', (e) => {
    console.log('mouseover', e)
})
btn.addEventListener('mouseleave', (e) => {
    console.log('mouseleave', e)
})
btn.addEventListener('mouseout', (e) => {
    console.log('mouseout', e)
})