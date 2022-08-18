let btnBurguer = document.querySelector('#btn-burguer')
let sidebar = document.querySelector('#sidebar')
let content = document.querySelector('#content')

window.addEventListener('load', ()=>{
    if(window.innerWidth <= 991) {
        sidebar.classList.add('d-none')
    } else {
        sidebar.classList.remove('d-none')
    }
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 991) {
        sidebar.classList.remove('d-none')
    } else {
        sidebar.classList.add('d-none')
    }
}, true)

btnBurguer.addEventListener('click', () => {
    sidebar.classList.toggle('d-none')
    content.classList.toggle('d-none')
})