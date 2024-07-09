import { DEF_IMG } from "..";
import { IQuestionPart, IqnaStructure } from "../Types";

const practiceTaskPart : IQuestionPart = {
    partId: "1",
    questions: [
        {
            questionId: "1",
            questionNumber: 1,
            answer: {
                id: "1",
                value: "This is the answer",
                sectionId: "1",
            }
        }
    ]
}

const part1 : IQuestionPart = {
    partId: "2",
    title: "Listening Part 1: Listening to Problem Solving ",
    name : "Part 1",
    questions: [
        {
            questionId: "2",
            questionNumber: 1,
            answer: {
                id: "2",
                value: "This is the answer",
                sectionId: "1",
            },
        },
        {
            questionId: "3",
            questionNumber: 2,
            answer: {
                id: "3",
                value: "I didn't attend the concert.",
                sectionId: "1",
            },
        },
        {
            questionId: "4",
            questionNumber: 3,
            answer: {
                id: "4",
                value: "He is a temporary worker.",
                sectionId: "1",
            },
        }
    ]
}

const part2 : IQuestionPart = {
    partId: "3",
    title: "Listening Part 2: Listening to a Daily Life Conversation ",
    name: "Part 2",
    questions: [
        {
            questionId: "5",
            questionNumber: 1,
            answer: {
                id: "a",
                value: DEF_IMG,
                sectionId: "1",
                answerType: "image"
            },
        },
        {
            questionId: "6",
            questionNumber: 2,
            answer: {
                id: "a",
                value: "I didn't attend the concert.",
                sectionId: "1",
            },
        },
        {
            questionId: "7",
            questionNumber: 3,
            answer: {
                id: "b",
                value: "He is a temporary worker.",
                sectionId: "1",
            },
        }
    ]

}


const sampleAnswer : IqnaStructure = {
    id: "SAMPLE_LISTENING_TEST_1",
    title: "Practice Test B - Listening Answer Key",
    parts: [practiceTaskPart, part1, part2]
}


export default sampleAnswer;