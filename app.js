const toggle = document.querySelector(".toggle")
const nav_links = document.querySelector(".nav-links")

toggle.addEventListener("click", ()=>{
    nav_links.classList.toggle('nav-menu_visible')
})