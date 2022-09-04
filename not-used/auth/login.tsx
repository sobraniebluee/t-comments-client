// import React from "react";
// import {GetServerSideProps, NextPage} from "next";
// // import styles from '../../styles/Login.module.scss'
// // import {Button, Alert, Typography} from "@mui/material";
// // import {FormProvider, useForm} from "react-hook-form";
// // import { yupResolver } from '@hookform/resolvers/yup';
// // import InputField from "../../components/FormElements/InputField";
// // import {useAppDispatch, useTypedSelector} from "../../redux/hooks";
// // import {userLoginThunk} from "../../redux/action-creators/user";
// // import Router from "next/router";
// // import {wrapper} from "../../redux/store";
// // import {validateSchema} from "../../utils/validators";
// // import {CreateUser} from "../../types";
//
// const Login:NextPage = () => {
//     // const dispatch = useAppDispatch()
//     // const {isAuth, message ,loading} = useTypedSelector((state) => state.user)
//     // const form = useForm<CreateUser>({
//     //     mode:"onBlur",
//     //     resolver:yupResolver(validateSchema),
//     //     reValidateMode:"onChange"
//     // })
//     // const onSubmit = (data: CreateUser) => {
//     //     dispatch(userLoginThunk(data))
//     // }
//     // React.useEffect(() => {
//     //     if (isAuth) {
//     //         Router.push('/')
//     //     }
//     // }, [isAuth])
//     return (
//         <>
//         {/*<Typography variant={'h4'} align={"center"}>Login</Typography>*/}
//         {/*    <FormProvider {...form}>*/}
//         {/*        <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>*/}
//         {/*            {*/}
//         {/*                (message && !loading) && <Alert severity="error">{message}</Alert>*/}
//         {/*            }*/}
//         {/*            <InputField name={"username"} label={"Username"}/>*/}
//         {/*            <InputField name={"password"} label={"Password"}/>*/}
//         {/*            <Button variant="contained" color="primary" type="submit">*/}
//         {/*                save*/}
//         {/*            </Button>*/}
//         {/*        </form>*/}
//         {/*    </FormProvider>*/}
//         </>
//     );
// }
// //
// // export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
// //     const isAuth = store.getState().user.isAuth
// //     if (isAuth) {
// //         return {
// //             redirect: {
// //                 destination:'/',
// //                 permanent: false
// //             }
// //         }
// //     }
// //     return {
// //         props: {}
// //     }
// // })
//
// export default Login

export {}