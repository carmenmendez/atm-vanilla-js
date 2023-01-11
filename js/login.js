const currentUser = window.localStorage.getItem("currentUser")

const userPasswords = {
  jay: '123',
  pamela: '456',
  fernando: '789'
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const currentUserElement = document.getElementById('current-user')
currentUserElement.innerText = capitalize(currentUser)

const formElement = document.querySelector('form')

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const password = formData.get('pwd');
  if (userPasswords[currentUser] === password) {
    window.location.replace('/home.html')
  } else {
    alert('Password incorrecto')
  }
})