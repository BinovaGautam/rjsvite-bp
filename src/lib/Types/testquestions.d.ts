/**
 * @description defining the type for a mock test question collection
 * @interface ITestQuestion
 * @global instructions as text , textArray , or text + (image or Audio or Video)
 * Test has a Title and test Id  and can have test instructions as @global instruction
 * Test can Have multiple Parts 
 * Each Part has a Title and Part Id  and can have instructions as @global instruction  , and can have multiple Question sets
 * Each Question set has a Title  and id also can have instruction as @global instruction and Question Set Id and can have multiple Questions,
 * each question can have a Title and id and  have instruction as @global instruction ,
 * each question can have multipe answer sets with multiple questions based upon the instruction and can be answred as MCQ or True/False or Fill in the blanks or Match the following or Descriptive or Audio or Video or Image
 * MCQ can be Text or Image or Audio or Video and can be single select or multiple select
 * True/False can be Text or Image or Audio or Video
 * Fill in the blanks is of Single Text line at end or start of the question or can be at multiple places in a paragraph
 */

//global instructions as text , textArray , or text + (image or Audio or Video)

export type IMediaType = "image" | "audio" | "video";
type IQuestionType = "MCQ" | "True/False" | "Fill in the blanks" | "Match the following" | "Descriptive" | "Audio" | "Video" | "Image";

export enum EInstructionType {
    TEXT = "text",
    TEXT_ARRAY = "textArray",
    TEXT_MEDIA = "textMedia",
    TEXT_ARRAY_MEDIA = "textArrayMedia"
}

export interface IInstructionObj {
    title : string,
    instruction : Array<string | string[] | {text : string , media : string , type : IMediaType}>,
}

export interface IBaseTestEntity {
    title: string,
    id: string,
    instruction ?: IInstructionObj 

}

export interface IAnswerSet extends IBaseTestEntity {
    answerType: IQuestionType,
    answers: Array<string>,
    correctAnswers: Array<string>
}

export interface IQuestion extends IBaseTestEntity {
    questionType: IQuestionType,
    answerSets: Array<IAnswerSet>

}

export interface IQuestionSet extends IBaseTestEntity {
    questions: Array<IQuestion>

}

export interface ITestPart extends IBaseTestEntity {
    qsets: Array<IQuestionSet>

}

export interface ITest extends IBaseTestEntity {
    parts: Array<ITestPart>
}
