import React, {useContext} from 'react';

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

    const handlerOpen = (id) => {
        setIdCommentForOpen(id)
    }
    const handlerClose = () => {
        setIdCommentForOpen(null)
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