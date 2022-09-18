import type {GetServerSideProps, NextPage} from 'next'
import React from "react";
import MainLayout from "../layouts/MainLayout";
import {IPost} from '../utils/types';
import PostPreview from "../components/PostPreview";
import {Api} from "../api/api";
import {useScrollPagination} from "../hooks/usePagination";
import {PaginationLoader} from "../components/Loaders/PaginationLoader";
import {fetchAllPosts} from "../api/fetchHooks";
import {Divider, Typography} from "@mui/material";
import NewPost from "../components/AccountPage/AccountBody/NewPost";

interface INew {
    items: IPost[]
    pagination: any
}


const Index: NextPage<INew> = ({items, pagination}) => {
    const {items: posts, isLoading} = useScrollPagination<IPost>({
        fetchCallback:fetchAllPosts,
        initialPagination:pagination,
        initialItems:items
    })

    return (
        <>
            <MainLayout className="pt-20">
                <div className={"d-flex align-center mb-20"}>
                    <Typography variant={"h4"} className={"mr-20"}>Hello,</Typography>
                    <NewPost/>
                </div>
                <Divider variant={"fullWidth"} className={"m-20"}/>

                    {
                        (posts) && posts.map((item) => {
                            return (<PostPreview key={item.id} {...item}/>)
                        })
                    }
                    {
                        isLoading && <PaginationLoader/>
                    }
            </MainLayout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        let {data} = await Api(ctx).post.getAll()
        return {
            props: {
                ...data
            }
        }
    } catch (e) {
        console.log(e, "Error fetch")
        return {props: {}}
    }
}


export default Index

