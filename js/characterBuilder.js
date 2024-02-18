import { questionList, tankList, meleeList, rangedList, casterList, supportList } from "./Metadata/questionList.js";
import { Circle } from "./Circle.js";
import { Affinities } from "./Affinities.js";


let currentQuestion = 0;
let myAffinities = new Affinities();

function displayNextQuestion() {
    if (currentQuestion === 5) {
        pushAdditionalQuestionLists();
    }
    if(currentQuestion < questionList.length) {
        document.getElementById('container').innerHTML = questionList[currentQuestion].getQuestionHTML();
        document.getElementById("submit").onclick = submitAndDisplayNextQuestion;
    } else {
        console.log(myAffinities);
        document.getElementById('container').innerHTML = myAffinities.findCharacter().getCharacterHTML() +
                                                         myAffinities.getAffinitiesHTML();
    }
}

function submitAndDisplayNextQuestion() {
    let selectedOptions = new Set();
    let isCheckbox = false;
    document.querySelectorAll('input[name="option"]').forEach((option) => {
        if (option.checked) selectedOptions.add(option.value);
        if (option.type === 'checkbox') isCheckbox = true;
    });
    if (!isCheckbox && selectedOptions.size === 0) {
        alert('Please select an option');
    } else {
        myAffinities.addAffinityVectors(questionList[currentQuestion].getAffinityVectors(selectedOptions));
        new Circle();
        currentQuestion++;
        displayNextQuestion();
    }
}

function pushAdditionalQuestionLists() {
    if (myAffinities.getAffinityVector('TANK').magnitude > 0) {
        questionList.push(...tankList);
    }
    if (myAffinities.getAffinityVector('MELEE_DPS').magnitude > 0) {
        questionList.push(...meleeList);
    }
    if (myAffinities.getAffinityVector('RANGED_DPS').magnitude > 0) {
        questionList.push(...rangedList);
    }
    if (myAffinities.getAffinityVector('CASTER_DPS').magnitude > 0) {
        questionList.push(...casterList);
    }
    if (myAffinities.getAffinityVector('SUPPORT').magnitude > 0) {
        questionList.push(...supportList);
    }
}

document.getElementById("submit").onclick = displayNextQuestion;
