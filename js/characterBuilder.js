import { Character } from "./Character2.js";
import { questionList } from "./Metadata/questionList.js";



let currentQuestion = -1;
let myCharacter = new Character();

function displayNextQuestion() {
    currentQuestion++;
    if(currentQuestion < questionList.length) {
        document.getElementById('container').innerHTML = questionList[currentQuestion].getQuestionHTML();
        document.getElementById("submit").onclick = submitAndDisplayNextQuestion();
    } else {
        document.getElementById('container').innerHTML = myCharacter.getCharacterHTML();
    }
}

function submitAndDisplayNextQuestion() {
    let selectedOptions = new Set();
    document.querySelectorAll('input[name="option"]:checked').forEach((option) => {
        selectedOptions.add(option.value);
    });
    myCharacter.affinities.addAffinityVectors(questionList[currentQuestion].getAffinityVectors(selectedOptions));
    displayNextQuestion();
}


displayNextQuestion();
console.log(myCharacter.affinities);
