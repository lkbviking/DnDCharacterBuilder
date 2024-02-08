import { Character } from "./character.js";
import { questionList } from "./questionList.js";



let currentQuestion = -1;

function displayNextQuestion() {
    currentQuestion++;
    if(currentQuestion < questionList.length) {
        document.getElementById('container').innerHTML = questionList[currentQuestion].getQuestionHTML();
        document.getElementById("submit").onclick = function() {
            let selectedOption = document.querySelector('input[name="option"]:checked').value;
            console.log(selectedOption);
            displayNextQuestion();
        }
    } else {
        document.getElementById('container').innerHTML = new Character().getCharacterHTML();
    }
}







displayNextQuestion();

console.log(new Character().affinityValues);
