const controls = ['firstname', 'lastname', 'position', 'dateofbirth', 'salary']
const formData = {}

controls.forEach(control => {
  formData[control] = ''
  document.getElementById(control).addEventListener('input', (e) => {
    formData[control] = e.target.value
  })
})

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  axios({
    url: 'https://sdaapi.glabazna.eu/employees',
    method: 'POST',
    data: formData
  }).then(() => {
    console.log('všechno OK, záznam uložen')
  }).catch(() => {
    console.log('hele, tohle neprošlo')
  })
})

// REST API
/*
GET - read data
POST - create new record
PUT - update (edit) existing record
DELETE - delete existing record

serverName/tableName - všechny záznamy z dané tabulky
serverName/tableName/89 - záznam z dané tabulky, který má id 89
serverName/tableName?column=value

CRUD operatios .... Create, Read, Update, Delete
GraphQL
*/