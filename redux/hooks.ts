import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, RootDispatch} from "./store";

export const useAppDispatch = () => useDispatch<RootDispatch>()

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector