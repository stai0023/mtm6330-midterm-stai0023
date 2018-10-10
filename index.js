// Sourced from Prof. Robert McKenney
const initMenu = function() {
  const menuItems = document.querySelectorAll('.menu-item')
  menuItems.forEach(item => {
    item.addEventListener('click', event => {
      menuItems.forEach(item => {
        item.classList.remove('active')
      })
      event.target.classList.add('active')
    })
  })
}
initMenu()
