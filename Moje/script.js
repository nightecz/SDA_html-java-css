console.log(axios)

const url = 'https://sdaapi.glabazna.eu/employees'

let myData = null //vytvoření proměnné 

axios.get(url)
    .then(response => {
        console.log(response.data.data)
        myData = response.data.data

        // data processing goes here
        //vlastnost asynchronního progrmau - musíme provádět práci s daty pod then

    })
    .catch((error) => {
        console.log('hele, stala se chyba  ')
    })



console.log('line 12')
console.log(myData) //null

// async / await syntaxe
// umožňuje kód výše zapsat následovně:
myData = await axios.get(url) //počká na to, až přijdou data z databáze a potom už je mohu někam přiřadí
console.log(myData)

const getData = async () => {
    const response = await axios.get(url)
    return response.data.data
}

myData = await getData()
console.log(myData)