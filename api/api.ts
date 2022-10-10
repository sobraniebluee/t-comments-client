import Cookies, {destroyCookie, parseCookies} from 'nookies'
import axios from "axios";
import {GetServerSidePropsContext, NextPageContext} from "next";
import {userApi} from "./user";
import {saveTokens} from "../redux/user/user.actions";
import {postApi} from "./post";
import {memberApi} from "./member";
import {commentsApi} from "./comments";

const BASE_URl = 'http://127.0.0.1:5001/api/v1/'

export type ApiReturnType = {
    user: ReturnType<typeof userApi>,
    post: ReturnType<typeof postApi>,
    member: ReturnType<typeof memberApi>
    comments: ReturnType<typeof commentsApi>
}

export const Api = (ctx?: GetServerSidePropsContext | NextPageContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = {access_token: cookies.access_token || '', refresh_token:cookies.refresh_token || '' }
    const Apis = {
        user: userApi,
        post: postApi,
        member: memberApi,
        comments: commentsApi
    }
    const instance = axios.create({
        baseURL:BASE_URl,
        headers: {
            ContentType:'application/json',
        },
        withCredentials:true
    })
    instance.interceptors.request.use((config) => {
        if (config.headers && token.access_token) {
            config.headers.Authorization = 'Bearer ' + token.access_token
        }
        return config
    }, (error) => {
        console.log("Error", error)
        return Promise.reject(error)
    })
    instance.interceptors.response.use(
        (config) => config,
        async (err) => {
            const originalRequested = err.config
            if (err.response.status == 401 && token.refresh_token) {
                try {
                    const {data} = await axios.get(`${BASE_URl}user/refresh`,{
                        headers:{
                            Authorization: `Bearer ${token.refresh_token}`
                        }
                    })
                    const {access_token, refresh_token} = data
                    if (access_token && refresh_token) {
                        saveTokens(access_token, refresh_token)
                        token.access_token = access_token
                        token.refresh_token = refresh_token
                        return instance.request(originalRequested)
                    }
                } catch (e: any) {
                    console.log(e.response)
                    destroyCookie(null, 'access_token')
                    destroyCookie(null, 'refresh_token')
                    return Promise.reject(err)
                }
            }
            return Promise.reject(err)
        })

    // console.log(ctx)
    return Object.entries(Apis).reduce((prev,[key,f]) => {
        return {
            ...prev,
            [key]: f(instance)
        }
    }, {} as ApiReturnType)
}

