export class AffinityVector {
    constructor(type, magnitude, polarization) {
        if (magnitude === undefined) {
            magnitude = 0;
        }
        if (polarization === undefined) {
            polarization = 1;
        }
        this.type = type;
        this.magnitude = magnitude;
        this.polarization = polarization;

        
    }
    
    add(magnitude, polarization) {
        this.magnitude += magnitude;
        this.polarization += polarization;
    };

    getAffinityHTML() {
        return '<div class="affinity">' + this.type + ': ' + this.magnitude + '</div>';
    }
}
