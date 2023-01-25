// navbar fixed 

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        $(".navbar-fixed").fadeIn(1000);
    } else {
        header.classList.remove('navbar-fixed');
        $(".navbar-fixed").fadeIn(1000);
    }
}

// untuk bagian humberger
const humberger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humburger-active');
    navMenu.classList.toggle('hidden');
});