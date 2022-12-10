const myNav = document.querySelector('#mobilemenu')
const navPages = document.querySelector('.navbarmenu')
const story = document.querySelector('.story');

const mobileNav = () => {
    myNav.classList.toggle('is-current')
    navPages.classList.toggle('current')
}

myNav.addEventListener('click', mobileNav);

const personalText = ":insertpersonal:";
const partnerText = ":insertpartner:";
const futureText = ":insertfuture:";

var newStory = storyText;

newStory = newStory.replace(":insertx:", xItem);

const hierophant = document.getElementById('.hierophant');
hierophant.addEventListener('click', hierophant());
function hierophant(){
    document.getElementById('personalContent').innerText = "You find yourself to be a safe and transitional partner, who avoids the taboo.";
}

function star(){
    personalText = personalText.replace("insertpersonal", "You feel optimistic about your love life, and are currently working through healing past wounds.");
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

function knightOfWands(){
    personalText = "";
    personalText = "You may find yourself to be a fearless and courageous lover, but it may be hard for you to commit sometimes.";
}

function twoOfSwords(){
    personalText = "";
    personalText = "It may be difficult to choose between lovers, or even finding a proper work life and love balance.";
}

function kingOfSwords(){
    partnerText = "";
    partnerText = "You have high standards for romantic partners, especially intellectually.";
}

function queenOfPentacles(){
    partnerText = "";
    partnerText = "You seek a stable, abundant and nurturing partner who will support you in your life endeavors.";
}

function tenOfWands(){
    partnerText = "";
    partnerText = "You may find that stress can create issues within your relationships.";
}

function theTower(){
    partnerText = "";
    partnerText = "You may currently have minor relationships in your life that will end in your search for a real serious relationship.";
}

function threeOfSwords(){
    futureText = "";
    futureText = "You may be struggling a lot in life right now, dealing with a breakup or argument with someone you love.";
}

function aceOfCups(){
    futureText = "";
    futureText = "You are finding new feelings and an emotional awakening.";
}

function fiveOfCups(){
    futureText = "";
    futureText = "You need to grieve relationships you have lost in order to move forward with future relationships.";
}

function death(){
    futureText = "";
    futureText = "You may experience changes in your relationships, and potentially an ending of a significant relationship in your life.";
}


