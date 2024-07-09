import { IMediaType } from "./testquestions";


export interface IMockMediaObj {
    type: IMockMediaType,
    media ?: string,
    autoPlay?: boolean,
    hidden?: boolean
}

export type IQuestionType  = 'REGULAR' | 'MCQ' | 'FILL_IN_BLANKS' | 'WRITING'

interface IBaseEntity {
    id : string ;
    title ?: string,
    instruction?: IInstructionStructure,
    groupId ?: string | number,
    note ?: string
}

interface IBaseTimer {
    title?: string;
    duration: number;
    type: 'preperation' | 'response' | 'break' | 'end' | 'countdown';
    autoStart?: boolean;
    moveNext ?: boolean
    instructionMedia?: Array<{ at: 'start' | 'end' | number } & IMockMediaObj>
}


export interface ISinglePart extends IBaseEntity {
    description ?: string;

}

export interface IInstructionMeta {
    questionMeta ?: {current: number, total: number}
}

export interface IBodyItem extends Omit<IMockMediaObj, 'type'>{
    type?: Add<IMediaType, 'text'>,
    isMedia ?: boolean,
    title ?: string,
    text ?: string,
    config ?: any,
}

export interface IQuestionBodyItem extends Omit<IBodyItem, 'type'>{
    template ?: string,
    questionType ?: IQuestionType,
    items ?: array<any> //Make it items of options (id , value , )
    isAnswerable ?: boolean,
    type ?: IQuestionType,
    htmlString ?: string,
    //FIXME: Add the options here
    options ?: any,
    choiceRequired ?: boolean,
    input ?: 'textArea' | 'text' | 'select' | 'radio' | 'checkbox' | 'file' | 'image' | 'audio' | 'video'
}

export interface IInstructionStructure {
    title ?: any
    body ?: Array<IBodyItem>
    answerBody ?: Array<IQuestionBodyItem>
    meta ?: IInstructionMeta,
}



type IBodyArray = Array<IBodyItem> | Array<IQuestionBodyItem>


export type ITestAction = 'start' | 'resume' | 'pause' | 'next' | 'back' |'submit' | 'reset'
export type ITestActions = Array<ITestAction> // Actions that can be performed on the test
export type IPageOrientation = 'row' | 'column' // Orientation of the page
export type ITestType = 'speaking' | 'listening' | 'writing' | 'reading'
export type IPageType =  'REGULAR' | 'COMPARE_AND_PERSUADE' 
export type IActionStatus = 'completed' | 'incomplete' | 'not-started' | 'in-progress' | 'skipped' | 'not-applicable' | 'not-allowed'

export enum EPageType {
    REGULAR = 'REGULAR',
    COMPARE_AND_PERSUADE = 'COMPARE AND PERSUADE'

}

export enum ETestType {
    SPEAKING = 'speaking',
    LISTENING = 'listening',
    WRITING = 'writing',
    READING = 'reading'

}
export interface IActionCondition {
    action: ITestAction;
    status: IActionStatus[];

}

//Structure of any particular page in the test , as the test is a combination of pages
export interface ITestPage extends IBaseEntity {
    next ?: string,//id of the next page as Reference
    prev ?: string,//id of the previous page as Reference
    preventAction ?: ITestActions,
    actionConditions?: Array<IActionCondition>,
    orientation ?: IPageOrientation,
    timers ?: Array<IBaseTimer >,
    pageType ?: IPageType,
    sections ?: Array<ICompareSection>,
    options ?: Array<ICompareOption>
}

export interface ITestGroup {
    groupId: string;
    title?: string;
    description?:string;
    pageIds?: string[];
}

export interface ITestGroupedPages {
    [key: string]: {
        grpupId: string;
        title: string;
        pages: ITestPage[];
    }
}


export interface ITestStructure extends Omit<IBaseEntity, 'groupId' > { // Test is combination of different pages
    testType?: ITestType,
    pages ?: Array<ITestPage>,
    groups ?: Array<ITestGroup>
}

export interface ITestStructureMeta extends Omit<ITestStructure, 'pages' | 'groups'> {}

// ======================================== Specific Types ========================================

export type ICompareOption = string | {
    image: string;
    description: string;
} 

export interface ICompareSection {
    title?: string;
    timers?: Array<IBaseTimer>;
    description ? : string;
    choices?: { selected: string, option: string },
    options?: Array<ICompareOptio | string >;
    option ?: ICompareOption;
    note ?: string;
}

export type IOptionType = 'text' | 'image' | 'audio' | 'video'

export interface IQnChoice {
    num : number,
    text : string, //text or url of the image
}

export interface IQnOptions{
    num : number,
    id : string,
    text ?: string,
    optionType?: IOptionType
    choices?: Array<IQnChoice>
}


// ======================================== Answer Types ========================================



export interface IAnswerStructure extends IBaseEntity { // Test is combination of different pages
    testType?: ITestType,
    answers: Array<IAnswer>
}