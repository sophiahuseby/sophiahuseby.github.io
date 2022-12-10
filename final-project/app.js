const myNav = document.querySelector('#mobilemenu')
const navPages = document.querySelector('.navbarmenu')

const mobileNav = () => {
    myNav.classList.toggle('is-current')
    navPages.classList.toggle('current')
}

myNav.addEventListener('click', mobileNav);


/* TAROT GAME CODING */

const personalText = "";
const partnerText = "";
const futureText = "";

function hierophant(){
    personalText = "";
    personalText = "You find yourself to be a safe and transitional partner, who avoids the taboo.";
}

function star(){
    personalText = "";
    personalText = "You feel optimistic about your love life, and are currently working through healing past wounds.";
}

function knightOfWands(){
    personalText = "";
    personalText = "You may find yourself to be a fearless and courageous lover, but it may be hard for you to commit sometimes.";
}

function twoOfSwords(){
    personalText = "";
    personalText = "It may be difficult to choose between lovers, or even finding a proper work life and love balance.";
}


hierophant.addEventListener('click', hierophant);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);
randomize.addEventListener('click', result);



