

let bars = document.querySelector('.fa-bars')
let navbar = document.querySelector('ul')
let items = document.querySelectorAll('.navbar__link')

bars.addEventListener('click', () => {
    bars.classList.toggle("fa-x")
    bars.classList.toggle('fixed')
    navbar.classList.toggle('top-0')
})

items.addEventListener('click', () => {
    navbar.classList.toggle('top-0')
})