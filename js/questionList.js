import { Question } from './question.js';
import { QuestionType } from './enums/QuestionType.js';
import {ClassAffinityType} from './enums/ClassAffinityType.js';
import {RoleAffinityType} from './enums/RoleAffinityType.js';
import {SubRoleAffinityType} from './enums/SubRoleAffinityType.js';
import {OtherAffinityType} from './enums/OtherAffinityType.js';
export let questionList = [];

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What classes are you interested in playing? (check all that apply)',
        [ClassAffinityType.ARTIFICER, ClassAffinityType.BARBARIAN, ClassAffinityType.BARD, ClassAffinityType.BLOOD_HUNTER, ClassAffinityType.CLERIC, ClassAffinityType.DRUID, ClassAffinityType.FIGHTER, ClassAffinityType.MONK, ClassAffinityType.PALADIN, ClassAffinityType.RANGER, ClassAffinityType.ROGUE, ClassAffinityType.SORCERER, ClassAffinityType.WARLOCK, ClassAffinityType.WIZARD],
        [ClassAffinityType.ARTIFICER, ClassAffinityType.BARBARIAN, ClassAffinityType.BARD, ClassAffinityType.BLOOD_HUNTER, ClassAffinityType.CLERIC, ClassAffinityType.DRUID, ClassAffinityType.FIGHTER, ClassAffinityType.MONK, ClassAffinityType.PALADIN, ClassAffinityType.RANGER, ClassAffinityType.ROGUE, ClassAffinityType.SORCERER, ClassAffinityType.WARLOCK, ClassAffinityType.WIZARD]
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Which type of roll would you PRIMARILY like to play?',
        [RoleAffinityType.TANK, RoleAffinityType.MELEE, RoleAffinityType.RANGED, RoleAffinityType.CASTER, RoleAffinityType.SUPPORT],
        [RoleAffinityType.TANK, RoleAffinityType.MELEE, RoleAffinityType.RANGED, RoleAffinityType.CASTER, RoleAffinityType.SUPPORT]
        )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What best describes your SECONDARY priority?',
        [SubRoleAffinityType.TANK, SubRoleAffinityType.MELEE, SubRoleAffinityType.RANGED, SubRoleAffinityType.CASTER, SubRoleAffinityType.SUPPORT],
        [SubRoleAffinityType.TANK, SubRoleAffinityType.MELEE, SubRoleAffinityType.RANGED, SubRoleAffinityType.CASTER, SubRoleAffinityType.SUPPORT]
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
        ['Having an OP character', 'Having a unique character', 'Having a character that is easy to play', 'Having a character that is good outside of combat', 'Having a character that has good saving throws', 'Having a character that is proficient/expert in many skills'],
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
        [OtherAffinityType.PLAYTEST, OtherAffinityType.MINI_PLAYTEST, OtherAffinityType.NO_PLAYTEST],
        [OtherAffinityType.PLAYTEST, OtherAffinityType.MINI_PLAYTEST, OtherAffinityType.NO_PLAYTEST]
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Are you interested in multiclassing?',
        [OtherAffinityType.SINGLE_CLASS, OtherAffinityType.MULTICLASS, OtherAffinityType.DIP],
        [OtherAffinityType.SINGLE_CLASS, OtherAffinityType.MULTICLASS, OtherAffinityType.DIP]
    )
);
    
questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Did you know that I haven\'t finished this yet and that you\'re about to be recommended Bard?',
        ['What?'],
        [ClassAffinityType.BARD]
    )
);
