export class Character {
    constructor(mainClass, subClass, levels, 
        multiClass, multiClassSubClass, multiClassLevels, 
        hasPlaytestMaterial, hasHomebrewMaterial,
        statsArray, recommendedSpells,
        narritiveDescription, mainClassGameplayDescription, 
        multiClassGameplayDescription, multiClassSubClassGameplayDescription,
        otherNotes, affinityVectors) {
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
        this.narritiveDescription = narritiveDescription;
        this.mainClassGameplayDescription = mainClassGameplayDescription;
        this.multiClassGameplayDescription = multiClassGameplayDescription;
        this.multiClassSubClassGameplayDescription = multiClassSubClassGameplayDescription;
        this.otherNotes = otherNotes;
        this.affinityVectors = affinityVectors;
    }

    getCharacterHTML() {
        let html = '<div class="character">';
        if (this.hasPlaytestMaterial) {
            html += '<p>Using the cool new stuff from the playtest/6e...</p>';
        }
        if (this.hasHomebrewMaterial) {
            html += '<p>Using some homebrew stuff...</p>';
        }
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
        html += '<h1>Narrative Description</h1>';
        html += '<p>' + this.narritiveDescription + '</p>';
        html += '<h1>Here is a short description of what you can do:</h1>';
        html += '<p>' + this.mainClassGameplayDescription + '</p>';
        if (this.multiClassLevels > 0) {
            html += '<p>' + this.multiClassGameplayDescription + '</p>';
            html += '<p>' + this.multiClassSubClassGameplayDescription + '</p>';
        }
        if (this.recommendedSpells.length > 0) {
            html += '<h1>Recommended Spells</h1>';
            html += '<h2>Cantrips:</h2>';
            for (let j = 0; j < this.recommendedSpells[0].length; j++) {
                html += '<p>' + this.recommendedSpells[0][j] + '</p>';
            }
            for (let i = 1; i < this.recommendedSpells.length; i++) {
                html += '<h2>Tier ' + i + ':</h2>';
                for (let j = 0; j < this.recommendedSpells[i].length; j++) {
                    html += '<p>' + this.recommendedSpells[i][j] + '</p>';
                }
            }
        }
        if (this.otherNotes) {
            html += '<h1>Other Notes</h1>';
            html += '<p>' + this.otherNotes + '</p>';
        }

        html += '</div>';
        return html;
    };
}

export class CharacterBuilder {
    constructor() {
        this.mainClass = '';
        this.subClass = '';
        this.levels = '';
        this.multiClass = '';
        this.multiClassSubClass = '';
        this.multiClassLevels = 0;
        this.hasPlaytestMaterial = false;
        this.hasHomebrewMaterial = false;
        this.statsArray = '';
        this.recommendedSpells = [];
        this.narritiveDescription = '';
        this.mainClassGameplayDescription = '';
        this.multiClassGameplayDescription = '';
        this.multiClassSubClassGameplayDescription = '';
        this.otherNotes = '';
        this.affinityVectors = [];
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
        this.recommendedSpells[tier].push(recommendedSpells);
        return this;
    }

    setNarritiveDescription(narritiveDescription) {
        this.narritiveDescription = narritiveDescription;
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

    setOtherNotes(otherNotes) {
        this.otherNotes = otherNotes;
        return this;
    }

    addAffinityVector(affinityVector) {
        this.affinityVectors.push(affinityVector);
        return this;
    }

    build() {
        return new Character(
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
            this.narritiveDescription,
            this.mainClassGameplayDescription,
            this.multiClassGameplayDescription,
            this.multiClassSubClassGameplayDescription,
            this.otherNotes,
            this.affinityVectors
        );
    }
}