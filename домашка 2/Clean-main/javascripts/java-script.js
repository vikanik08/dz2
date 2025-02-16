document.addEventListener("DOMContentLoaded", function () {

    let age = prompt("Введите ваш возраст:");
if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}


// задача 2 


let number = prompt("Введите число:");
if (number % 2 === 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}

// задача 3 
const GuessNumber = 45;
const userGuess = prompt("Угадайте число от 1 до 100:");

if (userGuess == GuessNumber) {
    console.log("Вы угадали!");
} else {
    console.log("Попробуйте ещё раз!");
}

});