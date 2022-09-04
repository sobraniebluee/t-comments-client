import React from 'react';
import styles from "./WriterForm.module.scss";
import {Button, IconButton, InputBase, Typography} from "@mui/material";
import {AspectRatio, Close} from "@mui/icons-material";

interface ModalHeaderProps {
    onCloseModal:() => void,
    title: string,
    setTitle: (title: string) => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({onCloseModal, title, setTitle}) => {
    return (
        <div className={styles.modalHeader}>
            <div className="d-flex justify-between align-center">
                <Typography>Create your post</Typography>
                <div className="d-flex align-center">
                    <IconButton  color={"primary"}>
                        <AspectRatio fontSize={"small"}/>
                    </IconButton>
                    <IconButton color={"primary"} onClick={onCloseModal}>
                        <Close fontSize={"small"} />
                    </IconButton>
                </div>
            </div>
            <InputBase type="text"
                       placeholder="Enter your title..."
                       defaultValue={title}
                       className={styles.modalTitle__input}
                       onChange={(e) => setTitle(e.target.value)}/>
        </div>
    );
};

interface ModalFooterProps {
    isDisabled: boolean,
    onSubmit:() => void
}

export const ModalFooter: React.FC<ModalFooterProps> = ({isDisabled, onSubmit}) => {
    return (
        <div className={styles.modalFooter}>
            <Button disabled={isDisabled}
                    variant={"contained"}
                    onClick={onSubmit}
            >
                Public
            </Button>
        </div>
    )
}

export const WriteFormLayout:React.FC<any> = ({children}) => {
    return (
        <div className={styles.modalMain}>{children}</div>
    )
}