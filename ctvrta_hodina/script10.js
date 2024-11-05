// když zmáčkneme plus, zvedne se číslo o 1

const div = document.querySelector('.square')
// const btnP = document.querySelector('button')
// const btnM = document.querySelectro('button:nth-of-type(2)')
const btns = document.querySelectorAll('button')
// const btnP = btns[0]
// const btnM = btns[1]

const btnClick = (e) => {
    // if (e.traget.textContent === 'plus') {// 'plus / 'minus'
    //    div.textContent = + div.textContent + 1
    //    return
    // }
    //div.textContent = + div.textContent - 1
    div.textContent = e.target.textContent === 'plus' //zde je popsána podmínka
        ? + div.textContent + 1 // pokud je splněna udělá se tohle
        : + div.textContent - 1 // pokud není splněna udělá se tohle
}

// btns[0].addEventListener('click', btnClick)
// btns[1].addEventListener('click', btnClick)
btns.forEach(btn => {
    if (['plus', 'minus'].indexOf(btn.textContent) > -1) {
    btn.addEventListener('click', btnClick)
    }
})

// převod stringu na číslo ...... + str
// převod čísla na string ..... '' + num