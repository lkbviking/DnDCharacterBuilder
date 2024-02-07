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
        }
    }

    this.getMultipleChoiceHTML = function() {
        let html = '<div class="question">' + this.question + '</div>';
        this.options.forEach((option, index) => {
            html += '<div class="option"><input type="radio" name="option" value="' + affinities[index] + '">' + option + '</div>';
        });
        return html;
    }

    this.getMultipleChoiceCheckboxesHTML = function() {
        let html = '<div class="question">' + this.question + '</div>';
        this.options.forEach((option, index) => {
            html += '<div class="option"><input type="checkbox" name="option" value="' + affinities[index] + '">' + option + '</div>';
        });
        return html;
    }

}