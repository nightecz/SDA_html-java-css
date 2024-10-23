console.log(axios)
const url = 'https://sdaapi.glabazna.eu/employees'

let myData = null

// axios.get(url)
//   .then(response => {
//     console.log(response.data.data)
//     myData = response.data.data

//     // data processing goes here
//   })
//   .catch((error) => {
//     console.log('hele, stala se chyba')
//   })

// console.log('line 12')
// console.log(myData) //null

// async / await syntaxe

// myData = await axios.get(url)
// console.log(myData)

const getData = async () => {
  try {
    const response = await axios.get(url)
    return response.data.data
  }
  catch {
    console.log('nějaká chyba')
  }
}


myData = await getData()
console.log(myData)