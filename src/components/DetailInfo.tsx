import { Item } from "@/pages";
import { SwipeableDrawer } from "@mui/material";
import { useRef, useState } from "react";

interface DetailInfoProps {
  selectedItem: Item | null;
}

export const DetailInfo = ({ selectedItem }: DetailInfoProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SwipeableDrawer
      key={selectedItem?.id}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      anchor="bottom"
      swipeAreaWidth={100}
      classes={{
        paper: "overflow-visible",
      }}
      hidden={!selectedItem}
    >
      <div className="absolute text-xl rounded-t-xl p-2 visible left-0 top-[-100px] right-0 h-[100px] bg-slate-500">
        <div className="h-[100px]">{selectedItem?.title}</div>
      </div>
      <div className="text-2xl bg-slate-500 p-2 overflow-y-auto max-h-[100px]">
        {selectedItem?.body}
      </div>
    </SwipeableDrawer>
  );
};
