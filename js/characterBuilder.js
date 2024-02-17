import { questionList, tankList, meleeList, rangedList, casterList, supportList } from "./Metadata/questionList.js";
import { Circle } from "./Circle.js";
import { Affinities } from "./Affinities.js";


let currentQuestion = 0;
let myAffinities = new Affinities();
let tankListPushed = false;
let meleeListPushed = false;
let rangedListPushed = false;
let casterListPushed = false;
let supportListPushed = false;

function displayNextQuestion() {
    pushAdditionalQuestionLists();
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
    if (!tankListPushed && myAffinities.getAffinityVector('TANK').magnitude > 0) {
        questionList.push(...tankList);
        tankListPushed = true;
    }
    if (!meleeListPushed && myAffinities.getAffinityVector('MELEE_DPS').magnitude > 0) {
        questionList.push(...meleeList);
        meleeListPushed = true;
    }
    if (!rangedListPushed && myAffinities.getAffinityVector('RANGED_DPS').magnitude > 0) {
        questionList.push(...rangedList);
        rangedListPushed = true;
    }
    if (!casterListPushed && myAffinities.getAffinityVector('CASTER_DPS').magnitude > 0) {
        questionList.push(...casterList);
        casterListPushed = true;
    }
    if (!supportListPushed && myAffinities.getAffinityVector('SUPPORT').magnitude > 0) {
        questionList.push(...supportList);
        supportListPushed = true;
    }
}

document.getElementById("submit").onclick = displayNextQuestion;
