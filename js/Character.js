import { AffinityVector } from './AffinityVector.js';
import { potentialCharacters } from './Metadata/potentialCharacters.js';
import { sanitizeText, characterLink, spell } from './links.js';
let domain = "https://lkbviking.github.io/DnDCharacterBuilder/specificCharacter.html?buildName="

export class Character {
    constructor(buildName, mainClass, subClass, levels, 
        multiClass, multiClassSubClass, multiClassLevels, 
        hasPlaytestMaterial, hasHomebrewMaterial,
        statsArray, recommendedSpells, recommendedSpellsNotes,
        narritiveDescription, buildDraw, mainClassGameplayDescription, 
        multiClassGameplayDescription, multiClassSubClassGameplayDescription,
        feats, race, attributes, background, items,
        otherNotes, affinityVectors, affinityRating, url) {
        this.buildName = buildName;
        this.mainClass = mainClass;
        this.subClass = subClass;
        this.levels = levels;
        this.multiClass = multiClass;
        this.multiClassSubClass = multiClassSubClass;
        this.multiClassLevels = multiClassLevels;
        this.hasPlaytestMaterial = hasPlaytestMaterial;
        this.hasHomebrewMaterial = hasHomebrewMaterial;
        this.statsArray = statsArray;
        this.recommendedSpells = recommendedSpells;
        this.recommendedSpellsNotes = recommendedSpellsNotes;
        this.narritiveDescription = narritiveDescription;
        this.buildDraw = buildDraw;
        this.mainClassGameplayDescription = mainClassGameplayDescription;
        this.multiClassGameplayDescription = multiClassGameplayDescription;
        this.multiClassSubClassGameplayDescription = multiClassSubClassGameplayDescription;
        this.feats = feats;
        this.race = race;
        this.attributes = attributes;
        this.background = background;
        this.items = items;
        this.otherNotes = otherNotes;
        this.affinityVectors = affinityVectors;
        this.affinityRating = affinityRating;
        this.url = domain + sanitizeText(buildName);
        if (this.hasHomebrewMaterial) {
            this.affinityVectors.push(new AffinityVector('HOMEBREW', 5));
        } else {
            this.affinityVectors.push(new AffinityVector('HOMEBREW', -5));
        }
        if (this.hasPlaytestMaterial) {
            this.affinityVectors.push(new AffinityVector('6E', 5));
        } else {
            this.affinityVectors.push(new AffinityVector('6E', -5));
        }
        this.affinityVectors.push(new AffinityVector(this.mainClass.toUpperCase(), this.levels));
        if (this.multiClassLevels > 0) {
            this.affinityVectors.push(new AffinityVector(this.multiClass.toUpperCase(), this.multiClassLevels));
        }
    }

    getCharacterHTML() {
        let html = '<div class="character">';
        html += '<h1>Your Build is ' + this.buildName + '</h1>';
        html += '<p>' + this.buildDraw + '</p>';
        if (this.hasPlaytestMaterial) {
            html += '<p>Using the cool new stuff from the playtest/6e...</p>';
        }
        if (this.hasHomebrewMaterial) {
            html += '<p>Using some homebrew stuff...</p>';
        }
        html += '<h1>Narrative Description</h1>';
        html += '<p>' + this.narritiveDescription + '</p>';
        html += '<h1>Character</h1>';
        html += '<p>You should be a... ' + this.mainClass + '!</p>';
        html += '<p>With a subclass of ' + this.subClass + '!</p>';
        if (this.multiClassLevels > 0) {
            html += '<p>Your first ' + this.levels + ' levels should go into ' + this.mainClass + '.</p>';
            html += '<p>Then you multiclass into ' + this.multiClass + '!</p>';
            html += '<p>With a subclass of ' + this.multiClassSubClass + '!</p>';
            html += '<p>For your remaining ' + this.multiClassLevels + ' levels.</p>';
        } else {
            html += '<p>For all ' + this.levels + ' levels!</p>';
        }
        html += '<h1>Here is a short description of what you can do:</h1>';
        html += '<p>' + this.mainClassGameplayDescription + '</p>';
        if (this.multiClassLevels > 0) {
            html += '<p>' + this.multiClassGameplayDescription + '</p>';
            html += '<p>' + this.multiClassSubClassGameplayDescription + '</p>';
        }
        if (this.recommendedSpellsNotes) {
            html += '<h1>Core Spells</h1>';
            html += '<h2>Cantrips:</h2>';
            for (let j = 0; j < this.recommendedSpells[0].length; j++) {
                html += '<p>' + spell(this.recommendedSpells[0][j]) + '</p>';
            }
            for (let i = 1; i < this.recommendedSpells.length; i++) {
                if(this.recommendedSpells[i].length) html += '<h2>Tier ' + i + ':</h2>';
                for (let j = 0; j < this.recommendedSpells[i].length; j++) {
                    html += '<p>' + spell(this.recommendedSpells[i][j]) + '</p>';
                }
            }
            html += '<p>*-Indicates this spell is core but given to you for free and does not count against the number of spells you can prepare.</p>';
            html += '<h2>Spells Notes:</h2>';
            html += '<p>' + this.recommendedSpellsNotes + '</p>';
        }
        html += '<h1>Race</h1>';
        html += '<p>' + this.race + '</p>';
        html += '<h1>Attributes (including racial bonuses)</h1>';
        html += '<p>' + this.attributes + '</p>';
        html += '<h1>Feats/ASI</h1>';
        html += '<p>' + this.feats + '</p>';
        html += '<h1>Potential Backstory</h1>';
        html += '<p>' + this.background + '</p>';
        html += '<h1>Magic Items</h1>';
        html += '<p>Very Rare: ' + this.items[0] + '</p>';
        html += '<p>Rare: ' + this.items[1] + '</p>';
        html += '<p>Uncommon: ' + this.items[2] + '</p>';
        html += '<h1>Other Notes</h1>';
        if (this.otherNotes) {
            html += '<p>' + this.otherNotes + '</p>';
        }
        html += '<p>Tyler has approved using 6e\'s buff to Healing Word/Cure Wounds (and their "Mass" counterparts) that doubles the amount of dice you roll for those spells.</p>';
        html += '<p>Aid + Heroes\' Feast + Feature: Inspiring Leader is an insane combo.</p>';
        html += '<p>Many suppors recommend lesser/greater restoration which can be very valuable but also is very niche, these are good candidates to swap out if you want to pick up something else.</p>';

        html += '<h1>Not for you? Here are some other character suggestions:</h1>';
        for (let i = 0; i < 6; i++) {
            if (potentialCharacters[i].buildName !== this.buildName) {
                html += '<p>' + characterLink(potentialCharacters[i].buildName) + '</p>';
            }
        }

        html += '<a href="index.html"><button id="restart">Take the Quiz Again</button></a>';
        html += '</div>';
        return html;
    };
}

export class CharacterBuilder {
    constructor() {
        this.buildName = '';
        this.mainClass = '';
        this.subClass = '';
        this.levels = '';
        this.multiClass = '';
        this.multiClassSubClass = '';
        this.multiClassLevels = 0;
        this.hasPlaytestMaterial = false;
        this.hasHomebrewMaterial = false;
        this.statsArray = '';
        this.recommendedSpells = [['PYF'],[],[],[],[],[],[],[],[],[]];
        this.recommendedSpellsNotes = 'None';
        this.narritiveDescription = '';
        this.buildDraw = '';
        this.mainClassGameplayDescription = '';
        this.multiClassGameplayDescription = '';
        this.multiClassSubClassGameplayDescription = '';
        this.feats = '';
        this.race = '';
        this.attributes = '';
        this.background = '';
        this.items = [];
        this.otherNotes = '';
        this.affinityVectors = [];
        this.affinityRating = 0;
        this.url = '';
    }

    setBuildName(buildName) {
        this.buildName = buildName;
        return this;
    }

    setMainClass(mainClass) {
        this.mainClass = mainClass;
        return this;
    }

    setSubClass(subClass) {
        this.subClass = subClass;
        return this;
    }

    setLevels(levels) {
        this.levels = levels;
        return this;
    }

    setMultiClass(multiClass) {
        this.multiClass = multiClass;
        return this;
    }

    setMultiClassSubClass(multiClassSubClass) {
        this.multiClassSubClass = multiClassSubClass;
        return this;
    }

    setMultiClassLevels(multiClassLevels) {
        this.multiClassLevels = multiClassLevels;
        return this;
    }

    setHasPlaytestMaterial(hasPlaytestMaterial) {
        this.hasPlaytestMaterial = hasPlaytestMaterial;
        return this;
    }

    setHasHomebrewMaterial(hasHomebrewMaterial) {
        this.hasHomebrewMaterial = hasHomebrewMaterial;
        return this;
    }

    setStatsArray(statsArray) {
        this.statsArray = statsArray;
        return this;
    }

    setRecommendedSpellsByTier(tier, recommendedSpells) {
        this.recommendedSpells[tier].push(...recommendedSpells);
        return this;
    }

    setRecommendedSpellsNotes(recommendedSpellsNotes) {
        this.recommendedSpellsNotes = recommendedSpellsNotes;
        return this;
    }

    setNarritiveDescription(narritiveDescription) {
        this.narritiveDescription = narritiveDescription;
        return this;
    }

    setBuildDraw(buildDraw) {
        this.buildDraw = buildDraw;
        return this;
    }

    setMainClassGameplayDescription(mainClassGameplayDescription) {
        this.mainClassGameplayDescription = mainClassGameplayDescription;
        return this;
    }

    setMultiClassGameplayDescription(multiClassGameplayDescription) {
        this.multiClassGameplayDescription = multiClassGameplayDescription;
        return this;
    }

    setMultiClassSubClassGameplayDescription(multiClassSubClassGameplayDescription) {
        this.multiClassSubClassGameplayDescription = multiClassSubClassGameplayDescription;
        return this;
    }

    setFeats(feats) {
        this.feats = feats;
        return this;
    }

    setRace(race) {
        this.race = race;
        return this;
    }

    setAttributes(attributes) {
        this.attributes = attributes;
        return this;
    }

    setBackground(background) {
        this.background = background;
        return this;
    }

    setMagicItemsByTier(tier, item) {
        this.items[tier] = item;
        return this;
    }

    setOtherNotes(otherNotes) {
        this.otherNotes = otherNotes;
        return this;
    }

    addAffinityVector(affinityVector) {
        this.affinityVectors.push(affinityVector);
        return this;
    }

    setAffinityRating(affinityRating) {
        this.affinityRating = affinityRating;
        return this;
    }

    setUrl(url) {
        this.url = url;
        return this;
    }

    build() {
        return new Character(
            this.buildName,
            this.mainClass, 
            this.subClass, 
            this.levels, 
            this.multiClass, 
            this.multiClassSubClass, 
            this.multiClassLevels, 
            this.hasPlaytestMaterial, 
            this.hasHomebrewMaterial,
            this.statsArray, 
            this.recommendedSpells,
            this.recommendedSpellsNotes,
            this.narritiveDescription,
            this.buildDraw,
            this.mainClassGameplayDescription,
            this.multiClassGameplayDescription,
            this.multiClassSubClassGameplayDescription,
            this.feats,
            this.race,
            this.attributes,
            this.background,
            this.items,
            this.otherNotes,
            this.affinityVectors,
            this.affinityRating,
            this.url
        );
    }
}