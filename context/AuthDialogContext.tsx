import React, {useContext} from 'react'
import {useAppDispatch, useTypedSelector} from "../redux/hooks";
import {closeAuthDialog, openAuthDialog} from "../redux/slice/ui";

interface AuthDialogContextProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

interface IAuthDialogContext {
    isAuthDialogOpen: boolean,
    handlerOpenAuthDialog: () => void,
    handlerCloseAuthDialog: () => void
}

const AuthDialogContext = React.createContext<IAuthDialogContext | null>(null)


const AuthDialogContextProvider: React.FC<AuthDialogContextProviderProps> = ({children}) => {

    const {isOpen: isAuthDialogOpen} = useTypedSelector((state) => state.ui.authDialog)
    const dispatch = useAppDispatch()

    const handlerOpenAuthDialog = () => {
        dispatch(openAuthDialog())
    }
    const handlerCloseAuthDialog = () => {
        dispatch(closeAuthDialog())
    }

    return (
        <AuthDialogContext.Provider value={{isAuthDialogOpen, handlerOpenAuthDialog, handlerCloseAuthDialog}}>
            {children}
        </AuthDialogContext.Provider>
    )
}

export const useAuthDialogContext = () => {
    return useContext(AuthDialogContext)
}

export default AuthDialogContextProvider