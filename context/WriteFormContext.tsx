import React, {useContext} from 'react';
import {useAppDispatch, useTypedSelector} from "../redux/hooks";
import {closeWriteForm, openWriteForm} from "../redux/ui/ui.slice";
import {resetWriteState} from "../redux/post-write/post-write.slice";

interface IWriteFormContext {
    idPost: number | null,
    isOpenWriterForm: boolean,
    handlerOpenWriteForm: (id?: number) => void,
    handlerCloseWriteForm: () => void
}

interface WriteFormContextProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const WriteFormContext = React.createContext<IWriteFormContext | null>(null)

const WriteFormContextProvider: React.FC<WriteFormContextProviderProps> = ({children}) => {
    const dispatch = useAppDispatch()
    const {isOpen: isOpenWriterForm} = useTypedSelector((state) => state.ui.writeForm)
    const [idPost, setIdPost] = React.useState<number | null>(null)
    const handlerOpenWriteForm = (id?: number) => {
        setIdPost(id!)
        dispatch(openWriteForm())
    }
    const handlerCloseWriteForm = () => {
        dispatch(closeWriteForm())
        dispatch(resetWriteState())
    }
    return (
        <WriteFormContext.Provider
            value={{
                idPost,
                isOpenWriterForm,
                handlerOpenWriteForm,
                handlerCloseWriteForm
            }}>
            {children}
        </WriteFormContext.Provider>
    );
};


export const useWriteFormContext = () => {
    return useContext(WriteFormContext)
}

export default WriteFormContextProvider;