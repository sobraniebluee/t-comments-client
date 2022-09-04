import React from 'react';
import {Button, Paper, Typography} from "@mui/material";
import {PersonAddAlt1Outlined} from "@mui/icons-material";
import {IPost} from "../../utils/types";
import PostHeader from "../PostElements/PostHeader";
import styles from "../PostPreview/PostPreview.module.scss";
import PostActions from "../PostElements/PostActions";
import PostBody from "../PostElements/PostBody";
import clsx from "clsx";
import Link from 'next/link';
import {NoSsr} from "@mui/base";
import {UserAvatar} from "../Header/AccountMenu";
import {getRandomColor} from "../../utils/utils";


const PostFull: React.FC<IPost> = ({id, title, description, author,created_at, rating, is_voted}) => {
    return (
        <NoSsr>
            <Paper elevation={0} className="p-20" classes={{root: clsx(styles.paper, styles.paperFull)}}>
            <Paper elevation={0} classes={{root: clsx(styles.paper__content)}}>
                <PostHeader id={id}
                            title={title}
                            author={author}
                            created_at={created_at}
                />
                <PostBody
                    blocks={description}
                    isFull={true}
                />
                <Typography color={"secondary"} className={styles.paper__watches}>1234 watches</Typography>
                <PostActions
                    id={id}
                    rating={rating}
                    commentsCount={12}
                    is_voted={is_voted}
                />
                <div className={styles.paper__content__user}>
                    <Link href={`../u/${author.username}`}>
                        <a className={styles.paper__content__userInfo}>
                            <UserAvatar username={author.username}
                                        width={40}
                                        height={40}
                                        background={getRandomColor()}
                            />
                            <span>{author.username}</span>
                        </a>
                    </Link>
                    <div className={styles.paper__content__userButtons}>
                        <Button variant={"contained"}>
                            <PersonAddAlt1Outlined/>
                            Follow
                        </Button>
                    </div>
                </div>
            </Paper>
        </Paper>
        </NoSsr>
    );
};

export default PostFull;