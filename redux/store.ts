import {configureStore, ThunkAction, Action, combineReducers} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {userReducer} from './slice/user'
import {postWrite} from "./slice/post-write";
import {UIReducer} from "./slice/ui";
import {postDeleteReducer} from "./slice/post-delete";

const makeStore = () => {
    return configureStore({
        // preloadedState: {},
        reducer: {
            user:userReducer,
            post:combineReducers({
                write:postWrite,
                delete:postDeleteReducer
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
