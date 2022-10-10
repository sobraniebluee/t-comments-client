import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {ResponseUser} from "../../utils/types";
import {userAuthThunk, userLoginThunk, userLogoutThunk, userRegisterThunk} from "./user.actions";


interface IUserState {
    isAuth: boolean,
    data: ResponseUser | null
    message:string | null
    loading:boolean
}

const initialState: IUserState = {
    isAuth: false,
    data:null,
    message: null,
    loading:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserData: (state, action: PayloadAction<ResponseUser>) => {
            state.data = action.payload
            state.message = null
            state.loading = false
            state.isAuth = true
        },
        setErrorMessage: (state,action: PayloadAction<string>) => {
            state.message = action.payload
            state.loading = false
            state.isAuth = false
        },
        setLoading: (state) => {
            state.loading = true
            state.message = null
            state.isAuth = false
        }
    },
    extraReducers:{
        [HYDRATE]: (state,action) => {
            if (JSON.stringify({...state}) != JSON.stringify({...action.payload.user})) {
                return {...action.payload.user}
            }
        },
        [userLoginThunk.pending.type]: (state) => {
            userSlice.caseReducers.setLoading(state)
        },
        [userLoginThunk.fulfilled.type]: (state, action: PayloadAction<ResponseUser>) => {
            userSlice.caseReducers.setUserData(state, action)
        },
        [userLoginThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            userSlice.caseReducers.setErrorMessage(state, action)
        },
        [userRegisterThunk.pending.type]: (state) => {
            userSlice.caseReducers.setLoading(state)
        },
        [userRegisterThunk.fulfilled.type]: (state, action: PayloadAction<ResponseUser>) => {
            userSlice.caseReducers.setUserData(state, action)
        },
        [userRegisterThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            userSlice.caseReducers.setErrorMessage(state, action)
        },
        [userAuthThunk.pending.type]: (state) => {
            userSlice.caseReducers.setLoading(state)
        },
        [userAuthThunk.fulfilled.type]: (state, action: PayloadAction<ResponseUser>) => {
            userSlice.caseReducers.setUserData(state, action)
        },
        [userAuthThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            userSlice.caseReducers.setErrorMessage(state, action)
        },
        [userLogoutThunk.pending.type]: (state) => {
            userSlice.caseReducers.setLoading(state)
        },
        [userLogoutThunk.fulfilled.type]: (state) => {
            state.loading = false
            state.data = null
            state.message = null
            state.isAuth = false
        },
        [userLogoutThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.message = action.payload
            state.isAuth = false
            state.data = null
        },
    }
})


export const userReducer = userSlice.reducer
export const {setUserData, setErrorMessage} = userSlice.actions
