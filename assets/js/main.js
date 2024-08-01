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
const shadowHeader = () => {
    const header = document.getElementById('header')
    //Agrega una clase si el desplazamiento inferior es mayor que 50 de la ventana gráfica
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

//..::    Show Scroll Up   ::..//
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//..::    Scroll Sections Active Link   ::..//
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//..::    Scroll Reveal Animation   ::..//
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__dish`, { delay: 500, distance: '100px', origin: 'bottom' })
sr.reveal(`.home__coffee`, { delay: 1200, distance: '100px', duration: 1500 })
sr.reveal(`.home__ingredient`, { delay: 1600, interval: 100 })
sr.reveal(`.delivery__img, .contact__image`, { origin: 'left' })
sr.reveal(`.delivery__data, .contact__data`, { origin: 'right' })
sr.reveal(`.popular__card`, { interval: 100 })