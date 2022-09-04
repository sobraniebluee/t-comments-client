import React from 'react'
import MainLayout from "../../layouts/MainLayout";
import {GetServerSideProps, NextPage} from "next";
import {wrapper} from "../../redux/store";

const Bookmarks: NextPage = ({}) => {
    return (
        <MainLayout className={"p-20"}>
            {

            }
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (_) => {
            const { isAuth } = store.getState().user
            if (!isAuth) {
                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
            return {
                props: {}
            }
})

export default Bookmarks;