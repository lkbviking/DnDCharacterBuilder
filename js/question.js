import { QuestionType } from './Metadata/QuestionType.js';
import { Affinities } from './Affinities.js';
export class Question {
    constructor(questionType, question, ...answers) {
        this.questionType = questionType;
        this.question = question;
        this.answers = answers;
    }
    
    getQuestionHTML() {
        switch (this.questionType) {
            case QuestionType.MULTIPLE_CHOICE:
                return this.getMultipleChoiceHTML();
            case QuestionType.MULTIPLE_CHOICE_CHECKBOXES:
                return this.getMultipleChoiceCheckboxesHTML();
            case QuestionType.TRUE_FALSE:
                this.options = ['True', 'False'];
                return this.getMultipleChoiceHTML();
            case QuestionType.NUMERICAL:
                return this.getNumericalHTML();
        }
    };

    getMultipleChoiceHTML() {
        let html = '<div class="question">' + this.question + '</div>';
        this.answers.forEach((answer) => {
            html += '<div class="option"><input type="radio" name="option" value="' + answer.text + '">' + answer.text + '</div>';
        });
        html += '<button id="submit">Submit</button>';
        return html;
    };


    getMultipleChoiceCheckboxesHTML() {
        let html = '<div class="question">' + this.question + '</div>';
        this.answers.forEach((answer) => {
            html += '<div class="option"><input type="checkbox" name="option" value="' + answer.text + '">' + answer.text + '</div>';
        });
        html += '<button id="submit">Submit</button>';
        return html;
    };

    getNumericalHTML() {
        let html = '<div class="question">' + this.question + '</div>';
        for (let i = 0; i <= 10; i++) {
            html += '<div class="option"><input type="radio" name="option" value="' + i + '">' + i + '</div>';
        }
        html += '<button id="submit">Submit</button>';
        return html;
    };

    getAffinityVectors(selectedOptions) {
        let affinityVectors = [];
        this.answers.forEach((answer) => {
            if (selectedOptions.has(answer.text)) {
                affinityVectors.push(answer.affinityVectors);
            }
        });
        return affinityVectors;
    };
}