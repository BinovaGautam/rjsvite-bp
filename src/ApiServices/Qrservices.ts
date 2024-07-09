import axiosClient from './client';

export const generateQr = async () => {
    const response: any = await axiosClient.get('/qr/generate');
    return response?.data;
}

export const AddLinkQr = async (data: any, id?:string) => { //TODO: Find the way to use the interface from the container Hooks
    const response: any = await axiosClient.post(`qr/details/${id}`, data);
    return response?.data;
}

export const getQr = async (flag?:boolean, limit?:string, page?:string) => {
    const response: any = await axiosClient.get(`qr?limit=${limit}&page=${page}&isFavourite=${flag}&scanBy=false`);
    return response?.data;
}

export const AddFavQr = async (id:unknown) => { 
    const response: any = await axiosClient.post(`qr/favourite-toggle/${id}`);
    return response?.data;
}

export const DeleteQr = async (id:unknown) => {
    const response: any = await axiosClient.delete(`qr/${id}`);
    return response?.data;
}

export const AddLinkGroup = async (data: any) => {
    const response: any = await axiosClient.post("link-group", data);
    return response?.data
}

export const GetLinkGroup = async () => {
    const response = await axiosClient.get("link-group");
    return response?.data
}

export const getSignleQr = async (id: string) => {
    const response: any = await axiosClient.get(`qr/${id}`);
    return response?.data;
}

export const UpdateSingleQr = async (id: string | undefined, data:any) => {
    const response: any = await axiosClient.patch(`link/${id}`, data)
    return response?.data;
}

export const GetSignleLinkGroupDetail = async (id: string) => {
    const response: any = await axiosClient.get(`link-group/${id}`);
    return response?.data;
}

export const getSignleQrDetail = async (id: string) => {
    const response: any = await axiosClient.get(`qr/${id}`);
    return response?.data;
}

export const DeleteLayout = async (id:string | unknown) => {
    const response: any = await axiosClient.delete(`link-group/${id}`);
    return response?.data;
}

export const UpdateSingleLayoutLink = async (id: string,data:any) => {
    const response: any = await axiosClient.patch(`link/${id}`, data)
    return response?.data;
}

export const DeleteSingleLink = async (id:string | unknown) => {
    const response: any = await axiosClient.delete(`link/${id}`);
    return response?.data
}

export const UpdateLayout = async (id: string, data:any) => {
    const response: any = await axiosClient.patch(`link-group/${id}`, data)
    return response?.data;
}

