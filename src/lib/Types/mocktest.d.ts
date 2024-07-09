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

import { IInstructionObj } from ".";

//global instructions as text , textArray , or text + (image or Audio or Video)

type IMockMediaType = "image" | "audio" | "video";
type IMockQuestionType = "MCQ" | "True/False" | "Fill in the blanks" | "Match the following" | "Descriptive" | "Audio" | "Video" | "Image";
type IEntityType = 'question' | 'questionSet' | 'testPart' | 'test' | 'preTest' ;



export enum EMockInstructionType {
    TEXT = "text",
    TEXT_ARRAY = "textArray",
    TEXT_MEDIA = "textMedia",
    TEXT_ARRAY_MEDIA = "textArrayMedia",
    ARRAY_TEXT_MEDIA = "arrayTextMedia",
    MEDIA = "media"
}

export enum EMockAnswerType {
    MCQ = "MCQ",
    TRUE_FALSE = "True/False",
    FILL_BLANK = "Fill in the blanks",
    MATCH_FOLLOWING = "Match The Following",
    DESCRIPTIVE = "Descriptive",
    SPEAKIN = "Speaking",
}

export type IMockAnswerTypeMap = {
    [EMockAnswerType.MCQ] : string,
    [EMockAnswerType.TRUE_FALSE] : boolean,
    [EMockAnswerType.FILL_BLANK] : string,
    [EMockAnswerType.MATCH_FOLLOWING] : string[],
    [EMockAnswerType.DESCRIPTIVE] : string,
    [EMockAnswerType.SPEAKIN] : string  //URL of the same
} 

export interface IMockMediaObj {
    type : IMockMediaType,
    media : string,
    autoPlay ?: boolean,
    hidden ?: boolean
}

export type IMockInstructionTypeMap = {
    [EMockInstructionType.TEXT]: string,
    [EMockInstructionType.TEXT_ARRAY]: string[],
    [EMockInstructionType.TEXT_MEDIA]: { text: string } & IMockMediaObj,
    [EMockInstructionType.TEXT_ARRAY_MEDIA]: { text: string[] } & IMockMediaObj
    [EMockInstructionType.ARRAY_TEXT_MEDIA]: Array<{ text: string } & IMockMediaObj>,
    [EMockInstructionType.MEDIA]: IMockMediaObj
}

export type IMockInstructionType = IMockInstructionTypeMap[keyof IMockInstructionTypeMap];

export interface IMockInstructionObj {
    text ?: string,
    title ?: string,
    headerTitle ?: string,
    instructionType ?: EMockInstructionType,
    instruction ?: IMockInstructionType | Array<IMockInstructionType> ,
    note ?: string,
    action ?: 'START' | 'END',
    next ?: IMockInstructionObj
}

export interface IMockBaseTestEntity {
    title: string,
    id: string,
    instruction?: IMockInstructionObj
    type : IEntityType
}



export interface IMockBEntity<T> {
    title ?: string,
    id: string,
    instruction?: IMockInstructionObj,
    type : T,
    children?: Array<IMockBEntity<T>>

}

export interface IMockTestPart extends IMockBEntity<'testPart'> {
    children: Array<IMockQuestionSet | IMockQuestion>

}


export interface IMockAnswerSet  {
    id : string,
    answerType: EMockAnswerType ,
    answers: Array<string>,
    correctAnswers: Array<string>
}

export interface IMockQuestion extends IMockBEntity<'question'> {
    questionType ?: EMockAnswerType,
    answerSet ?: IMockAnswerSet,
    question ?: IMockInstructionObj,
    timers ?: Array<IBaseTimer>,
}   

export interface IMockQuestionSet extends IMockBEntity<'questionSet'> {
    children: Array<IMockQuestion>

}



export interface IMockTest extends IMockBEntity<'test'> {
    children : Array<IMockTestPart | IMockQuestion | IMockQuestionSet>
}

export interface IPreTest extends IMockBEntity<'preTest'> {
    alert ?: string;
    testOptions : Array<{title : string , id : string, next ?: IInstructionObj }>
}