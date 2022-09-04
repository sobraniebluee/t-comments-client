import React from "react";
import CommentForm from "./CommentForm";
import {useCommentFormContext} from "../../../context/CommentFormContext";
import styles from "../PostComments.module.scss";
import {MoreHorizRounded} from "@mui/icons-material";
import clsx from "clsx";



interface BranchCommentFormProps {
    idComment: number,
    isLast: boolean
}

const BranchCommentForm: React.FC<BranchCommentFormProps> = ({idComment,isLast}) => {
    const {idComment: id, handlerClose, handlerOpen} = useCommentFormContext()

    return (
        <>
            <div className={styles.commentFooter}>
                <span onClick={() => handlerOpen(idComment)}>Answer</span>
                <MoreHorizRounded fontSize={'small'} color={"secondary"}/>
            </div>
            <div className={styles.commentAnswerFormWrapper} >
                {
                    idComment == id &&
                    <>
                        <div className={styles.commentBranch}>
                            <div key={Math.random().toString(12)}
                                 className={clsx(styles.commentBranches__content,`--level:none`)}
                                 style={{height: `${isLast ? 100 : 0}%`}}
                            />
                        </div>
                        <CommentForm isClosable={true} onClose={handlerClose}/>
                    </>
                }
            </div>
        </>
    )
}

export default BranchCommentForm