
// Gets user input
var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
println("Hello " + name + "!");
println(num + "?! That's my favorite number too!");

// Prints out the variable type
println("Name is a " + typeof name);
println("Num is a " + typeof num);

/*
var num1 = prompt("what is " + randomNum1 + " - first number ");
var num2 = prompt("what is " + randomNum2 + "- second number ");
var num3 = prompt("what is " + randomNum3 + " - third number ");
var num4 = prompt("what is " + randomNum4 + "- fourth number ");
var num5 = prompt("what is " + randomNum5 + "- fifth number ");
var num6 = prompt("what is " + randomNum6 + "- sixth number ");
var num7 = prompt("what is " + randomNum7 + "- seventh number ");
var num8 = prompt("what is " + randomNum8 + "- eighth number ");
var num9 = prompt("what is " + randomNum9 + "- ninth number ");


randomNum1 = randomNumber(20,100);
randomNum2 = randomNumber(20,100);
randomNum3 = randomNumber(20,100);
randomNum4 = randomNumber(20,100);
randomNum5 = randomNumber(20,100);
randomNum6 = randomNumber(20,100);
randomNum7 = randomNumber(20,100);
randomNum8 = randomNumber(20,100);
randomNum9 = randomNumber(20,100);

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

function random(){
    outputInt = randomNumber(30, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);


const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.add-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
const randomButton = document.querySelector('.finalize-button').addEventListener('click', finalize);



outputInt = num1 * 10 + num2;
outputInt = outputInt * 10 + num3;
outputInt = outputInt * 10 + num4;
outputInt = outputInt * 10 + num5;
outputInt = outputInt * 10 + num6;
outputInt = outputInt * 10 + num7;
outputInt = outputInt * 10 + num8;
outputInt = outputInt * 10 + num9;

println("Is " + outputInt + "your phone number? If yes, please press finalize, if no, please press reset and type number in again.")

*/