import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

interface IPrimaryMenu {
    children: React.ReactNode;
    open?: boolean;
    btn?: React.ReactNode;
    anchorEl: HTMLElement | null;
    onClose ?: () => void;
}
export  function PrimaryMenu({ children, open: defaultOpen, btn, anchorEl: defaultAnchorEl, onClose }: IPrimaryMenu) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(defaultAnchorEl);
    const [open, setOpen] = React.useState<undefined | boolean>(defaultOpen);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    React.useEffect(() => {
        setAnchorEl(defaultAnchorEl);
        setOpen(defaultOpen);
    }, [defaultAnchorEl, defaultOpen]);

    return (
        <div>
            {
                !!btn &&
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {btn}
                </Button>
            }
            <Menu
                anchorEl={anchorEl}
                id="basic-menu"
                open={open as boolean}
                onClose={() => {
                    setAnchorEl(null);
                    setOpen(false);
                    onClose && onClose();
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {children}
            </Menu>
        </div>
    );
}
