export interface ISearchResp {
    msg : string;
    token ?: string;
}

export interface IUploadAudio {
    audioName : any;
    audio: any;
    category: string | undefined;
    categoryId:string;
}


interface IEnteriesItem {
    watchCount: number;
    videoId: string;
    totalDuration: number;
    videoWithWaterMarkUrl: string;
    hlsUrl: string;
    audioId: string;
    videos3url: string;
    contestId: string;
    createdAt: string;
    likeCount: number;
    verifyStatus: string;
    deleteStatus: string;
    userId: string;
    updatedAt: string;
    thumbnailUrl: string;
    description: string;
    username: string;
    profilePic: string;
    likeStatus: string;
    watchStatus: string;
    followStatus: string;

}