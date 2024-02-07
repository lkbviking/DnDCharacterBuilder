import { ClassAffinityType, RoleAffinityType, SubRoleAffinityType, OtherAffinityType } from './question.js';
function Character() {

    let  affinityValues = {}

    Object.keys(ClassAffinityType).forEach((key) => {
        affinityValues[ClassAffinityType[key]] = 0;
    });

    Object.keys(RoleAffinityType).forEach((key) => {
        affinityValues[RoleAffinityType[key]] = 0;
    });

    Object.keys(SubRoleAffinityType).forEach((key) => {
        affinityValues[SubRoleAffinityType[key]] = 0;
    });

    Object.keys(OtherAffinityType).forEach((key) => {
        affinityValues[OtherAffinityType[key]] = 0;
    });

}


console.log(new Character());