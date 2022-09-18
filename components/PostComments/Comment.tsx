import React from 'react';
import {Paper} from "@mui/material";
import styles from './PostComments.module.scss'
import {countCommentsDepth} from "../../utils/utils";
import {IAuthor, IComment} from "../../utils/types";
import {OutputData} from "@editorjs/editorjs";
import Branch from "./Branches/Branch";
import CommentBody from "./CommentBody";
import CommentChildren from "./CommentChildren";
import clsx from "clsx";

export interface CommentsLevels {
    level: number,
    lengthBranch?: number,
    isLast: boolean,
    name?:string,
    rootBranch: any
    idsChild: number[]
}

export interface CommentProps {
    id: number
    idPost?: number
    author: IAuthor
    created_at: string
    updated_at?: string
    text: OutputData['blocks'],
    level: number,
    rootAnswers: IComment[],
    dataBranchesLevels: CommentsLevels[],
    isLast?: boolean
}

export const test: IComment = {
    "answers": [],
    "author": {
        "id": "21dba147-7813-40a3-935d-9d5a671614dd",
        "username": "dimf29@gmail.com"
    },
    "created_at": "2022-09-17 23:04:19",
    "id": 74263937145511361,
    "id_author": "21dba147-7813-40a3-935d-9d5a671614dd",
    "id_post": 1011181669516493,
    "id_root": 2145257062772672,
    "text": [
        {
            "data": {
                "text": "OnTime"
            },
            "id": "Fa8kjcVZwx",
            "type": "paragraph"
        }
    ],
    "updated_at": null
}

const Comment: React.FC<CommentProps> = ({
        id,
        author,
        text,
        created_at,
        updated_at,
        level,
        rootAnswers,
        dataBranchesLevels, isLast
}) => {
    const [commentAnswers, setCommentAnswers] = React.useState<IComment[]>(rootAnswers)
    React.useEffect(() => {
        if (id == test.id_root) {
            // console.log('ok', id, test.id_root)
            setCommentAnswers([...rootAnswers, test])
        } else {
            setCommentAnswers(rootAnswers)
        }
    }, [rootAnswers])
    console.log("render", id)
    return (
        <>
            <Paper elevation={0} className={clsx(styles.commentWrapper)}>
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
                                    return <Branch
                                                id={id}
                                                key={(Math.random() * id).toString(36)}
                                                isDraw={isDraw}
                                                currentIterLevel={index}
                                                currentCompLevel={level}
                                                rootBranchId={branchData?.rootBranch || null}
                                                idsChild={branchData ? branchData.idsChild : []}
                                            />
                                }
                            })
                        }
                    </div>
                <CommentBody id={id}
                             author={author}
                             text={text}
                             created_at={created_at}
                             updated_at={updated_at}
                             isLastComment={isLast}
                             countAnswers={countCommentsDepth(commentAnswers)}
                />
            </Paper>
            <CommentChildren id={id}
                             author={author}
                             created_at={created_at}
                             updated_at={updated_at}
                             text={text}
                             level={level}
                             rootAnswers={commentAnswers}
                             dataBranchesLevels={dataBranchesLevels}
            />

        </>
    );
}

Comment.displayName = "Comment"

export default Comment;




