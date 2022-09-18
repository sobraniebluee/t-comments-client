import React from 'react';
import styles from "./Loaders.module.scss";
import clsx from "clsx";

interface LoadingDotsProps {
    classNameParent?: string
    classNameChildren?: string
}

const LoadingDots: React.FC<LoadingDotsProps> = ({classNameParent, classNameChildren}) => {
    return (
        <div className={clsx(styles.loadingDots, classNameParent)}>
            <div className={clsx(styles.loadingDots__dot, classNameChildren)}></div>
            <div className={clsx(styles.loadingDots__dot, classNameChildren)}></div>
            <div className={clsx(styles.loadingDots__dot, classNameChildren)}></div>
        </div>
    );
};

export default LoadingDots;