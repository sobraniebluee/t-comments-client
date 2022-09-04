import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {deletePost} from "../action-creators/post";

interface InitialState {
    isLoading:boolean,
    isDelete: boolean,
    error:string
}

const initialState: InitialState = {
    isLoading:false,
    isDelete: false,
    error:""
}

const postDeleteSlice = createSlice({
    name:'post-delete',
    initialState,
    reducers: {
        resetDeleteState: (state) => {
            state.isLoading = false
            state.isDelete =false
            state.error = ""
        }
    },
    extraReducers: {
        // [HYDRATE]: (state) => {
        //     return {
        //         ...state
        //     }
        // },
        [deletePost.pending.type]: (state) => {
            state.isLoading = true
        },
        [deletePost.fulfilled.type]: (state) => {
            state.isLoading = false
            state.isDelete = true
        },
        [deletePost.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const postDeleteReducer = postDeleteSlice.reducer
export const {resetDeleteState} = postDeleteSlice.actions