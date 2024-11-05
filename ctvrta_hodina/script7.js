// Asynchronní kód

// funkce se provede až po tom intervalu (1000 ms = 1 sekunda)
// setTimeout(() => {
//   console.log('ahoj')
// }, 1000)

// console.log('čau')

// for(let i = 0; i < 100000000; i++) {
//   if (i === 99999999) {
//     console.log('almost done')
//   }
// }

// console.log('ahoj')

// http komunikace je VŽDY asynchronní

// Promise

const prom = new Promise((resolve, reject) => {
    const data = ['banán', 'mrkev', 'mandarinka']
    setTimeout(() => {
      if(1 > 3) {
        resolve(data)
        return
      }
      reject('an error happened')
    }, 2000)
  })
  
  console.log('ahoj')
  
  prom
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
  
  console.log('čau')