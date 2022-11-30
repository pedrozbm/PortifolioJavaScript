// # MENU SHOW & HIDDEN #
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

// # REMOVER MENU #
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// # SCROLL SELECIONS ACTIVE LINKS #
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// # WORKS #
function phishing_facebook__() {
    window.open('https://github.com/pauloodev/phishing-facebook')
}
function bot_api_status_discord__() {
    window.open('https://github.com/pauloodev/bot-api-status-discord')
    // alert('Já comeu algum cachorro quente gelado? Pois é, algo deu errado aqui.')
}

// # BUTTON FORM #
function buttonform__() {
    alert('Apenas avisando... Isso não funciona =/')
}

// # SOCIAL #
function github__() {
    window.open('https://github.com/pedrozbm')
}
function linkedin__() {
    window.open('https://www.linkedin.com/in/pedro-barbieri-4a85b9234/')
}
function twitter__() {
    window.open('https://twitter.com/pauloodev')
}
function instagram__() {
    window.open('https://instagram.com/pedro_zbm')
}
function discord__() {
    alert('[DISCORD] Usuário copiado para área de transferencia.')
    navigator.clipboard.writeText("pedroo#0666")
}