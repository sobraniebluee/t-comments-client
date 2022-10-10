import {GetServerSideProps, NextPage} from "next";
import {Api} from "../../api/api";
import {IComment, IPost} from "../../utils/types";
import MainLayout from "../../layouts/MainLayout";
import PostFull from "../../components/PostFull";
import PostComments from "../../components/PostComments";
import {wrapper} from "../../redux/store";
import PostRecommends from "../../components/PostRecommends";

interface FullPostProps {
    post: IPost,
}

const Post:NextPage<FullPostProps> = ({post}) => {
    return (
        <MainLayout contentFullWidth={true}>
            <PostFull {...post}/>
            <PostComments idPost={post.id}/>
            <PostRecommends/>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps<FullPostProps> = wrapper.getServerSideProps((store) =>
    async (ctx) => {
        try {
            const {id} = ctx.query
            const {data: post} = await Api(ctx).post.getOne(id as string)
            return {
                props: {
                    post: post,
                }
            }
        } catch (e) {
            return {
                redirect: {
                    destination:"/404",
                    permanent:false
                }
            }
        }
})

export default Post