import { ITestType } from ".";

export interface ITestMeta {
    name: string;
    testId : string;
    testType : ITestType
    questionsCount?: number;
    status: 'none' | 'paused' | 'completed';
    pausedAt?: number
}

export interface ITestMetaItem {
    title: "Reading" | "Listening" | "Writing" | "Speaking",
    totalCount: number,
    completedCount: number,
    childTests ?: Array<ITestMeta>
}


export interface ITestSeriesMeta {
    totalTests: number,
    tests: Array<ITestMetaItem>
}

export interface ITestSeries {
    id: string,
    title: string,
    description: string,
    image?: string,
    meta?: ITestSeriesMeta,
    started: Date,
    validTill: Date,
    isActive?: boolean
}

