const menu = document.querySelector('#menu')
const navMenu = document.querySelector('#nav-menu')
const button = document.querySelector('#btn')

menu.addEventListener('click',() => {
    menu.classList.toggle('ativo')
    navMenu.classList.toggle('ativo')
    button.classList.toggle('ativo')
})