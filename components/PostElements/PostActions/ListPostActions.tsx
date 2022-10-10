import React from 'react';
import styles from "./PostActions.module.scss";
import {IconButton, Typography} from "@mui/material";
import {
    ModeCommentOutlined as CommentsIcon,
    TurnedInNotRounded as FavoriteIconOutlined,
    TurnedInRounded as FavoriteIconFilled
} from "@mui/icons-material";
import AuthRequired from "../../AuthRequired";

interface ActionsPostProps {
    commentsCount: number
}

const ListPostActions: React.FC<ActionsPostProps> = ({commentsCount}) => {
    const [isSavedBookmark, setSavedBookmark] = React.useState<boolean>(false)

    const handlerSaveBook = () => {
        setSavedBookmark(prevState => !prevState)
    }
    return (
         <ul className={styles.postActionsList}>
             <li>
                 <IconButton>
                     <CommentsIcon fontSize={"small"}/>
                 </IconButton>
                 <Typography fontSize={"14px"} color={"secondary"}>{commentsCount}</Typography>
             </li>
             <li>
                 <AuthRequired onClick={handlerSaveBook}>
                     <IconButton>
                         {
                             isSavedBookmark ?
                                 <FavoriteIconFilled data-saved-markbook="true" fontSize={"small"}/>
                                 :
                                 <FavoriteIconOutlined data-unsaved-markbook="true" fontSize={"small"}/>
                         }
                     </IconButton>
                 </AuthRequired>
             </li>
         </ul>
    );
};

export default ListPostActions;