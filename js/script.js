document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var navbarOffset = navbar.offsetTop;
    
    function handleScroll() {
        if (window.pageYOffset >= navbarOffset) {
            navbar.classList.add('fixed-top', 'navbar-scrolled');
            document.body.style.paddingTop = navbar.offsetHeight + 'px';
        } else {
            navbar.classList.remove('fixed-top', 'navbar-scrolled');
            document.body.style.paddingTop = 0;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
});