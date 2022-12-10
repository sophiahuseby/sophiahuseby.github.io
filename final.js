const myNav = document.querySelector('#mobilemenu')
const navPages = document.querySelector('.navbarmenu')
const story = document.querySelector('.story');

const mobileNav = () => {
    myNav.classList.toggle('is-current')
    navPages.classList.toggle('current')
}

myNav.addEventListener('click', mobileNav);

const box = document.getElementsByClassName('box')[0];

function twoOfSwords() {
    var show = document.getElementsByClassName("twoOfSwordsClass");
    if(show[0].offsetWidth > 0 && show[0].offsetHeight > 0) {
        show[0].style.visibility = "visible";
    }
}

function unhide() {
    var show = document.getElementsByClassName("twoOfSwordsClass");
    if(show[0].offsetWidth > 0 && show[0].offsetHeight > 0) {
        show[0].style.visibility = "visible";
    }
}

function unhide() {
    var show = document.getElementsByClassName("twoOfSwordsClass");
    if(show[0].offsetWidth > 0 && show[0].offsetHeight > 0) {
        show[0].style.visibility = "visible";
    }
}

function unhide() {
    var show = document.getElementsByClassName("twoOfSwordsClass");
    if(show[0].offsetWidth > 0 && show[0].offsetHeight > 0) {
        show[0].style.visibility = "visible";
    }
}

