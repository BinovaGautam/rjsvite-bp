import { ICrudWrapper } from '@/Types';
import React from 'react'
import { SectionTitle } from '../Common';
import { Button } from '../ui';
import { ChevronLeft } from 'lucide-react';
import { ICON_SIZES, cn } from '@/lib';
import { useNavigate } from 'react-router-dom';



const CrudWrapper = ({
    children,
    className,
    create ,
    title,
    availableFilters,
    filterAction
}: ICrudWrapper) => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
       <div  className={cn(' ',className)} >
              <div className='flex  items-center py-2 gap-2 '>
                <div className="flex flex-1 gap-2">
                    <SectionTitle title={title}  />
                </div>
                {
                     !!create && 
                     <Button onClick={create.action} variant="secondary" className="shadow-md"  >
                          {create.title}
                     </Button>
                }
              </div>
             <div className=" h-[90vh]  p-4 overflow-y-scroll ">
                {children}
              </div>
       </div>
    )
}

export default CrudWrapper;