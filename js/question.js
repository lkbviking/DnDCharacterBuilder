let Question = function(question, questionType, option1, option2, option3) {
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

const QuestionType = {
    MULTIPLE_CHOICE: 'multipleChoice',
    TRUE_FALSE: 'trueFalse'
};

const ClassAffinityType = {
    ARTIFICER: 'artificer',
    BARBARIAN: 'barbarian',
    BARD: 'bard',
    BLOOD_HUNTER: 'bloodHunter',
    CLERIC: 'cleric',
    DRUID: 'druid',
    FIGHTER: 'fighter',
    MONK: 'monk',
    PALADIN: 'paladin',
    RANGER: 'ranger',
    ROGUE: 'rogue',
    SORCERER: 'sorcerer',
    WARLOCK: 'warlock',
    WIZARD: 'wizard'
};

const RoleAffinityType = {
    TANK: 'tank',
    MELEE: 'melee',
    RANGED: 'ranged',
    CASTER: 'caster',
    SUPPORT: 'support'
};

const SubRoleAffinityType = {
    TANK: 'subtank',
    MELEE: 'submelee',
    RANGED: 'subranged',
    CASTER: 'subcaster',
    SUPPORT: 'subsupport'
};

const OtherAffinityType = {
    SINGLE_CLASS: 'singleClass',

};

export { Question, QuestionType, ClassAffinityType, RoleAffinityType, SubRoleAffinityType, OtherAffinityType };