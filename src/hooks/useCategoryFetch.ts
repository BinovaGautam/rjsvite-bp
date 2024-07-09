// CustomHook.js

import { useFetchData } from "@/hooks";
import { getAllAudioCategory, getAllContestCategories } from "@/ApiServices";
import useFetch from "./useFetch";

interface IUseCategoryFetch {
  category: string;
}

const useCategoryData = ({ category }: IUseCategoryFetch) => {

     const getCategories = () => {
        switch (category?.toLowerCase()) {
            case "audio": 
                return getAllAudioCategory();
            case "contest":
                return getAllContestCategories();
            default:
                return null;
        }
     }

     const {data : CategoriesData, ...categoryFetch} =  useFetchData(["categoryData",category], getCategories)

     return {
        CategoriesData,
        categoryFetch,
     }
};

export default useCategoryData;