const fruits = ['jablko', 'banán', 'kiwi', 'pomeranč', 'citrón']

// document - vytváření elementů v java scriptu
const el = document.createElement('button') //vytvoření buttonu a přidáno do elementu el
console.log(el)
el.textContent = 'tlačítko'
// const body = document.querySelector('body') zbytečně zdlouhavé, lepší to pod tím
document.body.appendChild(el) //to document tam psát nemusím


// parentElement.appendChild(childElement) - metoda appendChild, vloží child na konec HTML struktury parentu

// přirazovat elementu textContent (const fruits = [] )
// vytvářet nový element (createElement)
// umíme vkládat el do rodiče (appendChild)

/*
vybereme z DOM ul
pojedeme cyklus přes fruits
    vytvoříme nové li
    do li dáme textcontent - název ovoce
    li vložíme do ul
*/

// 1) příprava je, že v dokumentu v html máme prázdné ul, a to chceme naplnit li a každé li bude obsahovat jeden string z toho textContentu fruits
// 2) dáme do html ul tzn. 1. krok
// 3) 2. krok prohrant for cyklus na ul
const ul = document.querySelector('ul') //vyberu ul z dokumentu abych na něj pracoval 1. krok
fruits.forEach(fruit => { //přes jednotlivé fruits mohu prohnat cyklus forEach 2. krok, pojmenuji si každý jeden prvek jako fruit
    const li = document.createElement('li') // pokaždé vytvořit nový li - createElement (vytvoří li, které je prázdné a zatím není zakomponované nic, jen leží v paměti)
    li.textContent = fruit // naplním nově vytvořené li obsahem fruit
    ul.appendChild(li) // přiřadí do ul child li
})


// challenge ze shora napsán ve for cyklu - jednodušeji a lépe
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li')
    li.textContent = fruits[i]
    ul.appendChild(li)
}