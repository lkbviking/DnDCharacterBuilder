import { affinities } from './Metadata/affinities.js';

export function Character() {

    this.affinityValues = {}

    Object.keys(affinities).forEach((key) => {
        this.affinityValues[affinities[key]] = 0;
    });

    this.getCharacterHTML = function() {
        let html = '<div class="character">';
        html += '<h1>You should... be a Bard!</h1>';
        html += '<h1>Be a Bard!</h1>';
        html += '<h1>Using the cool new stuff from the playtest/6e!</h1>';
        html += '<h1>With a subclass of College of Dance!</h1>';
        html += '<h1>10 levels of Bard should be sufficient...</h1>';
        html += '<h1>Then you multiclass into Monk!</h1>';
        html += '<h1>With a subclass of Warrior of Mercy!</h1>';
        html += '<h1>Here is a short narrative description of your character:</h1>';
        html += '<p>You are as nimble as they come. In combat you are seen weaving through the battlefield with unparalleled speed. One moment healing your wounded backline and the next unleashing a flurry of blows upon the backline of the enemy. As you move your voice rises in an inspiring chant, encouraging your comrades and boosting their morale. Your bardic magic filling the air. Your allies are invicible with you by their side and your enemies fall at your hands. All this, and you don\'t even wield a weapon, it just wouldn\'t be fair.</p>';
        html += '<h1>Here is a short description of what you can do:</h1>';
        html += '<p>Your core gameplay loop revolves around Agile Strikes and Font of Inspiration. Font of Inspiration allows you to use Bardic Inspiration every turn without running out of uses while Agile Strikes allows these Bardic Inspiration uses to also grant you a free unarmed attack. Using your bardic inspiration as a bonus action every turn will allow you to constantly hand out the die while also dishing out punches to the enemies, all without using your action which can be saved for a powerful spell or more punches.</p>';
        html += '<p>Your monk levels enhance your free unarmed attacks</p>';
        html += '<p>Unarmored Defense, Inspiring Movement, Tandem Footwork, and Leading Evasion allow you and your party to move quickly; making them less likely to take damage, be higher on the turn order, and to stay out of danger.</p>';
        html += '<p>Your monk levels enhance your movement making you even more slippery and able to dash around the battle field to wherever you\'re needed.</p>';
        html += '<p>Your monk subclass allows you to heal with just a touch, giving you another resource for healing if you are low on spell slots</p>';
        html += '<div></div>';
        html += '<div></div>';
        html += '<div></div>';
        html += '<div></div>';
        html += '<div></div>';
        html += '<div></div>';
        html += '<h1>Nerd Stats:</h1>';
        html += '<div class="affinity-values">';
        Object.keys(this.affinityValues).forEach((key) => {
            html += '<div class="affinity-value">' + key + ': ' + this.affinityValues[key] + '</div>';
        });
        html += '</div>';
        html += '</div>';
        return html;
    }

}