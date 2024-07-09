import { IBaseWrapper } from '@/Types'
import { cn } from '@/lib';
import React from 'react'

interface IShimmerWrappert extends IBaseWrapper {
    show ?: boolean;
}

const ShimmerWrapper = ({
    children,
    className,
    show
}: IShimmerWrappert) => {
  return (
    <div className={cn(className, show && "w-full abg-gradient-to-r from-alpha to-secondary animate-pulse ")}>
        {children}
    </div>
  )
}


export default ShimmerWrapper