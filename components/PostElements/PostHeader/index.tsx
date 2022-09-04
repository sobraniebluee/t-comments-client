import React from 'react';
import styles from "../../PostPreview/PostPreview.module.scss";
import Link from "next/link";
import {Typography} from "@mui/material";
import {timeHasPassed} from "../../../utils/timeHasPassed";
import {useAppDispatch, useTypedSelector} from "../../../redux/hooks";
import MenuHeader from "./MenuHeader";
import {useRouter} from "next/router";
import {deletePost} from "../../../redux/action-creators/post";
import {resetDeleteState} from "../../../redux/slice/post-delete";
import {useWriteFormContext} from "../../../context/WriteFormContext";
import {UserAvatar} from "../../Header/AccountMenu";
import {getRandomColor} from "../../../utils/utils";
import {NoSsr} from "@mui/base";

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

    let [createdAt, setCreatedAt] = React.useState<string>('')

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

     React.useEffect(() => {
        setCreatedAt(timeHasPassed(created_at))
    }, [created_at])


    return (
        <div className={styles.header}>
            <div className="d-flex align-center pb-20">
                <Link href={`../u/${author.username}`}>
                    <a className={styles.contentUser}>
                            <UserAvatar
                                username={author.username}
                                width={20}
                                height={20}
                                classNames={styles.contentUser__avatar}
                                styles={{fontSize: "14px"}}
                                background={getRandomColor()}
                            />
                        <span className={styles.contentUser__title}>{author.username}</span>
                    </a>
                </Link>
                <Typography color={"secondary"} className="ml-20">{createdAt}</Typography>
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