import React from 'react';
import {Paper, Typography} from "@mui/material";
import clsx from "clsx";
import styles from "./PostComments.module.scss";
import {NoSsr} from "@mui/base";
import {UserAvatar} from "../Header/AccountMenu";
import {getRandomColor} from "../../utils/utils";
import {timeHasPassed} from "../../utils/timeHasPassed";
import Vote, {VoteTypeEnum} from "../Vote";
import {OutputBlockData, OutputData} from "@editorjs/editorjs";
import BranchCommentForm from "./BranchCommentForm";
import {IAuthor} from "../../utils/types";

interface CommentBodyProps {
    id: number
    author: IAuthor
    text: OutputData['blocks'],
    created_at: string
    isLastComment?: boolean
    updated_at?: string
}

const CommentBody: React.FC<CommentBodyProps> = ({id,author,text, updated_at,created_at, isLastComment}) => {
    return (
        <Paper elevation={0} className={clsx(styles.comment)} >
            <div className={styles.commentHeader}>
                <div className={styles.user}>
                    <NoSsr>
                        <UserAvatar username={"ddd"}
                                    width={30}
                                    height={30}
                                    background={getRandomColor()}
                        />
                    </NoSsr>
                    <div className={styles.userTitle}>
                        <Typography>{author.username}</Typography>
                        <time>{timeHasPassed(created_at)}</time>
                    </div>
                </div>
                <div className={styles.vote}>
                    <Vote id={0} rating={2} isMyVote={VoteTypeEnum.NULL} sendVote={(id, type) => {}}/>
                </div>
            </div>
            <div className={styles.commentBody}>
                {
                    text.length > 0 &&
                    text.map((block: OutputBlockData) => {
                        return <Typography key={block.id}
                                           style={{wordBreak:"break-word", marginTop:"8px"}}
                                           variant={"body1"}
                                           dangerouslySetInnerHTML={{__html: block.data.text}}
                        />})
                }
                <Typography>ID: {id}</Typography>
            </div>
            <BranchCommentForm idComment={id} isLast={isLastComment}/>
        </Paper>
    );
};

export default CommentBody;