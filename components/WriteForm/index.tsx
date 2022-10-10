import React from 'react';
import {Modal, Paper} from "@mui/material";
import {OutputData} from "@editorjs/editorjs";
import dynamic from 'next/dynamic';
import styles from './WriterForm.module.scss'
import {createPost, fetchOnePost, updatePost} from "../../redux/post-write/post-write.actions";
import {useAppDispatch, useTypedSelector} from '../../redux/hooks';
import {ModalFooter, ModalHeader, WriteFormLayout} from "./FormParts";
import {useRouter} from "next/router";
import { resetWriteState } from '../../redux/post-write/post-write.slice';

interface EditorFormProps {
    idPost: number | null
    isOpenWriterForm: boolean,
    handlerCloseWriteForm: () => void
}

const Editor = dynamic(() => import('./Editor').then((elems) => elems.Editor), {ssr:false})


const WriteForm: React.FC<EditorFormProps> = ({isOpenWriterForm, handlerCloseWriteForm, idPost}) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const {data, isLoading, isCommit, isNew} = useTypedSelector((state) => state.post.write)
    const [title, setTitle] = React.useState<string>('')
    const [blocks, setBlocks] = React.useState<OutputData['blocks']>([])

    const onSubmit = () => {
        if (title.length > 3) {
            if (!isNew && idPost) {
                dispatch(updatePost({id:idPost, title, description: blocks}))
            } else {
                dispatch(createPost({title, description: blocks}))
            }
        }
    }

    React.useEffect(() => {
        if (idPost) {
            dispatch(fetchOnePost(idPost))
        }
        console.log("rerender")
    }, [idPost])

    React.useEffect(() => {
        setTitle(data?.title || '')
        setBlocks(data?.description || [])
    }, [data])

    React.useEffect(() => {
        if (isCommit && data) {
            handlerCloseWriteForm()
            router.push('/new/' + data.id)
            dispatch(resetWriteState())
        }
    }, [isCommit])

    return (
            <Modal open={isOpenWriterForm}
                   onClose={handlerCloseWriteForm}
                   className={styles.modal}
                >
                {
                    !isLoading ?
                        <Paper elevation={0} className={styles.modalContent}>
                            <WriteFormLayout>
                                <ModalHeader
                                    onCloseModal={handlerCloseWriteForm}
                                    title={data?.title || title}
                                    setTitle={setTitle}/>
                            </WriteFormLayout>
                            <div className={styles.modalEditor}>
                                <Editor onChange={(blocks) => setBlocks(blocks)}
                                        initialBlocks={data?.description || blocks}/>
                            </div>
                            <WriteFormLayout>
                                <ModalFooter isDisabled={!(title.length > 3)}
                                             onSubmit={onSubmit}/>
                            </WriteFormLayout>
                        </Paper>
                    : <div>Loading...</div>
                }
            </Modal>
    );
};

export default WriteForm;