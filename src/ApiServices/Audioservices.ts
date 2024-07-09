import axiosClient from './client';
import { IUploadAudio } from './interfaces';
export const getAudiosByCategory = async (categoryId: number) => {
    const response: any = await axiosClient.get('/category/audio', {
        params: {
            categoryId
        }
    });
    return response.data;
}

export const getAllAudioCategory = async () => {
    const response: any = await axiosClient.get(`allAudioCategory`);
    return response?.data;
}

export const UploadAudio = async (data:IUploadAudio) => {
    const response: any = await axiosClient.post("uploadAudio", data);
    return response?.data;
}

export const AddAudioCategory = async (data: any) => {
    const response: any = await axiosClient.post("addAudioCategory",data )
    return response.data;
}

export const UpdateAudioCategory = async (data: any) => {
    const response: any = await axiosClient.post("updateAudioCategory",data )
    return response.data;
}