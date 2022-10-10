import React from "react";
import CommentForm from "./CommentForm";
import {useCommentFormContext} from "../../../context/CommentFormContext";
import styles from "../PostComments.module.scss";
import {MoreHorizRounded} from "@mui/icons-material";
import clsx from "clsx";
import {useHideBranchContext} from "../../../context/HideBranchCommentContext";
import {useRouter} from "next/router";
import {IComment} from "../../../utils/types";



interface BranchCommentFormProps {
    idComment: number,
    isLast: boolean,
    isHideBody?: boolean,
    setCommentAnswers: (comment: IComment) => void

}

const BranchCommentForm: React.FC<BranchCommentFormProps> = ({idComment,isLast,isHideBody, setCommentAnswers}) => {
    const {idComment: id, handlerClose, handlerOpen} = useCommentFormContext()
    const {isHideElement} = useHideBranchContext()
    const {query: {id: idPost}} = useRouter()
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
                            <div
                                 className={clsx(styles.commentBranches__content,`--level:none`)}
                                 style={{height: `${isHideElement(idComment) ? 0 : (!!isLast) ? 0 : 100}%`}}
                            />
                        </div>
                        <CommentForm isClosable={true}
                                     onClose={handlerClose}
                                     isReply={true}
                                     idRoot={id}
                                     idPost={parseInt(idPost as string)}
                                     setCommentAnswers={setCommentAnswers}
                        />
                    </>
                }
            </div>
        </>
    )
}

export default BranchCommentForm