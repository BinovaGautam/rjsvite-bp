
import { CHOICE_IMG1, CHOICE_IMG2, DEF_AUDIO, DEF_IMG, DEF_INTRO_VIDEO, OPTION_IMG, QUES2_AUDIO, QUES_AUDIO, SUBQ_AUDIO } from "..";
import { ICompareSection, IInstructionStructure, IMockInstructionObj, ITestPage, ITestStructure } from "../Types";
import { cnpInstructionHtml, readingTestParagraph1, readingTestStartInstructions, sampleFibString, } from "./htmlStrings";
import fibItems from './jsons/fillInBlankItems1.json'
import { paragonList } from './paragonList'

export const FIBBaseTemplate = `
                    <div style="display: inline;" >
                        <select style="display: inline; " id={{Id}} class="border px-4 bg-white font-bold " >
                            <option value={'blank'} ></option>
                            {{#each Choices}}
                                <option value={{Id}} >{{Text}}</option>
                            {{/each}}
                        </select>
                    </div> `



//========================================== Test Components =========================================

const TestInstruction: IInstructionStructure = {
    title: "Reading Test Instructions",
    body: readingTestStartInstructions as any,
}

const preperationInstruction: IInstructionStructure = {
    title: "You will hear the second section of the conversation shortly."
}

const videoInstruction: IInstructionStructure = {
    body: [
        {
            type: "video",
            isMedia: true,
            autoPlay: true,
            media: DEF_INTRO_VIDEO,
            hidden: true,
            text: "This is a video"
        }
    ],
}

const practiceTask: IInstructionStructure = {
    title: "Talk about one of your best friends.",
}

const readingTask2: IInstructionStructure = {

    body: [
        {
            title: "Read the following message.",
            type : "image",
            isMedia: true,
            media: DEF_IMG,
            config: {
                autoScroll: true
            }
        },
        

    ],
    answerBody: [
        {
            title: "Using the drop-down menu (  ), choose the best option according to the information given in the message.",
            type: "FILL_IN_BLANKS",
            isAnswerable: true,
            items: fibItems,
            template: ` {{#each this}}
                            <div >
                                {{Text}}
                                ${FIBBaseTemplate} 
                            </div>
                            <br>
                        {{/each}}`
        },
        {
            title: "Here is a response to the message. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-downmenu().",
            type: "FILL_IN_BLANKS",
            isAnswerable: true,
            htmlString: sampleFibString,
            items: paragonList, //sample list from paragon
            template: FIBBaseTemplate,

        }

    ]
}
const speakingTask2: IInstructionStructure = {

    body: [
        {
            title: "Read the following message.",
            config: {
                autoScroll: true
            }
        },

    ],
    answerBody: [
        {
            title: "Using the drop-down menu (  ), choose the best option according to the information given in the message.",
            type: "FILL_IN_BLANKS",
            isAnswerable: true,
            items: fibItems,
            template: ` {{#each this}}
                            <div >
                                {{Text}}
                                ${FIBBaseTemplate} 
                            </div>
                            <br>
                        {{/each}}`
        },
        {
            title: "Here is a response to the message. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-downmenu().",
            type: "FILL_IN_BLANKS",
            isAnswerable: true,
            htmlString: sampleFibString,
            items: paragonList, //sample list from paragon
            template: FIBBaseTemplate,

        }

    ]
}

const speakingTask3: IInstructionStructure = {
    title: "Talk about a time you helped someone. What did you do? Why did you help them? How did you feel after you helped them?",
    body: [
        {
            type: "image",
            isMedia: true,
            media: DEF_IMG,
        }
    ]
}

const cnpInstruction: IInstructionStructure = {
    title: "Instruction",
    body: [
        cnpInstructionHtml as any
    ]
}

const cnpSections: Array<ICompareSection> = [
    {
        title: "Your family is relocating to another area, and you are looking for a new home there. You found two suitable options. Using the pictures and information below, choose the option that you prefer. In the next section, you will need to persuade a family member that your choice is the better choice.",
        note: "If you do not choose an option, the computer will choose one for you. You do not need to speak for this part.",
        timers: [
            { duration: 5, type: 'preperation', title: "Preparation", autoStart: true }
        ],
        options: [
            {
                image: CHOICE_IMG1,
                description: "Option 1"
            },
            {
                image: CHOICE_IMG2,
                description: "Option 2"
            }
        ]
    },
    {
        title: "Your family is suggesting another house. Persuade your family member that what you chose is more suitable by comparing the two.",
        timers: [
            { duration: 5, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 30, type: 'response', title: "Recording" }
        ],
        choices: {
            selected: "Your Choice",
            option: "Your Family's Choice"
        },
        option: {
            image: OPTION_IMG,
            description: "Family's Choice"
        }

    }
]



//========================================== Test Structure ==========================================

const TestPages: Array<ITestPage> = [
    {
        id: "1",
        next: "2",
        instruction: TestInstruction,
        preventAction: ['back']
    },
    {
        id: "2",
        title: "Reading Instructional Video",
        instruction: videoInstruction,
        next: "3",
        prev: "1",
        preventAction: ['back']
    },
    {
        id : "3",
        title: "Reading Practice Task",
        instruction: readingTask2,
        timers: [
            { duration: 480, type: 'countdown', title: "Time Remaining", autoStart: true }
        ]
    },
    {
        id: "4",
        title: "Reading Task 2: Talking about a Personal Experience",
        instruction: speakingTask2,
        timers: [
            { duration: 480, type: 'countdown', title: "Time Remaining", autoStart: true }
        ]
    }

]


const TestStructure: ITestStructure = {
    id: "SAMPLE_READING_TEST_1",
    title: "Reading Test 1",
    pages: TestPages,
    testType: "reading"
}

export default TestStructure;




