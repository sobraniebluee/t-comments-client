import React from 'react';
import {Typography} from "@mui/material";
import styles from "./PostComments.module.scss";
import {NoSsr} from "@mui/base";
import {UserAvatar} from "../Header/AccountMenu";
import {getRandomColor} from "../../utils/utils";
import {timeHasPassed} from "../../utils/timeHasPassed";
import Vote, {VoteTypeEnum} from "../Vote";
import {OutputBlockData, OutputData} from "@editorjs/editorjs";
import BranchCommentForm from "./BranchCommentForm";
import {IAuthor} from "../../utils/types";
import WrapperCommentBody from './WrapperCommentBody';

interface CommentBodyProps {
    id: number
    idPost?: number
    author: IAuthor
    text: OutputData['blocks'],
    created_at: string
    isLastComment?: boolean
    updated_at?: string
    countAnswers: number
}

const CommentBody: React.FC<CommentBodyProps> = React.memo((({id, author,text, updated_at,created_at, isLastComment, countAnswers}) => {
    return (
        <WrapperCommentBody id={id} countAnswers={countAnswers}>
            <div className={styles.commentHeader}>
                <div className={styles.user}>
                    <NoSsr>
                        <UserAvatar userAvatar={author.username}
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
                    <Vote id={0} rating={2} isMyVote={VoteTypeEnum.NULL} sendVote={(id, type) => {
                    }}/>
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
            <BranchCommentForm idComment={id}
                               isLast={isLastComment}
            />
        </WrapperCommentBody>
    );
}))

CommentBody.displayName = 'CommentBodyComp'

export default CommentBody;