import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {wrapper} from "../redux/store";
import {setUserData} from "../redux/user/user.slice";
import {Api} from "../api/api";
import Head from "next/head";
import {ThemeProvider} from "@mui/material";
import theme from "../utils/theme";
import Header from "../components/Header/Header";
import React from "react";
import LeftMenuProvider from "../context/LeftMenuContext";
import AuthDialogContext from "../context/AuthDialogContext";
import WriteFormContextProvider from "../context/WriteFormContext";


function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>TComments</title>
        </Head>
        <ThemeProvider theme={theme}>
                <WriteFormContextProvider>
                    <AuthDialogContext>
                        <LeftMenuProvider>
                            <Header/>
                            <Component {...pageProps}/>
                        </LeftMenuProvider>
                    </AuthDialogContext>
                </WriteFormContextProvider>
        </ThemeProvider>
      </>
  )
}

App.getInitialProps = wrapper.getInitialAppProps((store) =>
    async ({ctx,Component}) => {
      try {
        const userData = await Api(ctx).user.me()
        store.dispatch(setUserData(userData.data))
      } catch (e: any) {
          console.log(e.message)
      }
  return {
    pageProps: {
      data: Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}
    }
  }
})

export default wrapper.withRedux(App)

