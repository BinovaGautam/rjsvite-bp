import { IBaseWrapper } from '@/Types';
import { cn } from '@/lib';
import React from 'react'

interface IOptionWrapper extends IBaseWrapper{
    onRightClick ?: (e : React.MouseEvent) => void
}

const OptionWrapper = ({
    children,
    className,
    onClick,
    onRightClick,
    ...rest
}: IOptionWrapper) => {
  let pressTimer: NodeJS.Timeout;

  const localClassName = `bg-white border h-32 w-32 flex gap-2 flex-col items-center justify-center rounded-lg 
  cursor-pointer hover:bg-alpha hover:text-dark/50 hover:border-primary overflow-hidden `

  const handleContextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRightClick && onRightClick(e);
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    pressTimer = setTimeout(() => {
      onRightClick && onRightClick(e);
    }, 500); // 1000ms = 1s
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    clearTimeout(pressTimer);
    if (e.button === 0) {
      onClick && onClick(e as any);
    }
  }
  return (
    <div {...rest} 
      onClick={onClick}
      // onContextMenu={handleContextClick}
      // onMouseDown={handleMouseDown}
      // onMouseUp={handleMouseUp}
      className={cn(localClassName,!!onClick && "cursor-pointer",className)} >
        {children}
      </div>
  )
}

export default OptionWrapper;