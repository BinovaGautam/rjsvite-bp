"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef } from "react";

interface IDrawer {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title?: string;
  className?: string;
  side: "top" | "left" | "right" | "bottom";
  showClose ?: boolean;
}

export default function PrimaryDrawer({
  open ,
  title,
  children,
  side,
  className,
  setOpen,
  showClose,
}: IDrawer) {

  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setOpen &&setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);
  // const _renderComp = () => (
  //   <Box className="bg-teal-400">
  //     <div className="">
  //       {setOpen && (
  //         <div className="cursor-pointer flex items-center justify-end p-1"
  //           onClick={() => setOpen(false)}
  //         >
  //           <RxCross2 />
  //         </div>
  //       )}
  //       <div className="">{children}</div>
  //     </div>
  //   </Box>
  // );
  return (
      <Drawer   anchor={side} open={open} >
          {/* {_renderComp()} */}
          <div ref={drawerRef}>
          {children}

          </div>
      </Drawer>
      
  );
}