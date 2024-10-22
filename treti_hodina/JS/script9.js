// DOM - Document Object Model
// DOM Manipulation

// console.log(document)
// console.log(window)

// window.aaaTomik = 'ahoj'

// console.log(window)

// document.methods


/*
    methods, které vybírají jeden element
        document.getElementById('id') - vrátí element s daným id nebo null pokud nenajde to Id
        document.querySelector('css-selector') - vrací první element, který vyhovuje selektoru, jinak null
    



    methods, které vybírají skupinu elementů
        document.getElementsByTagName(tagName) - varcí HTMLCollection (případně prázdnou)
            - HTMLCollection = array like structure (podobné pole, ale nelze na to volat forEach atd.)
        document.getElementsByClassName(class=name)
        document.querySelectorAll ('css-selector') - vrací Nodelist (případně prázdnou)



*/

/*
const el = document.getElementById('header') //takhle dostanu element podle id do java scriptu
console.log(el)
*/

const el = document.getElementById('headers') //aby vrátilo, že element nebyl nalezen
if (el !== null) {
    console.log(el)
} else {
    console.log('element has not been found')
} 


const el1 = document.querySelector('h1')
console.log(el1)

const myDiv = document.querySelector('.my-class:nth-child(2)')
console.timeLog(myDiv)

//const divs = document.getElementsByTagName('div')
const divs = document.getElementsByClassName('my-class')
console.log(divs)

const divsAr = Array.from(divs) //provádět toto a neřešit zbytečnosti !!!
divsAr.forEach(div => {

})