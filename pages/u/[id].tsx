import {GetServerSidePropsContext, NextPage} from "next";
import MainLayout from "../../layouts/MainLayout";
import {IPost, PaginationResponse, ResponseUser} from "../../utils/types";
import {Api} from "../../api/api";
import AccountContextProvider from "../../context/AccountContext";
import React from "react";
import AccountPage from "../../components/AccountPage";
import {NoSsr} from "@mui/base";

interface UserPage {
    user: ResponseUser,
    posts: PaginationResponse<IPost[]>
}

const User: NextPage<UserPage> = ({user, posts}) => {
    return (
        <MainLayout contentFullWidth={true}>
                <AccountContextProvider userId={user.id}>
                    <AccountPage user={user}
                             posts={posts}
                    />
                </AccountContextProvider>
        </MainLayout>
    );
};


export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    console.log("rerender user")
    const {id: username} = ctx.query
    try {
        const {data: dataUser} = await Api(ctx).member.getMember(username as string)
        const {data: dataUserPosts} = await Api(ctx).member.getMemberPosts(username as string)

        return {
            props: {
                user: dataUser,
                posts: dataUserPosts
            }
        }
    } catch (e) {
        return {
            redirect: {
                destination: "/",
                fallback:false
            }
        }
    }
}

export default User;