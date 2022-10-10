import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api} from "../../api/api";
import {ErrorResponse, PostCreateRequest, PostUpdateRequest} from "../../utils/types";

export const fetchOnePost = createAsyncThunk(
    'get-one-post',
    async (id: number | string, thunkApi) => {
        try {
            const {data} = await Api().post.getOne(id)
            return data
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.response.data.message)
        }
    }
)

export const createPost = createAsyncThunk(
    'create-post',
    async (data: PostCreateRequest, thunkApi) => {
        try {
            const response = await Api().post.create(data)
            return response.data
        } catch (err: any) {
            console.log(err)
            const error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)

export const updatePost = createAsyncThunk(
    'update-post',
    async (data: PostUpdateRequest,thunkApi) => {
        try {
            const response = await Api().post.update(data.id, {...data})
            return response.data
        } catch (err: any) {
            const error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)
