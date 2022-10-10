import React from 'react';
import AccountHeader from "./AccountHeader";
import AccountTabPanel from "./AccountTabPanel";
import AccountPosts from "./AccountBody/AccountPosts";
import AccountComments from "./AccountBody/AccountComments";
import {useAccountContext} from "../../context/AccountContext";
import {IPost, PaginationResponse, ResponseUser} from "../../utils/types";

interface AccountPageProps {
    user: ResponseUser,
    posts: PaginationResponse<IPost[]>
}


const AccountPage: React.FC<AccountPageProps> = ({user, posts}) => {
    const {isMyAndAuth, currentTabIndex} = useAccountContext()
    // console.log(posts, user)
    return (
        <>
            <AccountHeader username={user.username}
                           isMyAndAuth={isMyAndAuth}
            />
            <AccountTabPanel value={currentTabIndex} index={"posts"}>
                <AccountPosts isMyAndAuth={isMyAndAuth}
                              initPosts={posts.items}
                              initPagination={posts.pagination}
                              username={user.username}/>
            </AccountTabPanel>
            <AccountTabPanel value={currentTabIndex} index={"comments"}>
                <AccountComments/>
            </AccountTabPanel>
        </>
    )
}


export default AccountPage;