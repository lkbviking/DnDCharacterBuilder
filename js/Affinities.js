import { AffinityVector } from './AffinityVector.js';
export class Affinities {
    constructor(...affinityVectors) {
        this.data = {};
        affinityVectors.forEach((affinityVector) => {
            this.data[affinityVector.vectorType] = affinityVector;
        });
    }
    
    addAffinityVectors(...affinityVectors) {
        affinityVectors.forEach((affinityVector) => {
            this.data[affinityVector.type] = affinityVector.add(this.data[affinityVector.type]);
        });
       
    };



    add(affinities) {
        this.addAffinityVectors(...Object.values(affinities.data));
    };

    getAffinitiesHTML() {
        let html = '<div class="affinities">';
        Object.keys(this.data).forEach((key) => {
            html += this.data[key].getAffinityHTML();
        });
        html += '</div>';
        return html;
    }
}