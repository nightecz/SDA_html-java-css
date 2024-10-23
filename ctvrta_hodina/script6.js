// vytvořit form, který bude editovat existující záznam
const id = 199

const controls = ['firstname', 'lastname', 'position', 'dateofbirth', 'salary']
const formData = {}

// načíst z db data o Helence
// přiřadit jako value do všech inputů příslušné hodnoty

axios.get('https://sdaapi.glabazna.eu/employees/' + id)
  .then((response) => {
    const record = response.data.data
    controls.forEach(control => {
      const input = document.getElementById(control)
      input.value = record[control]
      formData[control] = record[control]
      input.addEventListener('input', (e) => {
        formData[control] = e.target.value
      })
    })
  })

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  formData.id = id
  axios({
    method: 'PUT',
    url: 'https://sdaapi.glabazna.eu/employees',
    data: formData
  })
    .then(() => {
      console.log('záznam byl upraven')
    })
    .catch(() => {
      console.log('něco se nepovedlo')
    })
})


// LocalStorage

// localStorage.setItem('myStoredItem', 'tralaallala')
console.log(localStorage.getItem('myStoredItem'))


// Vanilla JS - čístý bez frameworku