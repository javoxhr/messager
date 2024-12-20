const openMenu = document.querySelector("#open-menu")
const menuOpen = document.querySelector(".menu-open")
const menuOverlay = document.querySelector(".overlay")


function removeProfil() {
    menuOpen.classList.remove('menu-open-active')
    menuOverlay.classList.remove('menu-overlay-active')
}

// function openMenu() {
//     menuOpen.classList.add('menu-open-active')
//     menuOverlay.classList.add('menu-overlay-active')
// }

openMenu.addEventListener('click', ()=> {
    menuOpen.classList.add('menu-open-active')
    menuOverlay.classList.add('menu-overlay-active')
})

menuOverlay.addEventListener('click', ()=> {
    removeProfil()
})

const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('#settings-btn')

settingsBtn.addEventListener('click', ()=> {
    removeProfil()
    settings.classList.add('active-settings')
})

const backInSettings = document.querySelectorAll('#back-in-settings')


backInSettings.forEach((el)=> {
    el.addEventListener('click', ()=> {
        settings.classList.remove('active-settings')
        menuOpen.classList.add('menu-open-active')
        menuOverlay.classList.add('menu-overlay-active')
    })
})

const triTochIns = document.querySelector('.open-tri-toch')
const triTTochBtn = document.querySelector('#open-tri-toch-btn')
const triTochOverlay = document.querySelector('.tri-toch-overlay')

triTTochBtn.addEventListener('click', ()=> {
    triTochIns.classList.toggle('tri-toch-active')
    triTochOverlay.classList.toggle('tri-toch-active')
})

triTochOverlay.addEventListener('click', ()=> {
    triTochIns.classList.toggle('tri-toch-active')
    triTochOverlay.classList.toggle('tri-toch-active')
})

const myPrf = document.querySelector('.my-profil')
const profilBtn = document.querySelector('#profil-btn')
const backBtnInProfil = document.querySelector('#back-in-prfolie')

profilBtn.addEventListener('click', ()=> {
    myPrf.classList.add('active-my-profil')
    removeProfil()
})

backBtnInProfil.addEventListener('click', ()=> {
    myPrf.classList.remove('active-my-profil')
    menuOpen.classList.add('menu-open-active')
    menuOverlay.classList.add('menu-overlay-active')
})