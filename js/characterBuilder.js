import { Character } from "./character";
import { questionList } from "./questionList";


document.getElementById('container').innerHTML(questionList[0].getQuestionHTML());
console.log(new Character().affinityValues);
