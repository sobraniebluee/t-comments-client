import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {wrapper} from "../../redux/store";
import {GetServerSideProps} from "next";

const Follows = () => {
    return (
        <MainLayout>
            follows
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

export default Follows;