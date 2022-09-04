import {GetServerSideProps, NextPage} from "next";
import {Api} from "../../api/api";
import {IPost} from "../../utils/types";
import MainLayout from "../../layouts/MainLayout";
import PostFull from "../../components/PostFull";
import PostComments from "../../components/PostComments";
import PostPreview from "../../components/PostPreview";
import Link from "next/link";
import {Button} from "@mui/material";

interface FullPostProps {
    post: IPost,
    recommends: IPost[],
    comments: any[]
}

const Post:NextPage<FullPostProps> = ({post, recommends, comments}) => {
    return (
        <MainLayout contentFullWidth={true}>
            <PostFull {...post}/>
            <PostComments/>
            <div className="content mt-20 mb-40">
                {
                    recommends && recommends.map((post) => <PostPreview key={post.id} {...post}/>)
                }
                <div className="d-flex align-center justify-center" style={{width:"100%"}}>
                    <Link href={"/"}>
                        <a>
                            <Button variant={"contained"} style={{padding:"8px 60px"}} className="defaultButton" >More</Button>
                        </a>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps<FullPostProps> = async (ctx) => {
    try {
        const {id} = ctx.query
        const {data} = await Api(ctx).post.getOne(id as string)
        const {data: recommends} = await Api(ctx).post.getAll(1,10)
        console.log(recommends.items[0].author)
        return {
            props: {
                post: data,
                recommends: recommends.items,
                comments: []
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

}

export default Post