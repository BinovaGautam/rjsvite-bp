import { DEF_AUDIO, DEF_IMG, DEF_INTRO_VIDEO } from "..";
import { IMockQuestionSet, IMockTest, IMockTestPart } from "@/lib/Types";

// const mockSet1 : IMockQuestionSet = {
//     title : "Question Set 1",
//     id : "qs1",
//     type : "questionSet",
//     instruction : {
//         title: "Listening to Problem Solving",
//         instruction : {
//             type : 'audio',
//             autoPlay : true,
//             media : DEF_AUDIO,
//             hidden : true,
//             text: [
//                 'You will hear a conversation in 3 sections. You will hear each section only once.',
//                 'After each section, you will hear 2 or 3 questions. You will hear the questions only once.',
//                 'Choose the best answer to each question.'
//             ]

//         },
//         next : {
//             title : 'Instructions',
//             instruction : {
//                 media : DEF_IMG,
//                 type : 'image',
//                 text: 'You will hear a conversation between a woman and a man. The man is a bus driver and the woman is a passenger trying to get somewhere.',
//             }
//         }
//     },
//     children : [
//         {
//             title : "Question 1",
//             type : "question",
//             id : "q1",
//             questionType : "MCQ",
//             question : {
//                 title: `<h2><strong>Listen to a short statement. You will hear it only&nbsp;<span style="color:#3498db"><span style="font-family:Comic Sans MS,cursive">once</span></span>.</strong></h2>`,
//                 instruction : {
//                     text : 'What is the main idea of the statement?',
//                     type : 'audio',
//                     autoPlay : true,
//                     media : DEF_AUDIO
//                 }
//             },
//             answerSet : {
                   
//                     id : "as1",
//                     answerType : "MCQ",
//                     answers : [
//                         "I want to see the concert again",
//                         "I didn't enjoy the concert",
//                         "I didn't see the concert",
//                         "I want to see the concert"
//                     ],
//                     correctAnswers : ["A"]
//                 }
//         },
//         {
//             title : "Question 2",
//             type : "question",
//             id : "q2",
//             questionType : "MCQ",
//             question : {
//                 title: `<h2><strong>Listen to a short statement. You will hear it only&nbsp;<span style="color:#3498db"><span style="font-family:Comic Sans MS,cursive">once</span></span>.</strong></h2>`,
//                 instruction : imgTextQuestion
//             },
//             answerSet : {
                   
//                     id : "as1",
//                     answerType : "MCQ",
//                     answers : [
//                         "I want to see the concert again",
//                         "I didn't enjoy the concert",
//                         "I didn't see the concert",
//                         "I want to see the concert"
//                     ],
//                     correctAnswers : ["A"]
//                 }
//         },
//         {
//             title : "Question 3",
//             type : "question",
//             id : "q3",
//             questionType : "MCQ",
//             question: {
//                 title: `<h2><strong>Listen to a short statement. You will hear it only&nbsp;<span style="color:#3498db"><span style="font-family:Comic Sans MS,cursive">once</span></span>.</strong></h2>`,
//                 instruction: imgTextQuestion
//             },
//             answerSet : {
                   
//                     id : "as1",
//                     answerType : "MCQ",
//                     answers : ["A", "B", "C", "D"],
//                     correctAnswers : ["A"]
//                 }
//         }
//     ]

// }

// const mockSet2 : IMockQuestionSet = {
//     title : "Question Set 2",
//     id : "qs2",
//     type : "questionSet",
//     children : [
//         {
//             title : "Question 1",
//             type : "question",
//             id : "q1",
//             questionType : "MCQ",
//             answerSet : {
                    
//                     id : "as1",
//                     answerType : "MCQ",
//                     answers : ["A", "B", "C", "D"],
//                     correctAnswers : ["A"]
//                 }
//         },
//         {
//             title : "Question 2",
//             type : "question",
//             id : "q2",
//             questionType : "MCQ",
//             answerSet :{
                    
//                     id : "as1",
//                     answerType : "MCQ",
//                     answers : ["A", "B", "C", "D"],
//                     correctAnswers : ["A"]
//                 }
//         },
//         {
//             title : "Question 3",
//             type : "question",
//             id : "q3",
//             questionType : "MCQ",
//             answerSet: {
                    
//                     id : "as1",
//                     answerType : "MCQ",
//                     answers : ["A", "B", "C", "D"],
//                     correctAnswers : ["A"]
//                 }
//         }
//     ]
// }

//  const mockTestParts : Array<IMockTestPart> = [
//    {
//          title : "Part 1",
//          type : "testPart",
//          id : "p1",
//          instruction : {
//                 title : "Part 1 Instructions",
//                 instruction : [
//                     "Read the instructions carefully",
//                     "Do not use any unfair means",
//                     "Do not use any unfair means"
//                 ]
//          },
//          children : [mockSet1, mockSet2]
//     },
//     {
//          title : "Part 2",
//          type : "testPart",
//          id : "p2",
//          children : [mockSet1, mockSet2]
//     },
//     {
//          title : "Part 3",
//          type : "testPart",
//          id : "p3",
//          children : [mockSet1, mockSet2]
//    }
//  ]

// const mockTest : IMockTest = {
//     title : "Mock Test One",
//     type : "test",
//     id : "mt1",
//     instruction : {
//         title : "Test Instructions",
//         instruction : [
//             "You should give yourself 2 hours and 39 minutes to complete CELPIP-General Practice Test A. Press Start and select Complete Test from the drop-down menu to do the whole test, or click on one of the individual tests underneath it to try one component.",
//             "Once you have completed the test, you can consult the Performance Standards for Writing and Performance Standards for Speaking to understand how your responses would be evaluated by CELPIP Raters. Please be sure to save your Writing responses and record your Speaking responses so you can review them later using the Performance Standards.",
//             "You will need a headset or speakers for the Listening and Speaking components of the test. The practice test will not record your Speaking responses. If you wish to record your Speaking responses, we advise you to set up your recording device (cellphone, digital recorder, etc.) prior to starting the speaking section. For optimal performance, your computer should have a minimum resolution of 1024 x 768. Paper and pencils will be provided at the offical test for note-taking, so before you begin this sample test make sure that you have paper and a pen or pencil, since you may want to take notes."
//         ],
//         action : "START",
//         note: `<p>
//                 In response to ongoing research and development, changes may occasionally be made to the CELPIP Test. There may be short periods of time when study materials do not exactly match the current official test format, and content may be updated to match changes to the CELPIP Test without prior notice. Check the CELPIP website for any updates to the CELPIP Test: <a href="https://www.celpip.ca" target="_blank">https://www.celpip.ca</a>.
//               </p>`,
//         next : {
//             title : 'Overview Instructional Video',
//             instruction :{
//                 text : "Watch the video to get an overview of the test",
//                 media : DEF_INTRO_VIDEO,
//                 type : "video",
//                 autoPlay : true
//             }
//         }
//     },
//     children : mockTestParts
// }

const mockTest = {} as IMockTest;

export default mockTest;