import React from 'react';
import styles from "../PostComments.module.scss";
import EditorJS, {OutputData} from "@editorjs/editorjs";
import {LogLevels} from "../../../utils/types";


interface CommentFormEditorProps {
    initialData: OutputData['blocks'],
    setTextComment:(data: OutputData['blocks']) => void,
    isClear: boolean
}


const CommentFormEditor: React.FC<CommentFormEditorProps> = ({initialData, setTextComment, isClear}) => {
    const commentEditorRef = React.useRef<HTMLDivElement>(null)
    const [editor, setEditor] = React.useState<EditorJS>()
    React.useEffect(() => {
         const editor = new EditorJS({
             holder: commentEditorRef.current!,
             data: {
                 blocks: (initialData && initialData.length > 0) ? initialData : []
             },
             placeholder:"Write your comment",
             async onChange() {
                 const {blocks} = await editor.save()
                 setTextComment(blocks)
             },
             inlineToolbar: false,
             minHeight:0,
             logLevel:LogLevels.ERROR
         })
        setEditor(editor)
        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy()
                    console.log("WriteForm unmount")
                })
                .catch((e) => console.log("Error clean editor "))
        }
    }, [])
    React.useEffect(() => {
        if (isClear && editor) {
           editor.clear()
        }
    }, [isClear])
    return (
         <div className={styles.commentFormEditor} ref={commentEditorRef}/>
    );
};

export default CommentFormEditor;


