import React from 'react';
import PostPreview from "../PostPreview";
import Link from "next/link";
import {Button} from "@mui/material";
import {IPost} from "../../utils/types";
import {useAction, useAppDispatch, useTypedSelector} from "../../redux/hooks";
import {fetchPostRecommends} from "../../redux/post-recommends/post-recommends.actions";
import {PaginationLoader} from "../Loaders/PaginationLoader";

interface PostRecommendsProps {
    recommends?: IPost[]
}

const PostRecommends: React.FC<PostRecommendsProps> = () => {
    const dispatch = useAppDispatch()
    const {isLoading, recommends} = useTypedSelector((state) => state.post_data.post_recommends)
    React.useState(() => {
        dispatch(fetchPostRecommends())
    })
    return (
        <div>
            <div className="content mt-20 mb-40">
                {
                    !isLoading
                        ?
                            recommends.map((post) => <PostPreview key={post.id} {...post}/>)
                        :
                            <PaginationLoader/>
                }
                <div className="d-flex align-center justify-center" style={{width:"100%"}}>
                    <Link href={"/"}>
                        <a>
                            <Button variant={"contained"} style={{padding:"8px 60px"}} className="defaultButton" >More</Button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostRecommends;