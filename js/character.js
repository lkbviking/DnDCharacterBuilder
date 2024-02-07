import {ClassAffinityType} from './enums/ClassAffinityType.js';
import {RoleAffinityType} from './enums/RoleAffinityType.js';
import {SubRoleAffinityType} from './enums/SubRoleAffinityType.js';
import {OtherAffinityType} from './enums/OtherAffinityType.js';

export function Character() {

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