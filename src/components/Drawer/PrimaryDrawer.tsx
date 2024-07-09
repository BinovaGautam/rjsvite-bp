import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { AiOutlineClose } from "react-icons/ai";

interface IDrawer {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title?: string;
}

export default function PrimaryDrawer({ open, setOpen, title, children }: IDrawer) {
  const list = () => (
    <Box sx={{width: "100%" }}>
      <div className=" grid grid-rows-[max-content_1fr] relative w-full lg:min-w-[50rem]">
        <div className="">
          <h1 className="text-xl font-semibold text-center p-1">{title}</h1>
          <button
            className="absolute top-2 right-2  rounded-full "
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="mt-8 px-4">{children}</div>
      </div>
    </Box>
  );

  return (
    <div className="w-full">
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={open}
            className="w-full"
          >
            {list()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}