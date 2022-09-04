import { LinearProgress } from '@mui/material';
import React from 'react';
import styles from './Loaders.module.scss'
import {Router} from "next/router";

const HeaderLoader = () => {
    const [visible, setVisible] = React.useState<boolean>(false)
    Router.events.on("routeChangeStart", () => {
        setVisible(true)
    })
    Router.events.on("routeChangeComplete", (evts, p) => {
        setVisible(false)
    })
    return (
        <>
            { visible &&
                <div className={styles.headerLoader}>
                    <LinearProgress/>
                </div>
            }
        </>
    );
};

export default HeaderLoader;