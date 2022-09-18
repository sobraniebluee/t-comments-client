import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api} from "../../api/api";
import {RequestAuthUser, RequestCreateUser, ErrorResponse} from "../../utils/types";
import {setCookie, destroyCookie} from "nookies";
import {NextPageContext} from "next";


export const userLoginThunk = createAsyncThunk(
    'login',
    async (userData: RequestAuthUser,thunk) => {
        try {
            const {data} = await Api().user.login(userData)
            saveTokens(data.jwt.access_token, data.jwt.refresh_token)
            return data.data
        } catch (err: any) {
            const error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunk.rejectWithValue(error.response.data.message)
        }
    })

export const userRegisterThunk = createAsyncThunk(
    'register',
    async (userData: RequestCreateUser, thunk) => {
        try {
            const {data} = await Api().user.register(userData)
            saveTokens(data.jwt.access_token, data.jwt.refresh_token)
            return data.data
        } catch (err: any) {
            const error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunk.rejectWithValue(error.response.data.message)
        }
    }
)


export const userLogoutThunk = createAsyncThunk(
    'logout',
    async (_, thunk) => {
        try {
            const result = await Api().user.logout()
            console.log(result)
            if (result.status == 204) {
                destroyCookie(null, 'access_token')
                destroyCookie(null, 'refresh_token')
            }
        } catch (err: any) {
            const error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunk.rejectWithValue(error.response.data.message)
        }
    }
)

export const userAuthThunk = createAsyncThunk(
    'auth',
    async (ctx: NextPageContext, thunkApi) => {
        try {
            const {data} = await Api(ctx).user.me()
            console.log(data, "thunk")
            return data
        } catch (err: any) {
            let error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            console.log("Sorry", error.response.data)
            return thunkApi.rejectWithValue("")
        }
    }
)

export const saveTokens = (access_token: string,refresh_token: string) => {
    setCookie(null,'access_token', access_token, {
        maxAge: 3600*24*30,
        path:'/'
    })
    setCookie(null,'refresh_token', refresh_token, {
        maxAge: 3600*24*30,
        path:'/'
    })
}