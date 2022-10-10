import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment, IPagination} from "../../utils/types";
import {createCommentForPost, fetchCommentsForPost} from "./post-comments.actions";
import {findRootComment} from "../../utils/utils";

interface LoadingCreateComment {
    idRootComment: number | null,
    isLoading: boolean
}

interface CreateComment {
    loadingCreateComment: LoadingCreateComment
    message: string | null
    isCreated:boolean,
}

interface PostCommentsState {
    isLoading: boolean
    comments: IComment[]
    pagination?: IPagination
    message: string | null,
    create: CreateComment
}

const initialState: PostCommentsState = {
    isLoading: false,
    comments: [],
    message: null,
    create: {
        loadingCreateComment: {
            idRootComment: null,
            isLoading: false
        },
        message: null,
        isCreated: false
    }
}

const postCommentsSlice = createSlice({
    name: "post-comments",
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        },
        setIdLoadingCreate: (state, action: PayloadAction<number | null>) => {
            state.create.loadingCreateComment.idRootComment = action.payload
        },
        resetCreateComments: (state) => {
            state.create.isCreated = false
        },
    },
    extraReducers: {
        [fetchCommentsForPost.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchCommentsForPost.fulfilled.type]: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
            state.isLoading = false
            state.message = null
        },
        [fetchCommentsForPost.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.message = action.payload
        },
        [createCommentForPost.pending.type]: (state) => {
            state.create.loadingCreateComment.isLoading = true
            state.create.isCreated = false
        },
        [createCommentForPost.fulfilled.type]: (state, action: PayloadAction<IComment[]>) => {
            state.create.loadingCreateComment.isLoading = false
            state.create.isCreated = true
            state.comments = [...action.payload]
        },
        [createCommentForPost.rejected.type]: (state, action: PayloadAction<string>) => {
            state.create.loadingCreateComment.isLoading = false
            state.message = action.payload
            state.create.isCreated = false
            console.log(action.payload)

        }
    }
})

export const {setComments, setIdLoadingCreate, resetCreateComments} = postCommentsSlice.actions
export const postCommentsReducer =  postCommentsSlice.reducer
