import * as React from 'react';
import Popover from '@mui/material/Popover';

// BasicPopover Component
const PrimaryPopOver = ({ anchorEl, handleClose, children }: { anchorEl: HTMLElement | null, handleClose: () => void, children : React.ReactNode }) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {children}
    </Popover>
  );
};

export default PrimaryPopOver