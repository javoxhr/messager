const openMenu = document.querySelector("#open-menu")
const menuOpen = document.querySelector(".menu-open")
const menuOverlay = document.querySelector(".overlay")


function removeProfil() {
    menuOpen.classList.remove('menu-open-active')
    menuOverlay.classList.remove('menu-overlay-active')
}

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

const backInSettings = document.querySelector('#back-in-settings')


backInSettings.addEventListener('click', ()=> {
    settings.classList.remove('active-settings')
    menuOpen.classList.add('menu-open-active')
    menuOverlay.classList.add('menu-overlay-active')
})