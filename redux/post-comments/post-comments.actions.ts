import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api} from "../../api/api";
import {CreateComment, ErrorResponse} from "../../utils/types";

export const fetchCommentsForPost = createAsyncThunk(
    'fetch-comments-for-post',
    async (id: number, thunkApi) => {
        try {
            const {data} = await Api().comments.getAllForPost(id as number)
            return data
        } catch (err: any) {
            let error: ErrorResponse = err
            if (!error.response) {
                throw error
            }
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    })

export const createCommentForPost = createAsyncThunk(
    'create-comment',
    async (dataComment: CreateComment, thunkApi) => {
        try {
            const {data} = await Api().comments.createCommentForPost(dataComment)
            return data
        } catch (e: any) {
            let error: ErrorResponse = e
            if (!error.response) {
                throw e
            }
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)