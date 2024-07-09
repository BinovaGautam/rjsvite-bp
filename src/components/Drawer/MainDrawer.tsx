import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AiOutlineClose } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef } from "react";
import { Button } from "../ui";

interface IDrawer {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    onClose?: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
    side: "top" | "left" | "right" | "bottom";
    showClose?: boolean;
}

export default function MainDrawer({
    open: defaultOpen = false,
    title,
    children,
    side,
    className,
    onClose,
    showClose = false,
}: IDrawer) {

    const openDrawerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(defaultOpen);

    const handleOpenState = (bool: boolean) => {
        if (bool) return;
        setOpen && setOpen(false);
        onClose && onClose();
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (
                openDrawerRef.current &&
                !openDrawerRef.current?.contains(event.target)
            ) {
                handleOpenState(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setOpen(defaultOpen);
    }, [defaultOpen])

    const _renderComp = () => (
        <Box className=" min-w-96 h-screen overflow-hidden ">
            <div className="">
                {showClose && (
                    <Button onClick={() => handleOpenState(false)} variant="ghost"  >
                        <RxCross2 />
                    </Button>
                )}
                <div className="">{children}</div>
            </div>
        </Box>
    );

    const drawerClassName = cn( className);

    return (
        <Drawer 
            className={drawerClassName}
            onClose={() => handleOpenState(false)}
             anchor={side} 
             open={open}  
             >
            {_renderComp()}
        </Drawer>

    );
}
