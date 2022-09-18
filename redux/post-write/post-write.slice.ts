import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../utils/types";
import {createPost, fetchOnePost, updatePost} from "./post-write.actions";

interface PostWriteState {
    isNew:boolean,
    isLoading:boolean,
    data: IPost | null
    error:string
    isCommit: boolean
}

const initialState: PostWriteState = {
    isNew:true,
    isLoading:false,
    data:null,
    error:'',
    isCommit: false
}

const postSliceWrite = createSlice({
    name:'post',
    initialState,
    reducers: {
        resetState: (state) => {
            state.isLoading = false
            state.isCommit = false
            state.data = null
            state.error = ''
            state.isNew = true
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
    extraReducers: {
        [fetchOnePost.pending.type]: (state) => {
            state.isCommit = false
            state.isLoading = true
            state.data = null
        },
        [fetchOnePost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.isNew = false
            state.data = action.payload
            state.isLoading = false
        },
        [fetchOnePost.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isNew = true
            state.isLoading = false
        },
        [createPost.pending.type]: (state) => {
            state.isLoading = true
        },
        [createPost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.isLoading = false
            state.data = action.payload
            state.isCommit = true
        },
        [createPost.rejected.type]: (state, action: PayloadAction<string>) => {
             state.isLoading = false
             state.error = action.payload
        },
        [updatePost.pending.type]: (state) => {
             state.isLoading = true
        },
        [updatePost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
            state.isCommit = true
            state.isLoading = false
            state.data = action.payload
        },
        [updatePost.rejected.type]: (state, action: PayloadAction<string>) => {
             state.isLoading = false
             state.error = action.payload
        }
    }
})


export const postWrite = postSliceWrite.reducer
export const {setError, resetState: resetWriteState} = postSliceWrite.actions