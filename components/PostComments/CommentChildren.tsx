import React from 'react';
import {IComment} from "../../utils/types";
import {countCommentsDepth, hasOwnIds} from "../../utils/utils";
import Comment, {CommentsLevels} from "./Comment";

interface CommentChildrenProps {
    id: number,
    level: number,
    rootAnswers: IComment[],
    dataBranchesLevels: CommentsLevels[]
}

const CommentChildren: React.FC<CommentChildrenProps> = React.memo(({id: rootId, level, rootAnswers, dataBranchesLevels }) => {
    return (
        <>
            {
                (rootAnswers.length > 0 && rootAnswers.map(({id: itemId, author, created_at, text, answers}: IComment, index) => {
                    let lengthBranch = 0
                    for (let i = 0; i < rootAnswers.length - 1; i++) {
                        lengthBranch += countCommentsDepth(rootAnswers[i]?.answers || [])
                    }
                    if (rootAnswers[index + 1]?.answers) {
                        lengthBranch += (rootAnswers.length - 1)
                    }
                    let newBranchData: CommentsLevels = {
                        level: level + 1,
                        lengthBranch,
                        isLast: rootAnswers.length - 1 == index,
                        name: author.username,
                        rootBranch: rootId,
                        idsChild: hasOwnIds(rootAnswers)
                    }
                    dataBranchesLevels.push(newBranchData)
                    return (
                            <Comment key={itemId}
                                     id={itemId}
                                     author={author}
                                     created_at={created_at}
                                     text={text}
                                     level={level + 1}
                                     rootAnswers={answers}
                                     dataBranchesLevels={dataBranchesLevels}
                                     isLast={!(answers.length > 0)}
                            />
                    )
                }))
            }
        </>

    )
});

CommentChildren.displayName = "CommentChildren"

export default CommentChildren;