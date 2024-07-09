
import { CHOICE_IMG1, CHOICE_IMG2, DEF_AUDIO, DEF_IMG, DEF_INTRO_VIDEO, OPTION_IMG, QUES2_AUDIO, QUES_AUDIO, SUBQ_AUDIO } from "..";
import { ICompareSection, IInstructionStructure, IMockInstructionObj, ITestPage, ITestStructure } from "../Types";
import { IMediaType } from "../Types/testquestions";
import { cnpInstructionHtml, readingTestParagraph1, readingTestStartInstructions, sampleFibString,  } from "./htmlStrings";
import fibItems from './jsons/fillInBlankItems1.json'
import {paragonList} from './paragonList'

const FIBBaseTemplate = `
                    <div style="display: inline;" >
                        <select style="display: inline; " class="border px-4 bg-white font-bold " >
                            <option value={'blank'} ></option>
                            {{#each Choices}}
                                <option value={{Id}} >{{Text}}</option>
                            {{/each}}
                        </select>
                    </div> `
//========================================== Test Components =========================================

const TestInstruction: IInstructionStructure = {
    title: "Writing Test Instructions",
    body: readingTestStartInstructions as any,
}

const preperationInstruction : IInstructionStructure = {
    title: "You will hear the second section of the conversation shortly."
}

const videoInstruction : IInstructionStructure = {
    body : [
        {
            type: "video" as 'text' & IMediaType ,
            isMedia : true,
            autoPlay: true,
            media: DEF_INTRO_VIDEO,
            hidden: true,
            text: "This is a video"
        }
    ],
}

const practiceTask : IInstructionStructure = {
    title: "Talk about one of your best friends.",
}

const writingTask1 : IInstructionStructure = {
    body : [
        { 
            title: "Read the following message.",
         },
        // "You recently made reservations for dinner at a very famous and expensive restaurant in town. However, the meal and the service were terrible. The restaurant manager was not available to solve the problem, so you left without a resolution."
       
    ],
    answerBody : [
        {   
            title: "Write an email to the restaurant's manager in about 150-200 words. Your email should do the following things:",
            type: "WRITING",
            htmlString: cnpInstructionHtml,
            isAnswerable: true,
            // input : "textArea"
        }
    ]
}

const writingTask2 : IInstructionStructure = {
    body: [
        {
            title: "Read the following message.",
        },
        // "You recently made reservations for dinner at a very famous and expensive restaurant in town. However, the meal and the service were terrible. The restaurant manager was not available to solve the problem, so you left without a resolution."

    ],
    answerBody: [
        {
            title: "Write an email to the restaurant's manager in about 150-200 words. Your email should do the following things:",
            type: "WRITING",
            options : [
                {
                    id : "1",
                    title : "Option 1",
                    text: "Shopping Complex: This shopping mall would include restaurants, a large supermarket, and a movie theatre.",
                },
                {
                    id : "2",
                    title : "Option 2",
                    text: "Sports Complex: This sports complex would include a gym, a swimming pool, and tennis courts."
                }
            ],
            choiceRequired: true,
            isAnswerable: true,
            input: "textArea"
        }
    ]
}



//========================================== Test Structure ==========================================

const TestPages : Array<ITestPage > = [
    {
        id : "1",
        next : "2",
        instruction: TestInstruction,
        preventAction : ['back']
    },
    {
        id : "2",
        title: "Writing Instructional Video",
        instruction: videoInstruction,
        next : "3",
        prev : "1",
        preventAction : ['back']
    },
    {
        id : "3",
        title: "Writing Task 1: Writing an Email",
        instruction: writingTask1,
        timers: [
            { duration: 480, type: 'countdown', title: "Time Remaining", autoStart: true }
        ]
    },
    {
        id: "4",
        title: "Writing Task 2: Responding to Survey Questions",
        instruction: writingTask2,
        timers: [
            { duration: 1500, type: 'countdown', title: "Time Remaining", autoStart: true }
        ]
    }
    
]


const TestStructure : ITestStructure = {
    id : "0",
    title : "Writing Test 1",
    pages : TestPages,
    testType : "writing"
}

export default TestStructure;




