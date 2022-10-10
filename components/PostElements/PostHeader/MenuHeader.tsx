import React from 'react';
import {IconButton, Menu, MenuItem} from "@mui/material";
import styles from "../../PostPreview/PostPreview.module.scss";
import {MoreHorizOutlined} from "@mui/icons-material";

interface MenuHeaderProps {
    id: number
    isMyPost: boolean,
    onDeletePost: () => void,
    onEditPost: () => void
}

const MenuHeader: React.FC<MenuHeaderProps> = ({id, isMyPost,onDeletePost, onEditPost}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeletePost = () => {
        onDeletePost()
        handleClose()
    }
    const handleEditPost = () => {
        onEditPost()
        handleClose()
    }
    return (
        <div className={styles.header__more_features}>
                    <IconButton id="more-features-button"
                                aria-controls={open ? 'more-features-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                    >
                        <MoreHorizOutlined/>
                    </IconButton>
                    <Menu
                        id="more-features-menu"
                        MenuListProps={{
                            "aria-labelledby":"more-features-button"
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        elevation={1}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        PaperProps={{
                            style: {
                                width: "180px"
                            }
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            Report
                        </MenuItem>
                        {isMyPost &&
                            <MenuItem onClick={handleEditPost}>
                                Edit
                            </MenuItem>
                        }
                        {isMyPost &&
                            <MenuItem onClick={handleDeletePost}>
                                Delete
                            </MenuItem>
                        }
                    </Menu>
                </div>
    );
};

export default MenuHeader;