import React from 'react';
import styles from "../PostComments.module.scss";
import EditorJS, {OutputData} from "@editorjs/editorjs";

interface CommentFormEditorProps {
    initialData: OutputData['blocks'],
    setDataComments:(data: OutputData['blocks']) => void
}

export interface IComm {
    type: 'text' | 'url',
    data: string
}


const CommentFormEditor: React.FC<CommentFormEditorProps> = ({initialData, setDataComments}) => {
    const commentEditorRef = React.useRef(null)

    React.useEffect(() => {
        const editor = new EditorJS({
            holder: commentEditorRef.current!,
            data: {
                blocks: (initialData && initialData.length > 0) ? initialData : []
            },
            placeholder:"Write your comment",
            async onChange() {
                const {blocks} = await editor.save()
                console.log(blocks)
                setDataComments(blocks)
            },
            inlineToolbar: false,
            minHeight:0
        })
        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy()
                    console.log("WriteForm unmount")
                })
                .catch((e) => console.log("Error clean editor "))
        }
    }, [])


    return (
         <div className={styles.commentFormEditor} ref={commentEditorRef}/>
    );
};

export default CommentFormEditor;


