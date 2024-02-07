import { Character } from "./character.js";
import { questionList } from "./questionList.js";


document.getElementById('container').innerHTML = questionList[0].getQuestionHTML();
console.log(new Character().affinityValues);
