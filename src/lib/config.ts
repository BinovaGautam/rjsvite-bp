

export const BASE_CONTENT_URL = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/"
export const BASE_AUDIO_URL = BASE_CONTENT_URL + "audio/"
export const BASE_VIDEO_URL = BASE_CONTENT_URL + "video/"

export const DEF_AUDIO = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L_Practice_01.ogg"
export const QUES_AUDIO ="https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L1_C1.ogg"
export const SUBQ_AUDIO = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L1_Q1.ogg"

export const QUES2_AUDIO = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L4_C.ogg"


export const START_SPEAKING_AUDIO = "https://firebasestorage.googleapis.com/v0/b/ccs-panel.appspot.com/o/mocktest%2Fofficial_resources%2FElevenLabs_2024-04-23T21_46_10_Ella%20-%20soft%20and%20sweet_gen_s50_sb75_se0_b_m2.mp3?alt=media&token=116e23d0-013d-48e2-8e75-ba4de61a20fc"
export const END_SPEAKING_AUDIO = "https://firebasestorage.googleapis.com/v0/b/ccs-panel.appspot.com/o/mocktest%2Fofficial_resources%2FElevenLabs_2024-04-23T21_46_50_Ella%20-%20soft%20and%20sweet_gen_s50_sb75_se0_b_m2.mp3?alt=media&token=cbd82096-8344-438c-9967-5bf7ab876b4d"

export const DEF_INTRO_VIDEO = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Overview.mp4"
export const DEF_IMG = "https://www.usnews.com/dims4/USNEWS/1f11efe/2147483647/crop/2000x1313+0+0/resize/640x420/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fd0%2F30%2F0ad9cfae4715bad5c81f96c93112%2F190219-busdriver-stock.jpg"

export const OPTION_IMG = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
export const CHOICE_IMG1 = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
export const CHOICE_IMG2 = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


export const AudioFiles = {
    l1Instruction: BASE_AUDIO_URL +  "B-L1_Instructions.mp3",
    l1C1: BASE_AUDIO_URL +  "L1_C1.mp3",
    l1C2: BASE_AUDIO_URL +  "L1_C2.mp3",
    l1C3: BASE_AUDIO_URL +  "L1_C3.mp3",

    l1Q1: BASE_AUDIO_URL +  "L1_Q1.mp3",
    l1Q2: BASE_AUDIO_URL +  "L1_Q2.mp3",
    l1Q3: BASE_AUDIO_URL +  "L1_Q3.mp3",
    l1Q4: BASE_AUDIO_URL +  "L1_Q4.mp3",
    l1Q5: BASE_AUDIO_URL +  "L1_Q5.mp3",
    l1Q6: BASE_AUDIO_URL +  "L1_Q6.mp3",
    l1Q7: BASE_AUDIO_URL +  "L1_Q7.mp3",
    l1Q8: BASE_AUDIO_URL +  "L1_Q8.mp3",
    
}

export const VIDEO_BASE_URL = "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/"

export const VideoFiles = {
    listeningInstruction: VIDEO_BASE_URL + "CELPIP-G_Listening.mp4",
    speakingInstruction: VIDEO_BASE_URL + "CELPIP-G_Speaking.mp4",
}



export const ImgFiles = {
    SP_DESC_SCENE: "https://firebasestorage.googleapis.com/v0/b/ccs-panel.appspot.com/o/mocktest%2FsampleAssets%2Fimage%20(3).png?alt=media&token=8e8248ed-0cec-446c-9c62-02ce1ad11cd7",
    SP_DESC_SITUATION: "https://firebasestorage.googleapis.com/v0/b/ccs-panel.appspot.com/o/mocktest%2FsampleAssets%2Fimage%20(4).png?alt=media&token=3dacad4d-fd12-46e2-ad17-0e9b2146a829"
}

//===================================  App Config ====================================

export const APP_NAME = 'CELPIPMOCKTEST'

export const FIRESTORE_CONFIG = {
    PAGE_DRAFTS: "pageDrafts",
    PACKAGES : "packages",
    TEST_DRAFTS : "testDrafts",
    PUBLISHED_TESTS : "publishedTests",

}


export const QUESTION_TYPES = {
    MCQ : 'Multiple Choice',
    FILL_IN_BLANKS : 'Fill In The Blanks',
    WRITING : 'Writing',
}

export const CNP_SECTION_TYPES = {
    choices : 'Choice Section',
    recommendations : 'Recommendation Section',
}