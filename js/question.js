import { QuestionType } from './enums/QuestionType.js';
export function Question(questionType, question, options, affinities) {
    this.question = question;
    this.questionType = questionType;
    this.options = options;


    this.previousQuestion = null;

    this.getQuestionHTML = function() {
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
    }

    this.getMultipleChoiceHTML = function() {
        let html = '<div class="question">' + this.question + '</div>';
        this.options.forEach((option, index) => {
            html += '<div class="option"><input type="radio" name="option" value="' + affinities[index] + '">' + option + '</div>';
        });
        html += '<button id="submit">Submit</button>';
        return html;
    }

    this.getMultipleChoiceCheckboxesHTML = function() {
        let html = '<div class="question">' + this.question + '</div>';
        this.options.forEach((option, index) => {
            html += '<div class="option"><input type="checkbox" name="option" value="' + affinities[index] + '">' + option + '</div>';
        });
        html += '<button id="submit">Submit</button>';
        return html;
    }

    this.getNumericalHTML = function() {
        let html = '<div class="question">' + this.question + '</div>';
        for(let i = 0; i <= 10; i++) {
            html += '<div class="option"><input type="radio" name="option" value="' + i + '">' + i + '</div>';
        }
        html += '<button id="submit">Submit</button>';
        return html;
    }

}