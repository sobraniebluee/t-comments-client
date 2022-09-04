import React from 'react';
import styles from '../PostComments.module.scss'
import {Button, Typography} from "@mui/material";
import {UserAvatar} from "../../Header/AccountMenu";
import clsx from "clsx";
import dynamic from "next/dynamic";
import {OutputData} from "@editorjs/editorjs";
// import CommentFormEditor, { IComm } from "./CommentFormEditor";
// import {Editor} from "../WriteForm/Editor";

const CommentFormEditor = dynamic(() => import('./CommentFormEditor').then(e => e.default),{ssr: false})


interface CommentFormProps {
    isClosable?: boolean
    onClose?:() => void
}


const CommentForm: React.FC<CommentFormProps> = ({isClosable, onClose}) => {
    const [isFocus, setOnFocus] = React.useState(false)
    const [dataComments, setDataComments] = React.useState<OutputData['blocks']>([])

    return (
        <form className={clsx(styles.commentForm, isFocus && styles.focus)} onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)}>
           <CommentFormEditor initialData={dataComments} setDataComments={setDataComments}/>
            <div className={styles.commentForm__actions}>
                <UserAvatar username={"add"} styles={{fontSize:"12px", cursor:"pointer"}} height={28} width={28} background={"#F675A8"}/>
                <div className={styles.commentForm__actions__buttons}>
                {isClosable && <Typography onClick={onClose}>Close</Typography>}
                <Button variant={"contained"} className={"defaultButton"} disabled={(dataComments.length == 0)}>Send</Button>
                </div>
            </div>
        </form>
    );
};

export default CommentForm;