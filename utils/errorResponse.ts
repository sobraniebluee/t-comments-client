import {ErrorResponse} from "./types";
import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {RootState} from "../redux/store";
import {Dispatch} from "redux";
import {RejectedWithValueActionFromAsyncThunk} from "@reduxjs/toolkit/dist/matchers";

export const errorResponse = <E>(err: any, thunkApi: BaseThunkAPI<RootState, any, Dispatch, E>): RejectedWithValueActionFromAsyncThunk<any> => {
    let error: ErrorResponse<E> = err
    if (!error.response) {
        throw err
    }
    return thunkApi.rejectWithValue(error.response.data.message)
}