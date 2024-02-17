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
        'What classes are you NOT interested in playing (at all, including multiclasses)?',
        new Answer('Artificer', new AffinityVector('ARTIFICER', -10, 10)),
        new Answer('Barbarian', new AffinityVector('BARBARIAN', -10, 10)),
        new Answer('Bard', new AffinityVector('BARD', -10, 10)),
        new Answer('Blood Hunter', new AffinityVector('BLOOD_HUNTER', -10, 10)),
        new Answer('Cleric', new AffinityVector('CLERIC', -10, 10)),
        new Answer('Druid', new AffinityVector('DRUID', -10, 10)),
        new Answer('Fighter', new AffinityVector('FIGHTER', -10, 10)),
        new Answer('Monk', new AffinityVector('MONK', -10, 10)),
        new Answer('Paladin', new AffinityVector('PALADIN', -10, 10)),
        new Answer('Ranger', new AffinityVector('RANGER', -10, 10)),
        new Answer('Rogue', new AffinityVector('ROGUE', -10, 10)),
        new Answer('Sorcerer', new AffinityVector('SORCERER', -10, 10)),
        new Answer('Warlock', new AffinityVector('WARLOCK', -10, 10)),
        new Answer('Wizard', new AffinityVector('WIZARD', -10, 10))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'Are there any classes you like WAY more than others?',
        new Answer('Artificer', new AffinityVector('ARTIFICER', 5, 10)),
        new Answer('Barbarian', new AffinityVector('BARBARIAN', 5, 10)),
        new Answer('Bard', new AffinityVector('BARD', 5, 10)),
        new Answer('Blood Hunter', new AffinityVector('BLOOD_HUNTER', 5, 10)),
        new Answer('Cleric', new AffinityVector('CLERIC', 5, 10)),
        new Answer('Druid', new AffinityVector('DRUID', 5, 10)),
        new Answer('Fighter', new AffinityVector('FIGHTER', 5, 10)),
        new Answer('Monk', new AffinityVector('MONK', 5, 10)),
        new Answer('Paladin', new AffinityVector('PALADIN', 5, 10)),
        new Answer('Ranger', new AffinityVector('RANGER', 5, 10)),
        new Answer('Rogue', new AffinityVector('ROGUE', 5, 10)),
        new Answer('Sorcerer', new AffinityVector('SORCERER', 5, 10)),
        new Answer('Warlock', new AffinityVector('WARLOCK', 5, 10)),
        new Answer('Wizard', new AffinityVector('WIZARD', 5, 10))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Which type of roll would you PRIMARILY like to play?',
        new Answer('Tank', new AffinityVector('TANK', 10, 10)),
        new Answer('Melee DPS', new AffinityVector('MELEE_DPS', 10, 10)),
        new Answer('Ranged DPS', new AffinityVector('RANGED_DPS', 10, 10)),
        new Answer('Caster DPS', new AffinityVector('CASTER_DPS', 10, 10)),
        new Answer('Support', new AffinityVector('SUPPORT', 10, 10))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What best describes your SECONDARY priority?',
        new Answer('I would like to be tanky.', new AffinityVector('SECONDARY_TANK', 5, 5)),
        new Answer('I would like to be a damage threat when in melee range.', new AffinityVector('SECONDARY_MELEE_DPS', 5, 5)),
        new Answer('Bows/crossbows/guns are cool.', new AffinityVector('SECONDARY_RANGED_DPS', 5, 5)),
        new Answer('Optimally I can still throw fireballs at people.', new AffinityVector('SECONDARY_CASTER_DPS', 5, 5)),
        new Answer('I would like to help my friends.', new AffinityVector('SECONDARY_SUPPORT', 5, 5))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What other factors are most important to you? (check all that apply)',
        new Answer('Having an overpowered character', new AffinityVector('POWER', 5, 5)),
        new Answer('Having a unique character', new AffinityVector('UNIQUENESS', 5, 5)),
        new Answer('Having a character that is good outside of combat', new AffinityVector('ROLEPLAY', 5, 5))
        
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How many options do you want to have in combat?',
        new Answer('I want a character that is easy to play (not a lot of decisions on what to do each round)', new AffinityVector('VERSATILITY', -10, 5)),
        new Answer('I like having a character that has options but nothing crazy.', new AffinityVector('ROLEPLAY', 0, 5)),
        new Answer('I would prefer a character that does something completely new every turn.', new AffinityVector('VERSATILITY', 10, 5)),
        new Answer('I don\'t care.', new AffinityVector('VERSATILITY', 0, 0))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Are are interested in playing a homebrew class.',
        new Answer('YES', new AffinityVector('HOMEBREW', 5, 5)),
        new Answer('IDC', new AffinityVector('HOMEBREW', 0, 0)),
        new Answer('NO', new AffinityVector('HOMEBREW', -5, 5))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How much 6e/playtest content are you interested in your character having?',
        new Answer('I would love to try some of the new 6e stuff.', new AffinityVector('6E', 5, 5)),
        new Answer('IDC', new AffinityVector('6E', 0, 0)),
        new Answer('Let\'s stick to 5e', new AffinityVector('6E', -5, 5))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Are you interested in multiclassing?',
        new Answer('I am happy to have multiple classes.', new AffinityVector('MULTICLASS', 10, 0)),
        new Answer('I would take a short dip into another class if it fits and is strong.', new AffinityVector('MULTICLASS', 1, 5)),
        new Answer('Nah just 16+ levels in one class please.', new AffinityVector('MULTICLASS', -10, 5))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What is the best way to not take damage?',
        new Answer('Dodge', new AffinityVector('NIMBLE', 5, 5)),
        new Answer('Not taking damage is not taking damage', new AffinityVector('TBD', 0, 0)),
        new Answer('Block it with my armor/shield', new AffinityVector('HEAVY', 5, 5))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How much magic (not necessarily spellcasting) do you want to have?',
        new Answer('I wanna be motherf***ing Houdini', new AffinityVector('MAGIC', 10, 10)),
        new Answer('I would like to have lots of magic mixed in with a few non-magical abilities', new AffinityVector('MAGIC', 5, 5)),
        new Answer('I would be okay with a few magic abilities/effects', new AffinityVector('MAGIC', 0, 0)),
        new Answer('Who need magic when Gronk have big sword?', new AffinityVector('MAGIC', -10, 1))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What do you want to spend your action on most turns?',
        new Answer('Making a weapon attack', new AffinityVector('MAGIC', -5, 1)),
        new Answer('Whatever the situation calls for.', new AffinityVector('MAGIC', 0, 0)),
        new Answer('Casting a spell', new AffinityVector('MAGIC', 5, 1)),
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        '',
        new Answer('', new AffinityVector('tbd', 1, 1)),
        new Answer('', new AffinityVector('tbd', 1, 1)),
        new Answer('', new AffinityVector('tbd', 1, 1))
    )
);
    
questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Did you know that I haven\'t finished this yet and that you\'re about to be recommended Bard?',
        new Answer('What?', new AffinityVector('BARD', 1, 1)),
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Assume you are a support character. It is the start of a dangerous combat and you are first. All allies and enemies are at full health. What would you like to do?',
        new Answer('Use a spell slot for big damage.', new AffinityVector('SECONDARY_CASTER_DPS', 5, 5)),
        new Answer('Save my spell slots, just use a cantrip or weapon attack from safety.', new AffinityVector('SECONDARY_SUPPORT', 5, 5), new AffinityVector('SECONDARY_MELEE_DPS', 5, 5)),
        new Answer('Use a spell slot to premtively buff allies.', new AffinityVector('SECONDARY_SUPPORT', 5, 5)),
        new Answer('Who said supports should stand at the back? CHARGE! (rush into melee)', new AffinityVector('SECONDARY_MELEE_DPS', 5, 5))
    )
);

