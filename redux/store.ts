import {configureStore, ThunkAction, Action, combineReducers} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {userReducer} from './user/user.slice'
import {postWrite} from "./post-write/post-write.slice";
import {UIReducer} from "./ui/ui.slice";
import {postDeleteReducer} from "./post-delete/post-delete.slice";
import {postRecommendsReducer} from "./post-recommends/post-recommends.slice";
import {postCommentsReducer} from "./post-comments/post-comments.slice";


const makeStore = () => {
    return configureStore({
        reducer: {
            user:userReducer,
            post:combineReducers({
                write:postWrite,
                delete:postDeleteReducer
            }),
            post_data: combineReducers({
                post_comments: postCommentsReducer,
                post_recommends: postRecommendsReducer
            }),
            ui:UIReducer,
        }
    })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type RootDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
    >;

export const wrapper = createWrapper<RootStore>(makeStore, {debug:false});
