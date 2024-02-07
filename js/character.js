import ClassAffinityType from './enums/ClassAffinityType';
import RoleAffinityType from './enums/RoleAffinityType';
import SubRoleAffinityType from './enums/SubRoleAffinityType';
import OtherAffinityType from './enums/OtherAffinityType';

function Character() {

    this.affinityValues = {}

    Object.keys(ClassAffinityType).forEach((key) => {
        this.affinityValues[ClassAffinityType[key]] = 0;
    });

    Object.keys(RoleAffinityType).forEach((key) => {
        this.affinityValues[RoleAffinityType[key]] = 0;
    });

    Object.keys(SubRoleAffinityType).forEach((key) => {
        this.affinityValues[SubRoleAffinityType[key]] = 0;
    });

    Object.keys(OtherAffinityType).forEach((key) => {
        this.affinityValues[OtherAffinityType[key]] = 0;
    });

}


console.log(new Character().affinityValues); // {artificer: 0, barbarian: 0, bard: 0, bloodHunter: 0, cleric: 0, druid: 0, fighter: 0, monk: 0, paladin: 0, ranger: 0, rogue: 0, sorcerer: 0, warlock: 0, wizard: 0, tank: 0, melee: 0, ranged: 0, caster: 0, support: 0, subtank: 0, submelee: 0, subranged: 0, subcaster: 0, subsupport: 0, singleClass: 0}