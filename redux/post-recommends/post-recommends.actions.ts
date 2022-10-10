import {createAsyncThunk} from "@reduxjs/toolkit";
import {ErrorResponse} from "../../utils/types";
import {Api} from "../../api/api";

export const fetchPostRecommends = createAsyncThunk(
    'fetch-post-recommends',
    async (_, thunkApi) => {
        try {
            const {data: {items}} = await Api().post.getAll(1, 10)
            return items
        } catch (err: any) {
            let error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)