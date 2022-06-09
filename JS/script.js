'use strict'
let userNumber;
let guess;
let generatedNumber = Math.floor(Math.random() * (1 - 100) + 100);

const isNum = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

const guessNumber = function () {  
    userNumber = prompt("Угадай число от 1 до 100");

    if (isNum(userNumber)) {
        let questions;

        const getQuestions = function () {           
            if (userNumber > generatedNumber) {
                alert("Загаданное число меньше")
                return guessNumber();
            } else if (userNumber < generatedNumber) {
                alert("Загаданное число больше")
                return guessNumber();
            } else {
                return alert("Вы угадали!");
            }
        }
        return questions = getQuestions();
    } else {
        alert("Введи число!");
        return guessNumber();
    }
    
}

guessNumber()