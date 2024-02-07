$(document).ready(function() {

});

function Questions() {
    this.init = function() {
        this.initEvents();
    };

    this.initEvents = function() {
        let self = this;
        $('#start').on('click', function() {
            self.displayNextQuestion();
        });

        $('#next').on('click', function() {
            self.nextQuestion();
        });
    };

    this.nextQuestion = function() {
        this.submitAnswer();
        this.displayNextQuestion();
    };

    this.submitAnswer = function() {
        alert('SubmitAnswer');
    };

    this.displayNextQuestion = function() {
        clearLastQuestion();
        displayTemplateQuestion();
        let question = new Question();
        fillQuestionTemplate(question);
    };
}