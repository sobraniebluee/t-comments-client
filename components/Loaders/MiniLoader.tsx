import React from 'react';
import styles from './Loaders.module.scss'
import LoadingDots from "./LoadingDots";

interface MiniLoaderProps {
    height?: number,
    style?: React.CSSProperties
}

const MiniLoader: React.FC<MiniLoaderProps> = ({height, style}) => {
    return (
        <div className={styles.wrapDotFlashing} style={{height: `${height}px`, ...style}}>
            <LoadingDots classNameChildren={styles.dotFlashing} classNameParent={styles.dotFlashings}/>
        </div>
    );
};

export default MiniLoader;