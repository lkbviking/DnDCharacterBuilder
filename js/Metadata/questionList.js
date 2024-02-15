import { Question } from '../Question.js';
import { QuestionType } from './QuestionType.js';
import { AffinityVector } from '../AffinityVector.js';
import { Answer } from '../Answer.js';

export let questionList = [];

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What classes are you interested in playing? (check all that apply)',
        new Answer('Artificer', new AffinityVector('ARTIFICER', 1, 1)),
        new Answer('Barbarian', new AffinityVector('BARBARIAN', 1, 1)),
        new Answer('Bard', new AffinityVector('BARD', 1, 1)),
        new Answer('Blood Hunter', new AffinityVector('BLOOD_HUNTER', 1, 1)),
        new Answer('Cleric', new AffinityVector('CLERIC', 1, 1)),
        new Answer('Druid', new AffinityVector('DRUID', 1, 1)),
        new Answer('Fighter', new AffinityVector('FIGHTER', 1, 1)),
        new Answer('Monk', new AffinityVector('MONK', 1, 1)),
        new Answer('Paladin', new AffinityVector('PALADIN', 1, 1)),
        new Answer('Ranger', new AffinityVector('RANGER', 1, 1)),
        new Answer('Rogue', new AffinityVector('ROGUE', 1, 1)),
        new Answer('Sorcerer', new AffinityVector('SORCERER', 1, 1)),
        new Answer('Warlock', new AffinityVector('WARLOCK', 1, 1)),
        new Answer('Wizard', new AffinityVector('WIZARD', 1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Which type of roll would you PRIMARILY like to play?',
        new Answer('Tank', new AffinityVector('TANK', 1, 1)),
        new Answer('Melee DPS', new AffinityVector('MELEE_DPS', 1, 1)),
        new Answer('Ranged DPS', new AffinityVector('RANGED_DPS', 1, 1)),
        new Answer('Caster DPS', new AffinityVector('CASTER_DPS', 1, 1)),
        new Answer('Support', new AffinityVector('SUPPORT', 1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What best describes your SECONDARY priority?',
        new Answer('I would like to not die.', new AffinityVector()),
        new Answer('I would like to smack my enemies around.', new AffinityVector()),
        new Answer('Bows/crossbows/guns are cool.', new AffinityVector()),
        new Answer('Optimally I can still throw fireballs at people.', new AffinityVector()),
        new Answer('I would like to help my friends.', new AffinityVector())
    )
);

questionList.push(
    new Question(
        QuestionType.NUMERICAL,
        'How important is your PRIMARY priority to you?',
        new Answer(new AffinityVector()),
        new Answer(new AffinityVector())
    )
);

questionList.push(
    new Question(
        QuestionType.NUMERICAL,
        'How important is your SECONDARY priority to you? (10 meaning just as important as your primary priority)',
        new Answer(new AffinityVector()),
        new Answer(new AffinityVector())
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What other factors are important to you? (check all that apply)',
        new Answer('Having an OP character', new AffinityVector()),
        new Answer('Having a unique character', new AffinityVector()),
        new Answer('Having a character that is easy to play', new AffinityVector()),
        new Answer('Having a character that is good outside of combat', new AffinityVector()),
        new Answer('Having a character that has good saving throws', new AffinityVector()),
        new Answer('Having a character that is proficient/expert in many skills', new AffinityVector())
    )
);

questionList.push(
    new Question(
        QuestionType.TRUE_FALSE,
        'You interested in playing a homebrew class.',
        new Answer(new AffinityVector()),
        new Answer(new AffinityVector())
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How much 6e content are you interested in your character having?',
        new Answer('Bring it all on', new AffinityVector()),
        new Answer('Nothing too complicated', new AffinityVector()),
        new Answer('Let\'s stick to 5e', new AffinityVector())
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Are you interested in multiclassing?',
        new Answer('Nah just 16+ levels in one class please.', new AffinityVector()),
        new Answer('I would like to heavily multiclass.', new AffinityVector()),
        new Answer('I would take a short dip into another class if it fits and is strong.', new AffinityVector())
    )
);
    
questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Did you know that I haven\'t finished this yet and that you\'re about to be recommended Bard?',
        new Answer('What?', new AffinityVector())
    )
);
