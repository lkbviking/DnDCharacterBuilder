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

/* General
    Bad class -10, 10
    Good class 5, 10 = 50
    Role 10/15/20, 10/15/20 = 400
    Secondary 5/10/15, 5/10/15 = 100
    Role total: 425
*/
/* Major
    Magic -10/10, 10 = 100
    Versatility -10/10, 5 = 50
    Defense -10/10, 10 = 100
    Nova -10, 10 = 25
*/
/* Minor
    Power, Uniqueness, Expert 5, 5 = 25
    Nimble Stalwart Field 5, 5 = 25

*/

/* Support
    Buff/Debuff/healing/shielding/saves 10, 10 = 25
*/
questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'Are there any classes are you NOT interested in playing (AT ALL, including multiclasses)?',
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
        'Which type of role would you PRIMARILY like to play?',
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
        'What best describes your SECONDARY priority? (can be the same as the first if you want to be a one-trick pony)',
        new Answer('I would like to be tanky.', new AffinityVector('TANK', 5, 5)),
        new Answer('I would like to be a damage threat when in melee range.', new AffinityVector('MELEE_DPS', 5, 5)),
        new Answer('I would like to make weapon attacks from a safe distance.', new AffinityVector('RANGED_DPS', 5, 5)),
        new Answer('I would like to throw the occasional fireball.', new AffinityVector('CASTER_DPS', 5, 5)),
        new Answer('I would like to help my friends.', new AffinityVector('SUPPORT', 5, 5))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE_CHECKBOXES,
        'What other factors are most important to you? (check all that apply)',
        new Answer('Having an overpowered character', new AffinityVector('POWER', 5, 5)),
        new Answer('Having a unique character', new AffinityVector('UNIQUENESS', 5, 5)),
        new Answer('Having a character that is proficient/expert in many skills', new AffinityVector('EXPERT', 5, 5))
        
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How many options do you want to have in combat?',
        new Answer('I want a character that is easy to play (not a lot of decisions on what to do each round)', new AffinityVector('VERSATILITY', -10, 5)),
        new Answer('I like having a character that has options but nothing crazy.', new AffinityVector('VERSATILITY', 0, 5)),
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
        new Answer('Dodge', new AffinityVector('NIMBLE', 5, 5), new AffinityVector('DEFENCE', 2, 2)),
        new Answer('Block it with my armor/shield', new AffinityVector('STALWART', 5, 5), new AffinityVector('DEFENCE', 2, 2)),
        new Answer('Magical protection', new AffinityVector('FIELD', 5, 5), new AffinityVector('DEFENCE', 2, 2)),
        new Answer('Defense is lame, I make up for being squishy with raw power.', new AffinityVector('DEFENCE', -2, 2)),
        new Answer('Defense is critical but they type of defense is unimportant.', new AffinityVector('DEFENCE', 2, 2))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How much magic (not necessarily spellcasting) do you want to have?',
        new Answer('I wanna be motherf***ing Houdini', new AffinityVector('MAGIC', 10, 10)),
        new Answer('I would like to have lots of magic mixed in with a few non-magical abilities', new AffinityVector('MAGIC', 5, 5)),
        new Answer('I would be okay with a few magic abilities/effects', new AffinityVector('MAGIC', 0, 0)),
        new Answer('Who need magic when Gronk have big sword?', new AffinityVector('MAGIC', -10, 10))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'How important is it to you that you have naturally (without spells/buffs) high defenses?',
        new Answer('Defense is nice but not at the expense of my primary role.', new AffinityVector('DEFENCE', -5, 5)),
        new Answer('I would make small concessions in order to have better defense.', new AffinityVector('DEFENCE', 0, 0)),
        new Answer('I want to be immortal.', new AffinityVector('DEFENCE', 5, 5))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Which do you care about more with regard to damaging enemies?',
        new Answer('The ability to deal consistant damage every round.', new AffinityVector('NOVA', -5, 5)),
        new Answer('The ability to deal higher but inconsistant damage on a single round.', new AffinityVector('NOVA', 5, 5)),
        new Answer('I prefer characters that have ok DpR while still having emergency burst options.', new AffinityVector('NOVA', 0, 5)),
        new Answer('It does not matter to me.', new AffinityVector('NOVA', 0, 0))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'You are the last one standing on your team and you are facing off against the last enemy of the fight. With 1hp left, how would you like the fight to end?',
        new Answer('The enemy rolls one under your AC, allowing you one extra turn to end the fight.', new AffinityVector('DEFENCE', 3, 3)),
        new Answer('You deal just enough damage to finish the enemy before he gets a turn to finish you off.', new AffinityVector('DEFENCE', -3, 3)),
        new Answer('Either works.', new AffinityVector('DEFENCE', 0, 0))
    )
);

questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'If you were an Arcane Archer with one 3rd level spell slot left in the midst of a difficult encounter, what would you do?',
        new Answer('Cast Fireball for damage now.', new AffinityVector('NOVA', 5, 5)),
        new Answer('Cast Haste on myself for the extra damage every turn.', new AffinityVector('NOVA', -5, 5))
    )
);
/*
questionList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        '',
        new Answer('', new AffinityVector('tbd', 1, 1)),
        new Answer('', new AffinityVector('tbd', 1, 1)),
        new Answer('', new AffinityVector('tbd', 1, 1))
    )
);
*/
tankList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'It is the middle of a difficult combat. The closest enemy is 60ft away. What would you like to do?',
        new Answer('', new AffinityVector('CASTER_DPS', 5, 5)),
        new Answer('', new AffinityVector('RANGED_DPS', 5, 5)),
        new Answer('', new AffinityVector('SUPPORT', 5, 5)),
        new Answer('', new AffinityVector('TANK', 5, 5)),
        new Answer('', new AffinityVector('MELEE_DPS', 5, 5))
    )
);

meleeList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'It is the middle of a difficult combat. The closest enemy is 60ft away. What would you like to do?',
        new Answer('Cast a spell or cantrip.', new AffinityVector('CASTER_DPS', 5, 5)),
        new Answer('Use a ranged weapon attack.', new AffinityVector('RANGED_DPS', 5, 5)),
        new Answer('Aid your allies.', new AffinityVector('SUPPORT', 5, 5)),
        new Answer('Protect yourself', new AffinityVector('TANK', 5, 5)),
        new Answer('Dash into melee range and use a bonus action melee attack.', new AffinityVector('MELEE_DPS', 5, 5))
    )
);

rangedList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'It is the middle of an difficult combat. There are still several enemies remaining, one of whom is attacking you with melee weapon attacks. What would you like to do?',
        new Answer('Cast a spell appropriate for the situation.', new AffinityVector('CASTER_DPS', 5, 5)),
        new Answer('Save my resources, just use a cantrip or weapon attack.', new AffinityVector('CASTER_DPS', 1, 1), new AffinityVector('MELEE_DPS', 1, 1), new AffinityVector('RANGED_DPS', 1, 1)),
        new Answer('Aid an ally in more danger than you.', new AffinityVector('SUPPORT', 5, 5)),
        new Answer('Find a way to escape melee range and use a ranged weapon attack.', new AffinityVector('RANGED_DPS', 5, 5)),
        new Answer('Attack with a melee weapon.', new AffinityVector('MELEE_DPS', 5, 5))
    )
);

casterList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'It is the middle of an easy combat. There are still several enemies remaining but they are not a huge threat. However, your allies have sustained some injuries. What would you like to do?',
        new Answer('Fireball. Hitting all remaining enemies but further injuring allies who are in melee.', new AffinityVector('CASTER_DPS', 5, 5)),
        new Answer('Save my resources, just use a cantrip or weapon attack.', new AffinityVector('CASTER_DPS', 1, 1), new AffinityVector('MELEE_DPS', 1, 1), new AffinityVector('RANGED_DPS', 1, 1)),
        new Answer('Use a spell slot to heal, protect, or buff the ally in the most danger.', new AffinityVector('SUPPORT', 5, 5)),
        new Answer('Use a ranged weapon attack.', new AffinityVector('RANGED_DPS', 5, 5)),
        new Answer('Heal or protect myself.', new AffinityVector('TANK', 5, 5))
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'It is the start of a dangerous combat and you are first. All allies and enemies are at full health. What would you like to do?',
        new Answer('Use a spell slot for big damage.', new AffinityVector('CASTER_DPS', 5, 5)),
        new Answer('Save my spell slots, just use a cantrip or weapon attack.', new AffinityVector('SUPPORT', 1, 1), new AffinityVector('MELEE_DPS', 1, 1), new AffinityVector('RANGED_DPS', 1, 1)),
        new Answer('Use a spell slot to premtively buff allies.', new AffinityVector('SUPPORT', 5, 5)),
        new Answer('Who said supports should stand at the back? CHARGE! (rush into melee)', new AffinityVector('MELEE_DPS', 3, 3), new AffinityVector('TANK', 2, 2)),
        new Answer('Use a ranged weapon attack.', new AffinityVector('RANGED_DPS', 5, 5))
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What is your preferred way of assisting allies?',
        new Answer('Restoring their hitpoints after they have taken damage.', new AffinityVector('HEAL', 5, 5)),
        new Answer('Protecting them from taking damage.', new AffinityVector('SHIELD', 5, 5)),
        new Answer('Protecting them from harmful spells.', new AffinityVector('SAVE', 5, 5)),
        new Answer('Empowering them so they can deal more damage.', new AffinityVector('BUFF', 5, 5)),
        new Answer('Using abilities on enemies to make them less dangerous.', new AffinityVector('DEBUFF', 5, 5)),
        new Answer('Any or all of the above.', new AffinityVector('HEAL', 0, 0))
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What is the best early support spell?',
        new Answer('Cure Wounds', new AffinityVector('HEAL', 5, 5)),
        new Answer('Bless', new AffinityVector('BUFF', 5, 5)),
        new Answer('Any or all of the above.', new AffinityVector('HEAL', 0, 0))
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What is the best early support spell?',
        new Answer('Shield of Faith', new AffinityVector('SHIELD', 5, 5)),
        new Answer('Bane', new AffinityVector('DEBUFF', 5, 5)),
        new Answer('Any or all of the above.', new AffinityVector('HEAL', 0, 0))
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What is the best feature/spell?',
        new Answer('Aura of Protection.', new AffinityVector('SAVE', 5, 5)),
        new Answer('Haste.', new AffinityVector('BUFF', 5, 5)),
        new Answer('Any or all of the above.', new AffinityVector('HEAL', 0, 0))
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'Which would you pick if you could permanently give your whole party one of the following effects?',
        new Answer('Evasion.', new AffinityVector('SAVE', 5, 5)),
        new Answer('+3 AC', new AffinityVector('SHIELD', 5, 5)),
        new Answer('Any or all of the above.', new AffinityVector('HEAL', 0, 0))
    )
);

supportList.push(
    new Question(
        QuestionType.MULTIPLE_CHOICE,
        'What is the better spell?',
        new Answer('Healing Word.', new AffinityVector('HEAL', 5, 5)),
        new Answer('Faerie Fire.', new AffinityVector('DEBUFF', 5, 5)),
        new Answer('Any or all of the above.', new AffinityVector('HEAL', 0, 0))
    )
);