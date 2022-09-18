/**
 * Context for hide comment on branch by adding idComment into @idsHideBranch
 * */

import React, {useContext} from 'react';

type BranchIds = { rootId: number, idsChild: number[] }

interface ICommentContext {
    idsHideBranch: BranchIds[]
    handlerHideBranch: (param: BranchIds) => void
    isHideElement: (id: number) => boolean
}

interface CommentContextProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const CommentContext = React.createContext<ICommentContext>(null)


const CommentContextProvider: React.FC<CommentContextProviderProps> = ({children}) => {
    const [idsHideBranch, setIdHideBranch] = React.useState<BranchIds[]>([])

    const handlerHideBranch = (branchIds: BranchIds) => {
        if (branchIds.idsChild == null) {
            setIdHideBranch(prevState => [...prevState.filter(item => item.rootId != branchIds.rootId)])
            return
        }
        setIdHideBranch(prevState => [...prevState, branchIds])
    }
    const isHideElement = (id: number) => {
        return idsHideBranch.filter(item => item.idsChild.includes(id)).length > 0
    }
    // React.useEffect(() => {
    //     console.log(idsHideBranch)
    // }, [idsHideBranch])
    return (
        <CommentContext.Provider value={{idsHideBranch, handlerHideBranch, isHideElement}}>
            {children}
        </CommentContext.Provider>
    );
};

export const useCommentContext = () => {
    return useContext(CommentContext)!
}

export default CommentContextProvider;