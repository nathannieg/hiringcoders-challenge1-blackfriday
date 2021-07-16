/* Gets the form through its id="form" */
const form = document.getElementById('form')

/* Gets the submit event - 1st argument is submit; 2nd argumento is an arrow function */
/* What's inside the function is what happens when you click on submit */
form.addEventListener('submit', e => {
  /* Prevents page from reloading when you click submit */
  e.preventDefault()
  /* Capturing input values and stores inside a variable */
  /* .value is responsible for getting user input */
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  /* Takes captured data and stores into localStorage*/
  let data = {
    name,
    email
  }

  /* The variable gets a JSON file, converts into a string and stores what inside the variable data */
  let convertData = JSON.stringify(data)

  /* Summons localStorage and gives it a key/value pair */
  localStorage.setItem('lead', convertData)
})

/* Seeing data stored in localStorage - Inspec > Application > Storage*/
