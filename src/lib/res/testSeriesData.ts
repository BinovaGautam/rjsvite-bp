import { ITestMeta, ITestSeries } from "../Types";

export const testSeries: ITestSeries[] = [
    {
        id: '1',
        title: 'Test Series 1',
        description: 'This is a test series',
        image: 'https://via.placeholder.com/150',
        started: new Date(),
        validTill: new Date(),
        isActive: true,
        meta: {
            totalTests: 5,
            tests: [
                {
                    title: 'Reading',
                    totalCount: 5,
                    completedCount: 3
                },
                {
                    title: 'Listening',
                    totalCount: 5,
                    completedCount: 0
                },
                {
                    title: 'Writing',
                    totalCount: 5,
                    completedCount: 1
                },
                {
                    title: 'Speaking',
                    totalCount: 5,
                    completedCount: 2
                }
            ]
        }
    },
    {
        id: '2',
        title: 'Test Series 2',
        description: 'This is a test series',
        image: 'https://via.placeholder.com/150',
        started: new Date(),
        validTill: new Date(),
        isActive: true,
        meta: {
            totalTests: 5,
            tests: [
                {
                    title: 'Reading',
                    totalCount: 5,
                    completedCount: 3
                },
                {
                    title: 'Listening',
                    totalCount: 5,
                    completedCount: 0
                },
                {
                    title: 'Writing',
                    totalCount: 5,
                    completedCount: 1
                },
                {
                    title: 'Speaking',
                    totalCount: 5,
                    completedCount: 2
                }
            ]
        }
    },
    {
        id: '3',
        title: 'Test Series 3',
        description: 'This is a test series',
        image: 'https://via.placeholder.com/150',
        started: new Date(),
        validTill: new Date(),
        isActive: false,
        meta: {
            totalTests: 5,
            tests: [
                {
                    title: 'Reading',
                    totalCount: 5,
                    completedCount: 3
                },
                {
                    title: 'Listening',
                    totalCount: 5,
                    completedCount: 0
                },
                {
                    title: 'Writing',
                    totalCount: 5,
                    completedCount: 1
                },
                {
                    title: 'Speaking',
                    totalCount: 5,
                    completedCount: 2
                }
            ]
        }
    }
]


export const sampleTestsMeta1 : ITestMeta[] = [
    {
        testId: "SAMPLE_READING_TEST_1",
        name : "Reading Practice Test A",
        testType : "reading",
        questionsCount : 15,
        status : 'completed',
    },
    {
        testId: "SAMPLE_READING_TEST_1",
        name : "Reading Mock Test 1",
        testType : "reading",
        questionsCount : 10,
        status : 'paused',
        pausedAt : 4
    },
    {
        testId: "SAMPLE_SPEAKING_TEST_1",
        name : "Speaking Practice Test A",
        testType : "speaking",
        questionsCount : 5,
        status : 'none'
    },
    {
        testId: "SAMPLE_SPEAKING_TEST_1",
        name : "Speading Mock Test 1",
        testType : "speaking",
        questionsCount : 8,
        status : "completed"
    },
    {
        testId: "SAMPLE_WRITING_TEST_1",
        name : "Writing Practice Test A",
        testType : "writing",
        questionsCount : 5,
        status : "paused",
        pausedAt : 2,
    },
    {
        testId: "SAMPLE_WRITING_TEST_1",
        name : "Writing Mock Test 1",
        testType : "writing",
        status : "none",
    },
    {
        testId: "SAMPLE_LISTENING_TEST_1",
        name : "Listening Practice Test A",
        testType : "listening",
        status : "none",
    },
    {
        testId: "SAMPLE_LISTENING_TEST_2",
        name : "Listening Mock Test 1",
        testType :"listening",
        status : "completed"
    }
]