import { CharacterBuilder } from '../Character.js';
import { AffinityVector } from '../AffinityVector.js';
export let potentialCharacters = []

potentialCharacters.push(
    new CharacterBuilder()
    .setMainClass('Bard')
    .setSubClass('College of Dance')
    .setLevels(10)
    .setMultiClass('Monk')
    .setMultiClassSubClass('Warrior of Mercy')
    .setMultiClassLevels(5)
    .setHasPlaytestMaterial(true)
    .setHasHomebrewMaterial(false)
    .setNarritiveDescription('You are as nimble as they come. In combat you are seen weaving through the battlefield with unparalleled speed. One moment healing your wounded backline and the next unleashing a flurry of blows upon the backline of the enemy. As you move your voice rises in an inspiring chant, encouraging your comrades and boosting their morale. Your bardic magic filling the air. Your allies are invicible with you by their side and your enemies fall at your hands. All this, and you don\'t even wield a weapon, it just wouldn\'t be fair.')
    .setMainClassGameplayDescription('Your core gameplay loop revolves around Agile Strikes and Font of Inspiration. Font of Inspiration allows you to use Bardic Inspiration every turn without running out of uses while Agile Strikes allows these Bardic Inspiration uses to also grant you a free unarmed attack. Using your bardic inspiration as a bonus action every turn will allow you to constantly hand out the die while also dishing out punches to the enemies, all without using your action which can be saved for a powerful spell or more punches.')
    .setMultiClassGameplayDescription('Your monk levels enhance your free unarmed attacks as well as your movement: making you even more slippery and able to dash around the battle field to wherever you\'re needed.')
    .setMultiClassSubClassGameplayDescription('Your monk subclass allows you to heal with just a touch, giving you another resource for healing if you are low on spell slots')
    .setOtherNotes('TUnarmored Defense, Inspiring Movement, Tandem Footwork, and Leading Evasion allow you and your party to move quickly; making them less likely to take damage, be higher on the turn order, and to stay out of danger.')
    .addAffinityVector(new AffinityVector('BARD', 10, 10))
    .addAffinityVector(new AffinityVector('MONK', 5, 10))
    .build()
);
