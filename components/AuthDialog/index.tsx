import React from 'react';
import {IconButton, Modal, Paper, Typography} from "@mui/material";
import styles from "./AuthDialog.module.scss";
import MainWindow from "./Windows/MainWindow";
import {RegisterWindow} from "./Windows/RegisterWindow";
import {LoginWindow} from "./Windows/LoginWindow";
import {ArrowBackIosNewRounded, CloseRounded} from "@mui/icons-material";

export type AuthFormTypes = "__LOGIN__" | "__REGISTER__"
export type WindowTypes = "__MAIN__" | "__LOGIN__" | "__REGISTER__"
type WindowNodes = {[key: string]: React.ReactNode}

interface AuthDialogProps {
    isOpenAuthDialog: boolean,
    onCloseHandler: () => void
}

const AuthDialog: React.FC<AuthDialogProps> = ({isOpenAuthDialog, onCloseHandler}) => {
    const [authFormType, setAuthFormType] = React.useState<AuthFormTypes>("__LOGIN__")
    const [activeWindow, setActiveWindow] = React.useState<WindowTypes>("__MAIN__")

    const handlerActiveWindow = (windowType: WindowTypes) => {
        setActiveWindow(windowType)
        if (windowType == "__LOGIN__") {
            setAuthFormType("__LOGIN__")
        }
        if (windowType == "__REGISTER__") {
            setAuthFormType("__REGISTER__")
        }
    }

    const windows: WindowNodes  = {
        "__MAIN__" :<MainWindow authFormType={authFormType}
                                 setActiveWindow={handlerActiveWindow}
                                 switchAuthType={() => setAuthFormType(prevState => prevState == "__LOGIN__" ? "__REGISTER__" : "__LOGIN__")}/>,
        "__REGISTER__":<RegisterWindow setActiveWindow={handlerActiveWindow}/>,
        "__LOGIN__":<LoginWindow setActiveWindow={handlerActiveWindow}/>
    }

    return (
        <Modal open={isOpenAuthDialog} onClose={onCloseHandler} className={styles.modal}>
            <Paper elevation={0} className={styles.modalContent}>
                <div className={styles.wrap}>
                    <div className={styles.modalClose}>
                        <IconButton onClick={onCloseHandler}>
                            <CloseRounded fontSize="medium" color={"secondary"}/>
                        </IconButton>
                    </div>
                    <div className={styles.modalBackTitle}>
                        {activeWindow != "__MAIN__" &&
                            <section className="d-flex align-center" onClick={() => setActiveWindow ('__MAIN__')}>
                                <ArrowBackIosNewRounded fontSize="small" color={"secondary"}/>
                                <Typography fontSize="small" color={"secondary"}>Back</Typography>
                            </section>
                        }
                    </div>
                    <div className={styles.modalWindowLayout}>
                        <div className={styles.modalTitle}>
                            <Typography
                                variant={"h4"}>{authFormType === "__LOGIN__" ? "Login account" : "Register"}</Typography>
                        </div>
                        {windows[activeWindow]}
                    </div>
                </div>
            </Paper>
        </Modal>
    );
};

export default AuthDialog;