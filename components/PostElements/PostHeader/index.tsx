import React from 'react';
import styles from "../../PostPreview/PostPreview.module.scss";
import Link from "next/link";
import {Typography} from "@mui/material";
import {useAppDispatch, useTypedSelector} from "../../../redux/hooks";
import MenuHeader from "./MenuHeader";
import {useRouter} from "next/router";
import {deletePost} from "../../../redux/post-delete/post-delete.actions";
import {resetDeleteState} from "../../../redux/post-delete/post-delete.slice";
import {useWriteFormContext} from "../../../context/WriteFormContext";
import {UserAvatar} from "../../Header/AccountMenu";
import {getRandomColor} from "../../../utils/utils";
import CreatedAt from "./CreatedAt";

interface IPostHeader {
    id:number,
    title: string,
    author: {
        id: string
        username: string
    },
    created_at: string,
    isFullPost?: boolean
}

const PostHeader: React.FC<IPostHeader> = ({id, title, author, created_at, isFullPost}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const {handlerOpenWriteForm} = useWriteFormContext()!
    const data = useTypedSelector((state) => state.user.data)
    const {isDelete, isLoading} = useTypedSelector((state) => state.post.delete)



    const handleDeletePost = () => {
        if (window.confirm("You sure?")) {
            dispatch(deletePost(id))
        }
    }

    React.useEffect(() => {
        if (isDelete && !isLoading) {
            console.log("delete")
            router.push(window.location.pathname)
            dispatch(resetDeleteState())
        }
    }, [isDelete])




    return (
        <div className={styles.header}>
            <div className="d-flex align-center pb-20">
                <Link href={`../u/${author.username}`}>
                    <a className={styles.contentUser}>
                            <UserAvatar
                                userAvatar={author.username}
                                width={20}
                                height={20}
                                classNames={styles.contentUser__avatar}
                                styles={{fontSize: "14px"}}
                                background={getRandomColor()}
                            />
                        <span className={styles.contentUser__title}>{author.username}</span>
                    </a>
                </Link>
                <CreatedAt created_at={created_at} />
                <MenuHeader id={id}
                            isMyPost={data?.id == author.id}
                            onDeletePost={handleDeletePost}
                            onEditPost={() => handlerOpenWriteForm(id)}
                />
            </div>
            <Typography variant="h2" className={styles.header__title}>
                <Link href={`/new/${id}`}>
                  <a>{title}</a>
                </Link>
            </Typography>
        </div>
    );
};

export default PostHeader;