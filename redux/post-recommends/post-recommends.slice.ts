import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../utils/types";
import {fetchPostRecommends} from "./post-recommends.actions";

interface IPostRecommendsState {
    recommends: IPost[],
    isLoading: boolean,
    message: string | null
}

const initialState: IPostRecommendsState = {
    recommends: [],
    isLoading: false,
    message: null,
}

const postRecommendsSlice = createSlice({
    name: "post-recommends",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPostRecommends.pending.type]: (state) => {
            state.isLoading = true
            state.recommends = []
            state.message = null
        },
        [fetchPostRecommends.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false
            state.recommends = action.payload
            state.message = null
        },
        [fetchPostRecommends.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.message = action.payload
            state.recommends = []
        }
    }
})

// export const {} = postRecommendsSlice.actions
export const postRecommendsReducer =  postRecommendsSlice.reducer
