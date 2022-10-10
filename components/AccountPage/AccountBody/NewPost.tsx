import React from 'react';
import styles from "./AccountBody.module.scss";
import {IconButton, Paper, Typography} from "@mui/material";
import {Create} from "@mui/icons-material";
import {useWriteFormContext} from "../../../context/WriteFormContext";
import AuthRequired from "../../AuthRequired";

const NewPost: React.FC = () => {
    const {handlerOpenWriteForm} = useWriteFormContext()!
    return (
        <AuthRequired onClick={() => handlerOpenWriteForm()}>
            <Paper elevation={0} className={styles.newPost} >
                <IconButton>
                    <Create style={{color: "#27e"}}/>
                </IconButton>
                <Typography>New post...</Typography>
            </Paper>
        </AuthRequired>
    );
};

export default NewPost;