import { Question } from '../Question.js';
import { QuestionType } from './QuestionType.js';
import { affinities } from '../Affinities.js';
export let questionList = [];

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What classes are you interested in playing? (check all that apply)',
        [
            'Artificer', 
            'Barbarian', 
            'Bard', 
            'Blood Hunter', 
            'Cleric', 
            'Druid', 
            'Fighter', 
            'Monk', 
            'Paladin', 
            'Ranger', 
            'Rogue', 
            'Sorcerer', 
            'Warlock', 
            'Wizard'
        ],
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Which type of roll would you PRIMARILY like to play?',
        [
            'Tank', 
            'Melee DPS', 
            'Ranged DPS', 
            'Caster DPS', 
            'Support'
        ],
        )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What best describes your SECONDARY priority?',
        [
            'I would like to not die.', 
            'I would like to smack my enemies around.', 
            'Bows/crossbows/guns are cool.', 
            'Optimally I can still throw fireballs at people.', 
            'I would like to help my friends.'
        ],
        )
);

questionList.push(
    new Question(
        QuestionType.NUMERICAL,
        'How important is your PRIMARY priority to you?',
        [],
        []
    )
);

questionList.push(
    new Question(
        QuestionType.NUMERICAL,
        'How important is your SECONDARY priority to you? (10 meaning just as important as your primary priority)',
        [],
        []
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What other factors are important to you? (check all that apply)',
        [
            'Having an OP character', 
            'Having a unique character', 
            'Having a character that is easy to play', 
            'Having a character that is good outside of combat', 
            'Having a character that has good saving throws', 
            'Having a character that is proficient/expert in many skills'
        ],
        []
    )
);

questionList.push(
    new Question(
        QuestionType.TRUE_FALSE,
        'You interested in playing a homebrew class.',
        [],
        []
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How much 6e content are you interested in your character having?',
        [
            'Bring it all on', 
            'Nothing too complicated', 
            'Let\'s stick to 5e'
        ],
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Are you interested in multiclassing?',
        [
            'Nah just 16+ levels in one class please.', 
            'I would like to heavily multiclass.', 
            'I would take a short dip into another class if it fits and is strong.'
        ],
    )
);
    
questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Did you know that I haven\'t finished this yet and that you\'re about to be recommended Bard?',
        ['What?'],
    )
);
