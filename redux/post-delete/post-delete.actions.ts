import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api} from "../../api/api";
import {ErrorResponse} from "../../utils/types";

export const deletePost = createAsyncThunk(
    'delete-post',
    async (id: number, thunkApi) => {
        try {
            const {status} = await Api().post.delete(id)
        } catch (err: any) {
            let error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            return thunkApi.rejectWithValue(error.response.data.message)
        }
    }
)