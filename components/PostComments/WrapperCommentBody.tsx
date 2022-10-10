import React from "react";
import {useHideBranchContext} from "../../context/HideBranchCommentContext";
import {Paper, Typography} from "@mui/material";
import clsx from "clsx";
import styles from "./PostComments.module.scss";

interface WrapperCommentBodyProps {
    children: React.ReactNode | React.ReactNode[]
    id: number
    countAnswers: number
}

const WrapperCommentBody: React.FC<WrapperCommentBodyProps> = ({children, id, countAnswers}) => {
    const {idsHideBranch, handlerHideBranch, isHideElement} = useHideBranchContext()
    return (
        <Paper elevation={0} className={clsx(styles.comment, isHideElement(id) && styles.hide)} >
            {children}
            {
                (idsHideBranch.length > 0 && idsHideBranch.find(item => item.rootId == id))
                &&
                <Typography className={styles.commentToggleTitle}
                            onClick={() => handlerHideBranch({rootId: id, idsChild: null})}>
                    Show {countAnswers}
                </Typography>
            }
        </Paper>
    )
}

export default WrapperCommentBody;