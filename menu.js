const abreMenu =() => document.getElementById('menu2')
.classList.add('active')

const fechaMenu =() =>
    
    document.getElementById('menu2')
.classList.remove('active')


document.getElementById('menu')
.addEventListener('click', abreMenu )

document.getElementById('close')
.addEventListener('click', fechaMenu)