const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('ul');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

const navAnime = (direction1, direction2) => {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
    })
}
const toggleNav = () => {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Anime tion in
        navAnime('out', 'in');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Anime tion out
        navAnime('in', 'out');
    }
}

//  Evt Listeners
menuBars.addEventListener('click', toggleNav);
ul.addEventListener('click', toggleNav);