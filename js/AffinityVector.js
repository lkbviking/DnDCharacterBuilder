export class AffinityVector {
    constructor(type, magnitude, polarization) {
        if (magnitude === undefined) {
            magnitude = 0;
        }
        if (polarization === undefined) {
            polarization = 0;
        }
        this.type = type;
        this.magnitude = magnitude;
        this.polarization = polarization;

        
    }
    
    add(magnitude, polarization) {
        this.magnitude += magnitude;
        this.polarization += polarization;
    };

    addVector(affinityVector) {
        this.add(affinityVector.magnitude, affinityVector.polarization);
    }

    getAffinityHTML() {
        return '<div class="affinity">' + this.type + ': ' + this.magnitude  + ', ' + this.polarization + '</div>';
    }
}
