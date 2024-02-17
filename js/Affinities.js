import { AffinityVector } from './AffinityVector.js';
import { potentialCharacters } from './Metadata/potentialCharacters.js';
export class Affinities {
    constructor(affinityVectors) {
        if (affinityVectors === undefined) {
            affinityVectors = [];
        }
        this.data = {};
        affinityVectors.forEach((affinityVector) => {
            this.data[affinityVector.vectorType] = affinityVector;
        });
    }
    
    addAffinityVectors(affinityVectors) {
        affinityVectors.forEach((affinityVector) => {
            this.getAffinityVector(affinityVector.type).addVector(affinityVector);
        });
    };

    add(affinities) {
        this.addAffinityVectors(Object.values(affinities.data));
    };

    getAffinityVector(type) {
        if (this.data[type] === undefined) {
            this.data[type] = new AffinityVector(type, 0, 0);
        }
        return this.data[type];
    }

    getAffinitiesHTML() {
        let html = '<div class="affinities">';
        Object.keys(this.data).forEach((key) => {
            html += this.data[key].getAffinityHTML();
        });
        html += '</div>';
        return html;
    }

    findCharacter() {
        let bestCharacterRating = Number.MAX_SAFE_INTEGER;
        let bestCharacter = null;
        let currentRating = 0;
        let characterAffinities = null;
        potentialCharacters.forEach((character) => {
            currentRating = 0;
            characterAffinities = new Affinities(character.affinityVectors);
            console.log(characterAffinities);
            Object.keys(this.data).forEach((key) => {
                currentRating += Math.abs(
                                    this.getAffinityVector(key).magnitude
                                    - characterAffinities.getAffinityVector(key).magnitude
                                 ) * this.getAffinityVector(key).polarization;
                console.log(currentRating);
            });
            if (currentRating < bestCharacterRating) {
                bestCharacterRating = currentRating;
                bestCharacter = character;
            }
            console.log(character.buildName + ': ' + currentRating);
        });
        return bestCharacter;
    }
}
