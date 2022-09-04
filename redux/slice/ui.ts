import { createSlice } from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper";

interface IAuthDialog {
    isOpen: boolean
}
interface IWriteForm {
    isOpen: boolean
}

interface UIState {
    authDialog: IAuthDialog,
    writeForm: IWriteForm
}

const initialState: UIState = {
    authDialog: {
        isOpen: false
    },
    writeForm: {
        isOpen: false
    }
}

const UISlice = createSlice({
    name:"ui",
    initialState,
    reducers:{
        openAuthDialog:(state) => {
            state.authDialog.isOpen = true
        },
        closeAuthDialog:(state) => {
            state.authDialog.isOpen = false
        },
        openWriteForm: (state) => {
            state.writeForm.isOpen = true
        },
        closeWriteForm: (state) => {
            state.writeForm.isOpen = false
        }
    },
    extraReducers: {
        // [HYDRATE]: (state) => {
        //     console.log("HYDRATE UI")
        //     return {...state}
        // }
    }
})


export const UIReducer = UISlice.reducer
export const {openAuthDialog, closeAuthDialog, openWriteForm, closeWriteForm} = UISlice.actions

