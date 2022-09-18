import React from 'react';
import styles from '../PostComments.module.scss'
import {Button, Typography} from "@mui/material";
import {UserAvatar} from "../../Header/AccountMenu";
import clsx from "clsx";
import dynamic from "next/dynamic";
import {OutputData} from "@editorjs/editorjs";
import {useAppDispatch, useTypedSelector} from "../../../redux/hooks";
import AuthRequired from "../../AuthRequired";
import {createCommentForPost} from "../../../redux/post-comments/post-comments.actions";
import MiniLoader from "../../Loaders/MiniLoader";
import {useCommentFormContext} from "../../../context/CommentFormContext";

const CommentFormEditor = dynamic(() => import('./CommentFormEditor').then(e => e.default),{ssr: false})


interface CommentFormProps {
    idPost: number,
    isReply: boolean,
    idRoot: null | number
    isClosable?: boolean
    onClose?:() => void,
}


const CommentForm: React.FC<CommentFormProps> = ({idPost, isReply, idRoot,isClosable, onClose,}) => {
    const dispatch = useAppDispatch()
    const [isFocus, setOnFocus] = React.useState(false)
    const [textComment, setTextComment] = React.useState<OutputData['blocks']>([])
    const {data, isAuth} = useTypedSelector((state) => state.user)
    const {
        loadingCreateComment: {
            idRootComment: idRootCommentLoading,
            isLoading: isLoadingCreateComment
        },
        isCreated
    } = useTypedSelector((state) => state.post_data.post_comments.create)
    const {handlerClose} = useCommentFormContext()

    const onFocus = () => {
        setOnFocus(true)
        if (!isClosable) {
            handlerClose()
        }
    }

    const onSubmit = () => {
        if (textComment.length > 0) {
            dispatch(createCommentForPost({id_post: idPost,
                id_root: idRoot,
                is_reply: isReply,
                text: textComment
            }))
        }
    }
    React.useEffect(() => {
        if (isCreated) {
            if (!isClosable) {
                handlerClose()
            }
            setTextComment([])
        }
    }, [isCreated])

    return (
        <form className={clsx(styles.commentForm, isFocus && styles.focus)} onFocus={onFocus} onBlur={() => setOnFocus(false)}>
           <CommentFormEditor initialData={textComment} setTextComment={setTextComment} isClear={isCreated}/>
            <div className={styles.commentForm__actions}>
                {isAuth &&
                    <UserAvatar userAvatar={data.username}
                                styles={{fontSize: "12px", cursor: "pointer"}}
                                height={28}
                                width={28}
                                background={"#F675A8"}
                    />
                }
                {(isLoadingCreateComment && idRootCommentLoading == idRoot)  && <MiniLoader style={{marginLeft: '10px'}}/>}
                <div className={styles.commentForm__actions__buttons}>
                {isClosable && <Typography onClick={onClose}>Close</Typography>}
                <AuthRequired onClick={onSubmit}>
                    <Button variant={"contained"}
                        className={"defaultButton"}
                        disabled={(textComment.length == 0) || (isLoadingCreateComment && idRootCommentLoading == idRoot)}
                    >
                        Send
                    </Button>
                </AuthRequired>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;