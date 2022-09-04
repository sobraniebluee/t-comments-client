import {Logout, Settings} from '@mui/icons-material';
import {Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from '@mui/material';
import React from 'react';
import Link from "next/link";
import clsx from "clsx";

interface AccountMenuProps {
    logoutHandler: () => void,
    username: string
}
interface UserAvatarProps {
    username: string
    height?: number,
    width?: number,
    background?: string
    styles?: object,
    classNames?: string
}
export const UserAvatar: React.FC<UserAvatarProps> = ({username, styles, classNames, width = 32, height= 32, background}) =>{
    const firstLetterName = username[0].toUpperCase()
    return (
        <Avatar className={classNames} sx={{ width: width, height: height, background: background ? background : "", ...styles}}>
            {firstLetterName}
        </Avatar>
    )
}


const AccountMenu: React.FC<AccountMenuProps> = ({logoutHandler, username}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
             <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                      <UserAvatar height={32}
                                  width={32}
                                  username={username}
                                  background={"hsl(238deg 86% 69%)"}
                      />
                  </IconButton>
                </Tooltip>
            </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                width:"280px",
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
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
              <Link href={`../u/${username}`}>
                <MenuItem>
                    <UserAvatar username={username}
                                width={32}
                                height={32}
                                background={"hsl(238deg 86% 69%)"}
                    />
                    My account
                </MenuItem>
              </Link>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={logoutHandler}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
        </Menu>
        </>
    );
};

export default AccountMenu;