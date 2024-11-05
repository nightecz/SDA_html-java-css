const controls = ['firstname','lastname', 'position', 'dateofbirth', 'salary']
const formData = {}

controls.forEach(control => {
    formData[control] = ''
    document.getElementById(control).addEventListener('input', (e) => {
        formData[control] = e.target.value
    })
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault() //callbackovka -> nebude default, zůstanou tam ty data ve formuláři
    // console.log(formData) místo toho budeme pracovat s axiosem
    //axios.get() //pro posílání slouží axios, která bere configurační objekt jako argument
    axios ({
        url: 'https://sdaapi.glabazna.eu/employees',
        method: 'POST',
        data: formData
    }).then(() => {
        console.log('všechno OK, záznam uložen') //poté, co se záznam uloží vykonzoluje se text
    }).catch(() => {
        console.log('hele, tohle nevyšlo')
    })
})

/* REST API
API = nějaké rozhraní na serveru se kterým lze komunikovat a vyměňovat s ním data
REST = konvence, která určuje jak taková komunikace bude fungovat, základní součást REST konvekce je, že když poslám:
    GET - read data (chci data číst)
    POST - create new record (chci vytvářet nový záznamy v databázi)
    PUT - update (edit) existing record (chci update na záznamy)
    DELETE - delete existing record (chci smazat nějaké záznam/y)


    součástí REST konvekce je, že serverName/tableName - všechny záznamy z dané tabulky chci
    serverName/tableName/89 - chci záznam z dané tabulky, který má ID 89
    např,: GET https://sdaapi.glabazna.eu/employees/197 (že na konci je ID je konvekce REST API)
    serverName/tableName?column=value = otazník znamená, že jdeme filtrovat, tzn, vrátí to záznamy, které mají v poli hodnotu
    tzn. filtrování poomcí otazníku:
        GET https://sdaapi.glabazna.eu/employees?position=manager
    jak hledat vztahy a různé hodnoty místo = tedy => =! atd.


    CRUD operations .... Create, Read, Update, Delete -> navázání těchto metod na REST konvekce
    GraphQL knihovna funguje např. pouze na POST requestech, nepoužívá REST konvekce 



/* script pro sběr dat z formuláře
const formData = {
    firstname: '',
    lastname: '',
    position: '',
    dateofbirth: '',
    salary: null
}
*/

// pokud na formuláři nastavne INPUT nahraje do sběrného objektu

// const input = document.querySelectorAll('input') //všechny inputy
// nechám si zobrazit inputy console.log(inputs)

// abychom si nenaběhli na to, že se nějaké pole tváří ale nechová tak udělám array
/* const inputs = Array.from(document.querySelectorAll('input'))
inputs.forEach(input => {
    input.addEventListener('input' (e) => {
        const id = input.getAttribute('id') //metoda get viž dole
        formData[id] = e.target.value //jak si správně sáhnout na ten název? pomocí metody javascript elementu getAttribute()
    })
})


//addEventListener jde navázat i na submit buttonu
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault() //callbackovka -> nebude default, zůstanou tam ty data ve formuláři
    console.log(formData)
})