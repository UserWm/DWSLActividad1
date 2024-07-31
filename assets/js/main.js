//..::    Show Menu    ::..//
const navMenu = document.getElementById('nav-menu'),
    navToogle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

//..::    Menu Show   ::..//
if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//..::    Menu Hidden   ::..//
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//..::    Remove Menu Mobile   ::..//
const navLink = document.querySelectorAll('nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //Cuando se hace clic en cada enlace nav__link, se elimina la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//..::    Add Shadow Header   ::..//
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //Agrega una clase si el desplazamiento inferior es mayor que 50 de la ventana gráfica
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
 }
 window.addEventListener('scroll', shadowHeader)