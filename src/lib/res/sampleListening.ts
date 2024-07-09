import { AudioFiles, DEF_AUDIO, DEF_IMG, DEF_INTRO_VIDEO, QUES2_AUDIO, QUES_AUDIO, SUBQ_AUDIO, VideoFiles } from "..";
import { IInstructionStructure, IMockInstructionObj, ITestPage, ITestStructure } from "../Types";
import { blockNoteHtml, listeningTestInstruction, listeningToNewsItems, testStartInstruction } from "./htmlStrings";
import fibItems from './jsons/fillInBlankItems1.json'

//========================================== Test Components =========================================

const TestInstruction: IInstructionStructure = {
    title: "Listening Test Instructions",
    body:  blockNoteHtml as any,
}

const preperationInstruction: IInstructionStructure = {
    title: "You will hear the second section of the conversation shortly.",
  
}

const videoInstruction: IInstructionStructure = {
    body: [
        {
            type: "video" as any,
            isMedia: true,
            autoPlay: true,
            media: VideoFiles.listeningInstruction,
            hidden: true,
            text: "This is a video"
        }
    ],
}

const practiceTask: IInstructionStructure = {

    body: [
        {
            title: "<p>Listen to a short statement. hello You will hear it only <b>once</b>.</p>",
        },
        {   
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: DEF_AUDIO,
        }
    ],
    answerBody: [
        {
            title: "Choose the sentence that is closest in meaning to the statement",
            type: "MCQ",
            options: [
                "I want to see the concert again",
                "I didn't enjoy the concert",
                "I didn't see the concert",
                "I want to see the concert"
            ],

        }
    ]
}

const part1Instruction: IInstructionStructure = {
    title: "Listening to Problem Solving",
    body: [
        {
            type: "audio" as any,
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Instruction,
            hidden: true,
        }
    ]
}

const part1Instruction2: IInstructionStructure = {
    title: "instruction",
    body: [
        {
            type: "image",
            isMedia: true,
            autoPlay: true,
            media: DEF_IMG,
        }
    ]
}

const part1Instruction3: IInstructionStructure = {
    body: [ {
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1C1,
        }
    ]
}

const part1Question1: IInstructionStructure = {
    body: [
       
        {   
            title: `Listen to the question. You will hear it only <strong> once <strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q1,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            options: [
                "exiting" , "boring" , "difficult" , "enjoyable"
            ],

        }
    ],
    meta : {
        questionMeta : {
            current: 1,
            total: 8
        }
    
    }
}

const part1Question2: IInstructionStructure = {
    body: [

        {
            title: `Listen to the question. You will hear it only <strong> once <strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q2,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            config: {
                isMedia: true,
                type: "image"
            },
            options: [
                DEF_IMG, DEF_IMG, DEF_IMG, DEF_IMG
            ],

        }
    ],
    meta : {
        questionMeta : {
            current: 2,
            total: 8
        }
    }
}
//========================================== Part 2 ==========================================
const part2Instruction: IInstructionStructure = {
    title: "Listening to a News Item",
    body: [
        {
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: DEF_AUDIO,
            hidden: true,
        }
    ]
}

const part2Instruction2: IInstructionStructure = {
    title: "instruction",
    body: [  {
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: DEF_AUDIO,
        }
    ]
}

const part2QuestionBody: IInstructionStructure = {
    title: "Listen the following news item.You will hear the news item only once. It is about 1.5 minutes long.",
    body: [
        {
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: QUES2_AUDIO,
        }
    ],
}

const part2QuestionAnswerBody: IInstructionStructure = {
    title: "Choose the best way to complete each statement from the drop-down menu (^).",
    answerBody: [
        {
            type: "FILL_IN_BLANKS",
            isAnswerable: true,
            items: fibItems,
            template: ` {{#each this}}
                            <div >
                                {{Text}}
                                <div style="display: inline;" >
                                    <select style="display: inline; " id={{Id}} class="border px-2 bg-white font-bold " >
                                        <option value={'blank'} ></option>
                                        {{#each Choices}}
                                            <option value={{Id}} >{{Text}}</option>
                                        {{/each}}
                                    </select>
                                </div>
                            </div>
                            <br>
                        {{/each}}`
        }
    ],
}

//========================================== Convers ==========================================
const part1Conv2: IInstructionStructure = {
    title: `Listen to the question. You will hear it only <strong> once </strong>. it is about 1 to 1.5 minutes long.`,
    body: [
        {
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1C2,
        }
    ],
}

const part1Question3 : IInstructionStructure = {
    body: [
        {
            title: `Listen to the question. You will hear it only <strong> once <strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q3,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            options: [
                "He is a new full-time employee.",
                "He is a temporary worker.",
                "He is a Human Resources officer.",
                "He is the woman's colleague."
            ],

        }
    ],
    meta : {
        questionMeta : {
            current: 3,
            total: 8
        }
    }

}

const part1Question4 : IInstructionStructure = {
    body: [
        {
            title: `Listen to the question. You will hear it only <strong> once </strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q4,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            options: [
                "ask about job openings",
                "have his lunch in the break room",
                "report his progress to the woman",
                "keep working at his task"
            ]
        }
    ],
    meta : {
        questionMeta : {
            current: 4,
            total: 8
        }
    }
}

const part1Question5 : IInstructionStructure = {
    body: [
        {
            title: `Listen to the question. You will hear it only <strong> once </strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q5,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            options: [
                "Temporary work can be a stepping stone.",
                "It is better to work without breaks..",
                "Temporary work is better than full-time work.",
                "The woman works at the Human Resources department."
            ]
        }
    ],
    meta : {
        questionMeta : {
            current: 5,
            total: 8
        }
    }
}

//======== Short Break ========
const part1Conv3 : IInstructionStructure = {
    ...part1Conv2,
    body : [
        {
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1C3,
        }
    ]
}

const part1Question6 : IInstructionStructure = {
    body: [
        {
            title: `Listen to the question. You will hear it only <strong> once </strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q6,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            options: [
                "anxiety", "confusion", "disappointment", "relief"
            ]
        }
    ],
    meta : {
        questionMeta : {
            current: 6,
            total: 8
        }
    }
}

const part1Question7 : IInstructionStructure = {
    body: [
        {
            title: `Listen to the question. You will hear it only <strong> once </strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q7,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            options: [
                "There are others working near Matthew.",
                "Matthew is unlikely to finish his task.",
                "Matthew will not listen to music.",
                "Human Resources is closed today.",
            ]
        }
    ],
    meta : {
        questionMeta : {
            current: 7,
            total: 8
        }
    }
}

const part1Question8 : IInstructionStructure = {
    body: [
        {
            title: `Listen to the question. You will hear it only <strong> once </strong>.`,
            type: "audio",
            isMedia: true,
            autoPlay: true,
            media: AudioFiles.l1Q8,
        }
    ],
    answerBody: [
        {
            title: "Choose the best answer to each question.",
            type: "MCQ",
            options: [
               "She wants to tell him he may use her as a reference.",
               "She wants to confirm that he’ll return the next day.",
               "She would like to pay him for his work.",
               "She would like to get her radio back."
            ]
        }
    ],
    meta : {
        questionMeta : {
            current: 8,
            total: 8
        }
    }
}


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
        title: "Listening Instructional Video",
        instruction: videoInstruction,
        next: "3",
        prev: "1"
    },
    {
        id: "3",
        title: "Listening Practice Task",
        instruction: practiceTask,
        prev: "2"
    },
    {
        id: "4",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Instruction
    },
    {
        id: "5",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Instruction2
    },
    {
        id: "6",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Instruction3
    },
    {
        id: "7",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Question1,
        timers: [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]
    },
    {
        id: "8",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving : with action",
        instruction: part1Question2,
        actionConditions: [
            { action: 'next', status: ['completed'] }
        ],
        timers: [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]
    },
    {
        id: "9",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: preperationInstruction,
        timers: [
            { duration: 10, type: 'preperation', title: "Preperation Time", autoStart: true , moveNext: true},
        ]
    },
    {
        id: "10",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Conv2,

    },
    {
        id: "11",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Question3,
        timers : [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]

    },
    {
        id: "12",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Question4,
        timers : [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]

    },
    {
        id: "13",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Question5,
        timers : [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]

    },
    {
        id: "14",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Conv3,

    },
    {
        id: "15",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Question6,
        timers: [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]

    },
    {
        id: "16",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Question7,
        timers: [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]

    },
    {
        id: "16",
        groupId: "1",
        title: "Listening Part 1: Listening to Problem Solving",
        instruction: part1Question8,
        timers: [
            { duration: 30, type: 'countdown', title: "Time Left", autoStart: true },
        ]

    },
    {
        id: "17",
        groupId: "2",
        title: "Listening Part 2: Listening to a News Item",
        instruction: part2Instruction
    },
    {
        id: "18",
        groupId: "2",
        title: "Listening Part 2: Listening to a News Item",
        instruction: part2Instruction2
    },
    {
        id: "13",
        groupId: "2",
        title: "Listening Part 2 : Listening to a News Item",
        instruction: part2QuestionBody
    },
    {
        id: "14",
        groupId: "2",
        title: "Listening Part 2 : Listening to a News Item",
        instruction: part2QuestionAnswerBody
    }
]


const sampleListening: ITestStructure = {
    id: "SAMPLE_LISTENING_TEST_1",
    title: "Listening Test 1",
    pages: TestPages,
    testType : "listening"
}

export default sampleListening;



/**
 * @params options {Object} - {}
 * @returns Array of ITestPage
 */


interface IGenerateParts {

}


export const generateParts = ({

}) => {
  // return json and save it in a file
  const sampleJson = {
    id: "SAMPLE_LISTENING_TEST_1",
    title: "Listening Test 1",
    pages: TestPages,
    testType : "listening"
  } 
  return sampleJson;
  
}