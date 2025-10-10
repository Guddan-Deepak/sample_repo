const hamburger = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
    });
});

// Close the menu if clicking outside of it
document.addEventListener('click', function (event) {
    console.log(event)
    if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
        console.log(event.target)
        mobileNav.classList.remove('active');
    }
});