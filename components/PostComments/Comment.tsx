import React from 'react';
import {Paper} from "@mui/material";
import styles from './PostComments.module.scss'
import {countCommentsDepth} from "../../utils/utils";
import {IAuthor, IComment} from "../../utils/types";
import {OutputData} from "@editorjs/editorjs";
import Branch from "./Branches/Branch";
import CommentBody from "./CommentBody";

export interface CommentsLevels {
    level: number,
    lengthBranch?: number,
    isLast: boolean,
    name?:string,
    rootBranch: any
}

interface CommentProps {
    id: number
    author: IAuthor
    created_at: string
    updated_at?: string
    text: OutputData['blocks'],
    level: number,
    rootAnswers: IComment[],
    dataBranchesLevels?: CommentsLevels[],
    index?: number
}

const Comment: React.FC<CommentProps> = ({
        id,
        author,
        text,
        created_at,
        updated_at,
        level,
        rootAnswers,
        dataBranchesLevels,

}) => {
    return (
        <>
            <Paper elevation={0} className={styles.commentWrapper}>
                <div className={styles.commentBranches}>
                    {
                        Array(level).fill(0).map((_, index) => {
                            if (index < 9) {
                                let currentLevelBranch = index + 1
                                let branchData = dataBranchesLevels.find(item => item.level == currentLevelBranch)
                                let isDraw = false
                                if (branchData) {
                                    if (branchData.lengthBranch > 0 && !branchData.isLast) {
                                        isDraw = true
                                        branchData.lengthBranch = branchData.lengthBranch - 1
                                    } else {
                                        dataBranchesLevels.splice(dataBranchesLevels.indexOf(branchData))
                                    }
                                }
                                return <Branch isDraw={isDraw} currentIterLevel={index} currentCompLevel={level} rootBranch={branchData?.rootBranch || null}/>
                            }
                        })
                    }
                </div>
                <CommentBody id={id}
                             author={author}
                             text={text}
                             created_at={created_at}
                             updated_at={updated_at}
                             isLastComment={true}/>
            </Paper>
            {
                rootAnswers.length > 0 && rootAnswers.map(({id: itemId, author, created_at, text, answers}: IComment, index) => {
                    let lengthBranch = 0
                    for (let i = 0; i < rootAnswers.length - 1;i++) {
                        lengthBranch += countCommentsDepth(rootAnswers[i]?.answers || [])
                    }
                    if (rootAnswers[index + 1]?.answers) {
                        lengthBranch += (rootAnswers.length - 1)
                    }
                    let newBranchData = {
                        level: level + 1,
                        lengthBranch: lengthBranch,
                        isLast: rootAnswers.length - 1 == index,
                        name: author.username,
                        rootBranch:id,
                    }
                    dataBranchesLevels.push(newBranchData)
                    return (<Comment key={(Math.random() * 1000).toString()}
                                    id={itemId}
                                    author={author}
                                    created_at={created_at}
                                    text={text}
                                    level={level + 1}
                                    rootAnswers={answers}
                                    dataBranchesLevels={dataBranchesLevels}/>)
                })
            }
        </>
    );
}

Comment.displayName = "Comment"

export default Comment;




