const myNav = document.querySelector('#mobilemenu')
const navPages = document.querySelector('.navbarmenu')
const story = document.querySelector('.story');

const mobileNav = () => {
    myNav.classList.toggle('is-current')
    navPages.classList.toggle('current')
}

myNav.addEventListener('click', mobileNav);



const personal = document.getElementById('personal');

const change_personal_text = (text) => app.innerText = text;

change_personal_text('YOUR PERSONAL READING: ');
console.log(app.innerHtml) // =>  <div id="app">Text you want</div>



const partner = document.getElementById('partner');

const change_partner_text = (text) => app.innerText = text;

change_partner_text('YOUR PARTNER READING: ');
console.log(app.innerHtml) // =>  <div id="app">Text you want</div>


const app = document.getElementById('future');

const change_future_text = (text) => app.innerText = text;

change_future_text('YOUR FUTURE READING: ');
console.log(app.innerHtml) // =>  <div id="app">Text you want</div>

function clear(){
document.getElementById("personal").innerHTML = "PERSONAL READING: "
document.getElementById("partner").innerHTML = "PARTNER READING: "
document.getElementById("future").innerHTML = "FUTURE READING: "

}