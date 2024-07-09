import { IBaseEntity } from ".";

export interface IAnswer {
    id: string;
    value: string;
    sectionId: string;
    answerType ?: string| image | audio | video
}
export interface IQuestionAnswer {
    questionNumber: number;
    questionId: string;
    answer: IAnswer;
    questionNumber ?: number;
}

export interface IQuestionPart {
    partId : string;
    title ?: string;
    name ?: string;
    groupId ?: string; //pages are grouped by group Id.
    pages ?: Array<Number> //All the pages in the group
    questions ?: Array<IQuestionAnswer>  //all questions Id in the group
}

export interface IqnaStructure extends IBaseEntity {
    parts: Array<IQuestionPart>
}