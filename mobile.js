const menu = document.querySelector('#menu')
const navMenu = document.querySelector('#nav-menu')
const button = document.querySelector('#btn')
const home = document.querySelector('.home')
const sobre = document.querySelector('.sobre')
const habilidades = document.querySelector('.habilidades')
const projects = document.querySelector('.projects')

menu.addEventListener('click',() => {
    menu.classList.toggle('ativo')
    navMenu.classList.toggle('ativo')
    button.classList.toggle('ativo')
})

home.addEventListener('click',() => {
  menu.classList.toggle('ativo')
  navMenu.classList.toggle('ativo')
  button.classList.toggle('ativo')
})

sobre.addEventListener('click',() => {
  menu.classList.toggle('ativo')
  navMenu.classList.toggle('ativo')
  button.classList.toggle('ativo')
})

habilidades.addEventListener('click',() => {
  menu.classList.toggle('ativo')
  navMenu.classList.toggle('ativo')
  button.classList.toggle('ativo')
})

projects.addEventListener('click',() => {
  menu.classList.toggle('ativo')
  navMenu.classList.toggle('ativo')
  button.classList.toggle('ativo')
})

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });