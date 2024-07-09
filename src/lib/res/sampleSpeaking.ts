import { CHOICE_IMG1, CHOICE_IMG2, DEF_AUDIO, DEF_IMG, DEF_INTRO_VIDEO, ImgFiles, OPTION_IMG, QUES2_AUDIO, QUES_AUDIO, SUBQ_AUDIO, VideoFiles } from "..";
import { ICompareSection, IInstructionStructure, IMockInstructionObj, ITestPage, ITestStructure } from "../Types";
import { cnpDescription1, cnpDescription2, cnpDescription3, cnpInstructionHtml, listeningTestInstruction, listeningToNewsItems, spts6string, testStartInstruction } from "./htmlStrings";
import fibItems from './jsons/fillInBlankItems1.json'

//========================================== Test Components =========================================

const TestInstruction: IInstructionStructure = {
    title: "Speaking Test Instructions",
    body: testStartInstruction as any,
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
            media: VideoFiles.speakingInstruction,
            hidden: true,
            text: "This is a video"
        }
    ],
}

const practiceTask: IInstructionStructure = {
    title: "Talk about one of your best friends.",
}

const speakingTask1: IInstructionStructure = {
    title: "A friend is looking for a summer job. Advise him about different ways he can find work for the summer."
}

const speakingTask2: IInstructionStructure = {
    title: "Talk about a great time you had with a family member or friend. Maybe you can talk about a party, something you did together at school, a time you travelled with a friend, or anything else you can remember. What happened and why was it memorable?"
}

const speakingTask3: IInstructionStructure = {
    title: "Describe some things that are happening in the picture below as well as you can. The person with whom you are speaking cannot see the picture.",
    body: [
        {
            type: "image",
            isMedia: true,
            media: ImgFiles.SP_DESC_SCENE,
        }
    ]
}

const speakingTask4: IInstructionStructure = {
    title: "In this picture, what do you think will most probably happen next?",
    body: [
        {
            type: "image",
            isMedia: true,
            media: ImgFiles.SP_DESC_SCENE,
        },
        {
            type: "image",
            isMedia: true,
            media: ImgFiles.SP_DESC_SCENE,
        },
    ]
}

const speakingTask6: IInstructionStructure = {
    title: "A close cousin who lives in another country is coming to visit for a year. She tells you that she would like to stay at your place to explore your country’s culture and to spend some time with you. Your roommate does not agree, and says you will have to move out if she comes.",
    body: [
        spts6string as any
    ]
}
const speakingTask7: IInstructionStructure = {
    title: "Answer the following question.",
    body: [
          ]
}

const speakingTask8: IInstructionStructure = {
    title: "You are in a furniture store and you see a table you would like to buy, but the store clerk won’t let you take a photo. Phone a member of your family. Provide a full and clear description of the table and ask if you can buy the table.",
    body: [
        {
            type: "image",
            isMedia: true,
            media: ImgFiles.SP_DESC_SITUATION,
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
            { duration: 60, type: 'preperation', title: "Preparation", autoStart: true }
        ],
        options: [
            {
                image: CHOICE_IMG1,
                description: cnpDescription1
            },
            {
                image: CHOICE_IMG2,
                description: cnpDescription2
            }
        ]
    },
    {
        title: "Your family is suggesting another house. Persuade your family member that what you chose is more suitable by comparing the two.",
        timers: [
            { duration: 60, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 60, type: 'response', title: "Recording" }
        ],
        choices: {
            selected: "Your Choice",
            option: "Your Family's Choice"
        },
        option: {
            image: OPTION_IMG,
            description: cnpDescription3
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
        title: "Speaking Instructional Video",
        instruction: videoInstruction,
        next: "3",
        prev: "1",
        preventAction: ['back']
    },
    {
        id: "3",
        title: "Speaking Practice Task",
        instruction: practiceTask,
        timers: [
            { duration: 30, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 60, type: 'response', title: "Recording" }
        ]
    },
    {
        id: "4",
        title: "Speaking Task 1: Giving Advice",
        instruction: speakingTask1,
        timers: [
            { duration: 30, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 90, type: 'response', title: "Recording" }
        ]
    },
    {
        id: "5",
        title: "Speaking Task 2: Talking about a Personal Experience",
        instruction: speakingTask2,
        timers: [
            { duration: 30, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 60, type: 'response', title: "Recording" }
        ]
    },
    {
        id: "6",
        title: "Speaking Task 3: Describing a Scene",
        instruction: speakingTask3,
        timers: [
            { duration: 30, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 60, type: 'response', title: "Recording" }
        ]
    },
    {
        id: "7",
        title: "Speaking Task 4: Making Predictions",
        instruction: speakingTask4,
        timers: [
            { duration: 30, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 60, type: 'response', title: "Recording" }
        ]
    },
    {
        id: "8",
        title: "Speaking Task 5: Comparing and Persuading",
        instruction: cnpInstruction,
    },
    {
        id: "9",
        title: "Speaking Task 5: Comparing and Persuading",
        pageType: "COMPARE_AND_PERSUADE",
        sections: cnpSections,
    },
    {
        id: "10",
        title: "Speaking Task 6: Dealing with a Difficult Situation",
        instruction: speakingTask6,
        timers: [
            { duration: 60, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 60, type: 'response', title: "Recording" }
        ]
    },
    {
        id : "11",
        title: "Speaking Task 7: Giving Advice",
        instruction: speakingTask7,
        timers: [
            { duration: 30, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 90, type: 'response', title: "Recording" }
        ]
    },
    {
        id : "12",
        title: "Speaking Task 8: Describing an Unusual Situation",
        instruction: speakingTask8,
        timers: [
            { duration: 30, type: 'preperation', title: "Preparation", autoStart: true },
            { duration: 60, type: 'response', title: "Recording" }
        ]
    },
    {
        id: "13",
        title: "End of the Speaking Test",
        preventAction: ['next'],
    }

]


const TestStructure: ITestStructure = {
    id: "SAMPLE_SPEAKING_TEST_1",
    title: "Speaking Test 1",
    pages: TestPages,
    note: "*NOTE: This sample test is not recording your response.",
    testType: "speaking"
}

export default TestStructure;




