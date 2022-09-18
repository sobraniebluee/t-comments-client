import React from "react";
import CommentForm from "./CommentForm";
import {useCommentFormContext} from "../../../context/CommentFormContext";
import styles from "../PostComments.module.scss";
import {MoreHorizRounded} from "@mui/icons-material";
import clsx from "clsx";
import {useCommentContext} from "../../../context/CommentContext";
import {useRouter} from "next/router";



interface BranchCommentFormProps {
    idComment: number,
    isLast: boolean,
    isHideBody?: boolean
}

const BranchCommentForm: React.FC<BranchCommentFormProps> = ({idComment,isLast,isHideBody}) => {
    const {idComment: id, handlerClose, handlerOpen} = useCommentFormContext()
    const {isHideElement} = useCommentContext()
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
                            <div key={Math.random().toString(12)}
                                 className={clsx(styles.commentBranches__content,`--level:none`)}
                                 style={{height: `${isHideElement(idComment) ? 0 : (!!isLast) ? 0 : 100}%`}}
                            />
                        </div>
                        <CommentForm isClosable={true}
                                     onClose={handlerClose}
                                     isReply={true}
                                     idRoot={id}
                                     idPost={parseInt(idPost as string)}
                        />
                    </>
                }
            </div>
        </>
    )
}

export default BranchCommentForm