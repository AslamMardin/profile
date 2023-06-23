// navbar fixer
window.onscroll = function(){
    const header = document.querySelector('header')
    const posisiNav = header.offsetTop + 2;
    if(window.pageYOffset > posisiNav){
        header.classList.add('navbar-fixed')
    }else {
        header.classList.remove('navbar-fixed')
    }
}

const navMenu = document.querySelector('#nav-menu')
const humberger = document.querySelector('#humberger')
humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger_active')
    navMenu.classList.toggle('hidden')

})