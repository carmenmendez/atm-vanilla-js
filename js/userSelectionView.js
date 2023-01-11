function selectUser(name) {
  // persistir en local storage
  window.localStorage.setItem('currentUser', name)
  // redirigir al login
  window.location.replace('/login.html')
}

const buttons = document.querySelectorAll('button[data-user]')

// agregar eventos
buttons.forEach( (button) => {
  button.addEventListener('click', (e) => {
    selectUser(e.target.dataset.user)
  })
})
