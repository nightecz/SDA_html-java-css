const fruits = ['jablko', 'banán', 'kiwi', 'pomeranč', 'citrón']

const ul = document.querySelector('ul')

// fruits.forEach((fruit, index) => {
//   if (index < 3) {
//     const li = document.createElement('li')
//     li.textContent = fruit
//     ul.appendChild(li)
//   }
// })

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li')
  li.textContent = fruits[i]
  ul.appendChild(li)
}
