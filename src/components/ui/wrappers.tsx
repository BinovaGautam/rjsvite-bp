import {cn} from '@/lib'
import { ReactNode } from 'react';

interface IBaseCompProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children ?: ReactNode;
}

export const BaseWrapper = ({children,className, ...restProps} : IBaseCompProps) => (
  <div 
  className={cn("mt-1  flex bg-white  w-full items-center rounded-2xl border text-black overflow-hidden",className)}
  {...restProps}
  >
    {children}
  </div>
);