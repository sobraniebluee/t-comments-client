import React from 'react';
import {OutputBlockData, OutputData} from "@editorjs/editorjs";
import styles from './PostBody.module.scss'
import { Typography } from '@mui/material';

interface PostBodyProps {
    blocks: OutputData['blocks']
    isFull?: boolean
}

const PostBody: React.FC<PostBodyProps> = ({blocks,isFull}) => {
    const contentBlocks = isFull ? blocks : blocks.slice(0, 5)
    return (
        <div className={styles.postBody}>
            {
                contentBlocks.map((block: OutputBlockData) => {
                    return <Typography key={block.id}
                                       style={{wordBreak:"break-word", marginTop:"20px"}}
                                       variant={(block.type == "headers") ? `h${block.data.level as 1 | 2}` : "body1"}
                                       dangerouslySetInnerHTML={{__html: block.data.text}}
                    />
                })
            }
        </div>
    );
};

export default PostBody;