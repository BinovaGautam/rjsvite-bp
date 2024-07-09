"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { LoadingComp } from "./DisplayComps";

interface IFlatListComp {
    data: any;
    renderItem: (item : any , index:number) => ReactNode;
    keyExtractor: any;
    ListHeaderComponent ?: ReactNode;
    ListFooterComponent ?: ReactNode;
    ListEmptyComponent ?: ReactNode;
    ItemSeparatorComponent ?: ReactNode;
    onRefresh ?: () => void;
    refreshing ?: boolean;
    onEndReached ?: () => void;
    onEndReachedThreshold ?: number;
    ListWrapperComp ?: ReactNode;
    parentClassName ?: string;
    isLoading ?: boolean;
    horizontal ?: boolean;
    numColumns ?: number;

}

const FlatListComp = ({ data, 
    renderItem, 
    keyExtractor,
    ListEmptyComponent,
    ListHeaderComponent,
    ListFooterComponent, 
    ListWrapperComp,
    parentClassName,
    ItemSeparatorComponent,
    isLoading,
    horizontal = false,
    numColumns = 1,
    ...props } : IFlatListComp) => {
    
    
    if (isLoading) return <LoadingComp />

   return(
    <>
    {ListHeaderComponent}
    
        {data?.length ? 
          <div className={cn(`grid grid-cols-${numColumns} gap-2 w-full  `,parentClassName)  } >
            
            {data?.map((item : any,index:number) => {
                return <>
                {renderItem(item,index)}
                {ItemSeparatorComponent}
                </>
            })}
        </div>
         : ListEmptyComponent}

   
    {ListFooterComponent}
    </>
   )

}


export default FlatListComp;