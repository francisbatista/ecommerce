const btnLogin = document.querySelector('.cabecera__btn-login');
const btnVerConsolas = document.querySelector('#btnVerConsolas');

btnLogin.addEventListener('click',()=>{
    window.open('login.html', target='_parent');
});

btnVerConsolas.addEventListener('click', () => {
    location.href = '#consolas';
});