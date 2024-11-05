// když zmáčkneme plus, zvedne se číslo o 1

const divs = document.querySelectorAll('.square')
const btns = document.querySelectorAll('button')


const btnClick = (e) => {
// vybrat si div který budeme měnit divs[0] : divs[1]
const index = e.target.textContent.indexOf('první') > -1 ? 0 : 1


divs[index].textContent = e.target.textContent.indexOf('plus') > -1 //zde je popsána podmínka
    ? + divs[index].textContent + 1 // pokud je splněna udělá se tohle
    : + divs[index].textContent - 1 // pokud není splněna udělá se tohle
}

btns.forEach((btn, index) => {
    btn.addEventListener('click', btnClick)

})

// převod stringu na číslo ...... + str
// převod čísla na string ..... '' + num