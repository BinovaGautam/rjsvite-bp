import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { FIRESTORE_CONFIG } from "./config";

export const getAllTests = async (params ?: any) => {
    const apptQuery = query(collection(db,FIRESTORE_CONFIG.TEST_DRAFTS));
    return await getDocs(apptQuery);
}

export const getSingleTest = async (id : string) => {
    const docRef = doc(db, FIRESTORE_CONFIG.TEST_DRAFTS, id);
    return await getDoc(docRef);

}

export const getSinglePage = async (id : string) => {
    const docRef = doc(db, FIRESTORE_CONFIG.PAGE_DRAFTS, id);
    return await getDoc(docRef);
}

export const getAllPagesByTest = async (testId : string) => {
    const apptQuery = query(collection(db,FIRESTORE_CONFIG.PAGE_DRAFTS), where("testId","==",testId));
    return await getDocs(apptQuery);

}


export const getAllTestSeries = async (params ?: any) => {
    const apptQuery = query(collection(db,"testSeries"));
    return await getDocs(apptQuery);
}

export const getAllPackages = async (params ?: any) => {
    const apptQuery = query(collection(db,"packages"));
    return await getDocs(apptQuery);
}

export const getDraftById = async (id : string, type : string = "page") => {
    const collectionName = type === "page" ? FIRESTORE_CONFIG.PAGE_DRAFTS : FIRESTORE_CONFIG.TEST_DRAFTS
    const docRef = doc(db, collectionName, id);
    return await getDoc(docRef);
}

