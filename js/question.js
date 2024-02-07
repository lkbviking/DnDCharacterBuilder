export function Question(question, questionType, option1, option2, option3) {
    this.question = question;
    this.questionType = questionType;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;

    this.previousQuestion = null;

    this.getQuestionHTML = function() {
        switch (this.questionType) {
            case QuestionType.MULTIPLE_CHOICE:
                return this.getMultipleChoiceHTML();
            case QuestionType.TRUE_FALSE:
                return this.getTrueFalseHTML();
        }
    }
}