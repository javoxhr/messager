const openMenu = document.querySelector("#open-menu")
const menuOpen = document.querySelector(".menu-open")
const menuOverlay = document.querySelector(".overlay")


openMenu.addEventListener('click', ()=> {
    menuOpen.classList.add('menu-open-active')
    menuOverlay.classList.add('menu-overlay-active')
})

menuOverlay.addEventListener('click', ()=> {
    menuOpen.classList.remove('menu-open-active')
    menuOverlay.classList.remove('menu-overlay-active')
})