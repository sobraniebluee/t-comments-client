import React, {useContext} from 'react';
import {useAppDispatch} from "../redux/hooks";
import {setIdLoadingCreate} from "../redux/post-comments/post-comments.slice";

interface ICommentFormContext {
    idComment: number | null,
    handlerOpen: (id: number) => void,
    handlerClose: () => void
}
interface CommentFormContextProps {
    children: React.ReactNode | React.ReactNode[]
}

const CommentFormContext = React.createContext<ICommentFormContext | null>(null)

const CommentFormContextProvider: React.FC<CommentFormContextProps> = ({children}) => {
    const [idComment,setIdCommentForOpen] = React.useState<null>(null)
    const dispatch = useAppDispatch()

    const handlerOpen = (id) => {
        setIdCommentForOpen(id)
        dispatch(setIdLoadingCreate(id))
    }
    const handlerClose = () => {
        setIdCommentForOpen(null)
        dispatch(setIdLoadingCreate(null))
    }

    return (
        <CommentFormContext.Provider value={{idComment, handlerOpen, handlerClose}}>
            {children}
        </CommentFormContext.Provider>
    );
};

export const useCommentFormContext = () => {
    return useContext(CommentFormContext)!
}

export default CommentFormContextProvider;