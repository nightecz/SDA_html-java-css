// event driven language

// událost => volání funkce
// click, mouseover, mouseout, input, change, focus, blur, keydown (zmáčknutá klávesa), keyup (uvolněná klávesa) ...

// el.addEventListener('event-type', callback) (metoda pro naslouchač nastav pravidlo když ta událost nastane)

// const btn = document.querySelector('button') //vyhledám si button
// btn.addEventListener('click', () => {
//    console.log('clicked')
// })

// na kliknutí tlačítka dát čtverečku bleděmodré pozadí
/*
- vybrat čtvereček z domu
- vybrat tlačítko z domu
- napsat css třídu - modré pozadí
- nastavit tlačítko event listener
    - přidat čtverečku tu css třídu
*/


const square = document.querySelector('.square')
const btn = document.querySelector('button')
btn.addEventListener('click', (eventObject) => { //eventObject se zkracuje často na (e)
    console.log(eventObject)
    square.classList.toggle('bg-blue')

    // if (btn.textContent === 'paint blue') {
    // btn.textContent = 'paint white'
    // } else {
    //    btn.textContent = 'paint blue'
    // }

    btn.textContent = btn.textContent === 'paint blue' ? 'paint white' : 'paint blue'
    // taky lze takto: eventObject.target.textContent = eventObject.target.textContent === 'paint blue' ? 'paint white' : 'paint blue'
})

