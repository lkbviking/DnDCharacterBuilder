import { Question } from './question.js';
import { QuestionType } from './enums/QuestionType.js';
import {ClassAffinityType} from './enums/ClassAffinityType.js';
import {RoleAffinityType} from './enums/RoleAffinityType.js';
import {SubRoleAffinityType} from './enums/SubRoleAffinityType.js';
import {OtherAffinityType} from './enums/OtherAffinityType.js';
export let questionList = [];

questionList.push(
    new Question(
        QuestionType.TRUE_FALSE,
        'Did this work?',
        null,
        [ClassAffinityType.ARTIFICER, ClassAffinityType.BARD]
    ));