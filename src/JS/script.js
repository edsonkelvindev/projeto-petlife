const btnMobile = document.querySelector('.btn-mobile');
const elementosDuvida = document.querySelectorAll('.duvida');

function toggleMenu(event) {
    if (event.type === 'touchstart')
        event.preventDefault();
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})