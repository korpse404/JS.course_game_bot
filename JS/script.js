'use strict'

function guessNumber () {  
    let generatedNumber = Math.floor(Math.random() * 100 + 1);

    const questions = function () {
        let userNumber = prompt("Угадай число от 1 до 100");

        const isNum = function (num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
          }

        if (userNumber === null) {
            alert("Игра окончена");
            return;
        } 
        if (!isNum(userNumber)) {
            alert("Введи число!");
            return questions();
        }
        if (userNumber > generatedNumber) {
            alert("Загаданное число меньше")
            return questions();
        }
        if (userNumber < generatedNumber) {
            alert("Загаданное число больше")
            return questions();
        } 
        return alert("Вы угадали!");
        
        
    }
    questions();
}

guessNumber();