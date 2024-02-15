export class Answer {
    constructor(text, ...affinityVectors) {
        this.text = text;
        this.affinityVectors = affinityVectors;
    }
}