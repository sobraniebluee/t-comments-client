import React from 'react';
import styles from './Loaders.module.scss'
import {Paper} from "@mui/material";

export const PaginationLoader: React.FC = () => {
    return (
        <Paper elevation={0} className={styles.paginationLoader}>
            <div className={styles.loadingDots}>
                <div className={styles.loadingDots__dot}></div>
                <div className={styles.loadingDots__dot}></div>
                <div className={styles.loadingDots__dot}></div>
            </div>
        </Paper>
    );
};

