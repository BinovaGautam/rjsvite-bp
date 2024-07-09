import { useEffect, useState } from "react";
import { useFetchData, usePost } from "."
import { contestDetailById } from "@/ApiServices";

interface IUseCrudHook {
    fetchCategoryFun:any;
    fetchCategoryDataFun: any;
    id : string;
    categoryKey : string
}

const useCrudHook = ({fetchCategoryFun,  fetchCategoryDataFun , id , categoryKey}:IUseCrudHook) => {
   const [selectedCategoryId , setSelectedCategoryId] = useState("")
//     const {data:categoriesList} = useFetchData(["allCategory",id], fetchCategoryFun);
//     const { data: categoryDataList, ...categoriesFetchProps } = useFetchData(["allcategoryData",selectedCategoryId as string],

//     () => fetchCategoryDataFun(selectedCategoryId),
//     {
//       keepPreviousData: true,
//       refetchOnWindowFocus: false,
//     }
//   );

  const {data: constestDetailById,mutate} = usePost(() => contestDetailById(selectedCategoryId))

//   useEffect(() => {
//    if (!categoriesList || !!selectedCategoryId) return;
//     setSelectedCategoryId(categoriesList?.[0]?.[categoryKey])
//   ,[categoriesList]})

  return { 
    categoriesList,
    categoryDataList,
   categoriesFetchProps,
   setSelectedCategoryId,
   selectedCategoryId,
   mutate,
   constestDetailById
  }
}

export default useCrudHook