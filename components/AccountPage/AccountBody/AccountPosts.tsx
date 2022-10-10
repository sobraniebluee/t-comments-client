import React from 'react';
import {Button, IconButton, Paper, Typography} from "@mui/material";
import styles from './AccountBody.module.scss'
import {Create} from "@mui/icons-material";
import {IPagination, IPost} from "../../../utils/types";
import PostPreview from "../../PostPreview";
import useScrollPagination from "../../../hooks/usePagination";
import {useWriteFormContext} from "../../../context/WriteFormContext";
import {PaginationLoader} from "../../Loaders/PaginationLoader";
import { fetchUserPosts } from '../../../api/fetchHooks';
import NewPost from "./NewPost";

interface AccountBodyProps {
    username: string,
    initPosts?: IPost[],
    initPagination: IPagination
    isMyAndAuth: boolean
}


const AccountPosts: React.FC<AccountBodyProps> = ({isMyAndAuth, initPosts, initPagination, username}) => {
      const {items: posts, isLoading} = useScrollPagination<IPost>({
        fetchCallback:fetchUserPosts,
        initParamsFetch: [username],
        initialItems: initPosts,
        initialPagination: initPagination
    })
    return (
        <div className={styles.accountBody}>
            { isMyAndAuth &&
                <NewPost/>
            }
            { !isLoading && posts &&
                ((posts.length > 0) ?
                    <Button variant={"contained"} style={{margin: "15px 0 25px 0"}}>
                        <Typography variant={"h6"} style={{fontWeight: "500"}}>Popular</Typography>
                    </Button>
                    :
                    <Paper elevation={0} className={styles.notPosts}>
                        <Typography>No posts yet...😔</Typography>
                    </Paper>)
            }
            {
                posts && posts.map((post) => <PostPreview key={post.id} {...post} />)
            }
            {
                isLoading && <PaginationLoader/>
            }
        </div>
    );
};

export default AccountPosts;