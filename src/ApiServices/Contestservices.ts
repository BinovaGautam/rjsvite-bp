import axiosClient from './client';
import { IContestEnteries } from './interfaces';

export const getAllContestCategories = async () => {
    const response: any = await axiosClient.get(`allContestCategory`);
    return response?.data;
}

export const getContestByCategoryId = async (categoryId: string) => {
    const response: any = await axiosClient.get('/contestList', {
        params: {
            categoryId
        }
    });
    return response.data;
}

export const AddContestCategory = async (data: any) => {
    const response: any = await axiosClient.post("contestCategory/add",data )
    return response.data;
}

export const ContestCategoryUpdate = async (data: any) => {
    const response: any = await axiosClient.post("contestCategory/update",data )
    return response.data;
}

export  const contestDetailById = async (id: any) => {
    const response: any = await axiosClient.get(`contestDetail?contestId=${id}`);
    return response.data;
}

export const getContestEnteries = async (data: IContestEnteries) => {
    const response: any = await axiosClient.post("contest/video",data )
    return response.data;
}