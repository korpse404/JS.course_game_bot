'use strict'
let userNumber;

const isNum = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

const guessNumber = function () {  
    userNumber = prompt("Угадай число от 1 до 100");

    if (isNum(userNumber)) {
        let questions;
        let generatedNumber = Math.floor(Math.random() * 100 + 1);

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
    } else if (userNumber === null) {
        alert("Игра окончена");
        return;
    } else {
        alert("Введи число!");
        return guessNumber();
    }
    
}

guessNumber();