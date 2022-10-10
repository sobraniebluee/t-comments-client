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

const HideBranchCommentContext = React.createContext<ICommentContext>(null)


const HideBranchCommentContextProvider: React.FC<CommentContextProviderProps> = ({children}) => {
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
    return (
        <HideBranchCommentContext.Provider value={{idsHideBranch, handlerHideBranch, isHideElement}}>
            {children}
        </HideBranchCommentContext.Provider>
    );
};

export const useHideBranchContext = () => {
    return useContext(HideBranchCommentContext)!
}

export default HideBranchCommentContextProvider;