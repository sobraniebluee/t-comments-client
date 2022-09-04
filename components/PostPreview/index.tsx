import React from 'react';
import {IPost} from "../../utils/types";
import {Paper} from "@mui/material";
import styles from './PostPreview.module.scss'
import PostActions from "../PostElements/PostActions";
import PostHeader from "../PostElements/PostHeader";
import Link from 'next/link';
import dynamic from "next/dynamic";
import {NoSsr} from "@mui/base";
// @ts-ignore
const PostBody = dynamic(() => import("../PostElements/PostBody").then(el => el.default), {ssr: false})

const PostPreview: React.FC<IPost> = ({id,title,description,author,created_at,updated_at,rating, is_voted}) => {
    return (
        <NoSsr>
            <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
                <PostHeader id={id} title={title} author={author} created_at={created_at} />
                <Link href={`/new/${id}`}>
                    <a>
                        <PostBody blocks={description} isFull={false}/>
                    </a>
                </Link>
                <PostActions id={id} commentsCount={999} rating={rating} is_voted={is_voted}/>
            </Paper>
        </NoSsr>
    );
};

export default PostPreview;