import { Question } from '../Question.js';
import { QuestionType } from './QuestionType.js';
import { AffinityVector } from '../AffinityVector.js';
import { Answer } from '../Answer.js';

export let questionList = [];
export let tankList = [];
export let meleeList = [];
export let rangedList = [];
export let casterList = [];
export let supportList = [];

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What classes are you most interested in playing? (check all that apply)',
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
        new Answer('I would like to not die.', new AffinityVector('TANK', 1, 1)),
        new Answer('I would like to smack my enemies around.', new AffinityVector('MELEE_DPS', 1, 1)),
        new Answer('Bows/crossbows/guns are cool.', new AffinityVector('RANGED_DPS', 1, 1)),
        new Answer('Optimally I can still throw fireballs at people.', new AffinityVector('CASTER_DPS', 1, 1)),
        new Answer('I would like to help my friends.', new AffinityVector('SUPPORT', 1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What other factors are most important to you? (check all that apply)',
        new Answer('Having an overpowered character', new AffinityVector('POWER', 1, 1)),
        new Answer('Having a unique character', new AffinityVector('UNIQUENESS', 1, 1)),
        new Answer('Having a character that is easy to play', new AffinityVector('EASE_OF_PLAY', 1, 1)),
        new Answer('Having a character that is good outside of combat', new AffinityVector('ROLEPLAY', 1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'You are interested in playing a homebrew class.',
        new Answer('YES', new AffinityVector('HOMEBREW', 1, 1)),
        new Answer('NO', new AffinityVector('HOMEBREW', -1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How much 6e/playtest content are you interested in your character having?',
        new Answer('Bring it all on', new AffinityVector('6E', 2, 1)),
        new Answer('Nothing too complicated', new AffinityVector('6E', 1, 1)),
        new Answer('Let\'s stick to 5e', new AffinityVector('6E', -1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Are you interested in multiclassing?',
        new Answer('Nah just 16+ levels in one class please.', new AffinityVector('MULTICLASS', -1, 1)),
        new Answer('I would like to heavily multiclass.', new AffinityVector('MULTICLASS', 2, 1)),
        new Answer('I would take a short dip into another class if it fits and is strong.', new AffinityVector('MULTICLASS', 1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What is the best way to not take damage?',
        new Answer('Dodge', new AffinityVector('NIMBLE', 1, 1)),
        new Answer('Block it with my armor/shield', new AffinityVector('HEAVY', 1, 1)),
    )
);

casterList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How much magic (not necessarily spellcasting) do you want to have?',
        new Answer('I wanna be motherf***ing Houdini', new AffinityVector('MAGIC', 5, 1)),
        new Answer('I would like to have some magic mixed in with my non-magical abilities', new AffinityVector('MAGIC', 2, 1)),
        new Answer('I would be okay with a few magic abilities/effects', new AffinityVector('MAGIC', 1, 1)),
        new Answer('Who need magic when Gronk have big sword?', new AffinityVector('MAGIC', -1, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What do you want to spend your action on most turns?',
        new Answer('Making a weapon attack', new AffinityVector()),
        new Answer('', new AffinityVector()),
        new Answer('Casting a spell', new AffinityVector())
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        '',
        new Answer('', new AffinityVector()),
        new Answer('', new AffinityVector()),
        new Answer('', new AffinityVector())
    )
);
    
questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Did you know that I haven\'t finished this yet and that you\'re about to be recommended Bard?',
        new Answer('What?', new AffinityVector('BARD', 1, 1)),
    )
);

