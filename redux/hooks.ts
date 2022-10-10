import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, RootDispatch} from "./store";
import {useMemo} from "react";
import {bindActionCreators} from "redux";

export const useAppDispatch = () => useDispatch<RootDispatch>()

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAction = (action) => {
    const dispatch = useAppDispatch()
    return bindActionCreators(action, dispatch)
}