// vytvořit form, který bude editovat existující záznam
const id = 199
const controls = ['firstname','lastname', 'position', 'dateofbirth', 'salary']
const formData = {} //zachycujeme data

// 1. načtění dat o záznamu, který chceme editovat
axios.get('https://sdaapi.glabazna.eu/employees/' + id) //id identifikováno výše
    .then((response) => { //vrátí data tzn. response 
        console.log(response.data.data)
        const record = (response.data.data) //celé si to nahraji do proměnné record viz níže
// 2. přiřadit hodnoty získané v response jako value do všech inputů příslušné hodnoty
        controls.forEach(control => {
            const input = document.getElementById(control) //dobré si vypíchnout ten input do speciální proměnné
            input.value = record(control)
            formData[control] = record[control] //data jsou ten record, nutný krok
// 3. napsání event listerneru, který ukládá upravená data
            input.addEventListener('input', (e) => {
                formData[control] = e.target.value
        })
    })

//chování při submitu
const form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    formData.id = id //přiřazení požadovanou změnu na id
    //odeslání dat do databáze!
    axios({
        method: 'PUT',
        url: 'https://sdaappi.glabazna.eu/employees',
        data: formData 
    })
    .then(() => {
        console.log('záznam byl upraven')
    })
    .catch(() => {
        console.log('něco se nepovedlo')
    })
    console.log(formData)
})

//security byse řešilo tak, že by se do hlavičky url dávala ještě autorizace, např. JWT token
// funguje tak, že když mám JWT form tak posílám na server JWT, tam se zkontroluje, že uživatel je OK a vygeneruje se token
// uložím token někam, do hlavičky se pak token přiřazuje při zasílání requestů

/*
controls.forEach(control => {
    formData[control] = '' //1. funkce nastavuje všechny data v controls na prázdnu string, tzn. začátek formuláře je prázdný
    document.getElementById(control).addEventListener('input', (e) => { //2. nastavování event listenerů
        formData[control] = e.target.value
    })
})

*/
// LocalStorage - mohu ukládat data

// localStorage.setItem('myStoredItem', 'tralala')

// pak se mohu v dev. nástrojů v sekci my application LocalStorage podívat, tato hodnota přežije refresh jako jediná
console.log((localStorage.getItem'myStoredItem'))

// Vanilla JS - čistý bez frameworku
// framework react.dev - framework od mety
// framework vuejs nej.