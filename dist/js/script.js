// navbar fixed 

window.onscroll = function() {
    var header = document.querySelector('header');
    var fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        $(".navbar-fixed").fadeIn(1000);
    } else {
        header.classList.remove('navbar-fixed');
        $(".navbar-fixed").fadeIn(1000);
    }
}

// untuk bagian humberger
var humberger = document.querySelector('#humburger');
var navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humburger-active');
    navMenu.classList.toggle('hidden');
});