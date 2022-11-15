

randomNum1 = randomNumber(20,100);
randomNum2 = randomNumber(20,100);
randomNum3 = randomNumber(20,100);
randomNum4 = randomNumber(20,100);
randomNum5 = randomNumber(20,100);
randomNum6 = randomNumber(20,100);
randomNum7 = randomNumber(20,100);
randomNum8 = randomNumber(20,100);
randomNum9 = randomNumber(20,100);
randomNum10 = randomNumber(20,100);

let num1 = window.prompt("what is " + randomNum1 + "- first number ");
let num2 = window.prompt("what is " + randomNum2 + "- second number ");
let num3 = window.prompt("what is " + randomNum3 + " - third number ");
let num4 = window.prompt("what is " + randomNum4 + "- fourth number ");
let num5 = window.prompt("what is " + randomNum5 + "- fifth number ");
let num6 = window.prompt("what is " + randomNum6 + "- sixth number ");
let num7 = window.prompt("what is " + randomNum7 + "- seventh number ");
let num8 = window.prompt("what is " + randomNum8 + "- eighth number ");
let num9 = window.prompt("what is " + randomNum9 + "- ninth number ");
let num10 = window.prompt("what is " + randomNum10 + "- tenth number ");

phone1 = randomNum1 - num1;
phone2 = randomNum2 - num2;
phone3 = randomNum3 - num3;
phone4 = randomNum4 - num4;
phone5 = randomNum5 - num5;
phone6 = randomNum6 - num6;
phone7 = randomNum7 - num7;
phone8 = randomNum8 - num8;
phone9 = randomNum9 - num9;
phone10 = randomNum10 - num10;

function random(){
    outputInt = randomNumber(30, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

/*
outputInt = phone1 * 10 + phone2;
outputInt = outputInt * 10 + phone3;
outputInt = outputInt * 10 + phone4;
outputInt = outputInt * 10 + phone5;
outputInt = outputInt * 10 + phone6;
outputInt = outputInt * 10 + phone7;
outputInt = outputInt * 10 + phone8;
outputInt = outputInt * 10 + phone9;
outputInt = outputInt * 10 + phone10;


console.log(outputInt);

println("Is " + outputInt + "your phone number? If yes, please press finalize, if no, please press reset and type number in again.")

function check(){
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset(){
    outputInt = 0;
    output.textContent = outputInt;
}

function plus(number){
    if(outputInt < 9999999999){
    outputInt +=1;
    output.textContent = outputInt;}
}

function minus(number){
    if(outputInt > 0){
    outputInt -= 1;
    output.textContent = outputInt;}
}



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);


const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.add-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
const randomButton = document.querySelector('.finalize-button').addEventListener('click', finalize);



*/
