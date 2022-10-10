import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api} from "../../api/api";
import {CreateComment, ErrorResponse} from "../../utils/types";
import axios from "axios";

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
            const data = await Api().comments.createCommentForPost(dataComment)
            return data?.data
        } catch (err: any) {
            console.log(err)
            let error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)