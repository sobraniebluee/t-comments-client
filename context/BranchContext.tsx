import React, {useContext} from 'react';

interface IBranchContext {
    idActiveBranch: any,
    handlerIdActiveBranch: (id: number) => void
}


interface BranchContextProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const BranchContext = React.createContext<IBranchContext>(null)


const BranchContextProvider: React.FC<BranchContextProviderProps> = ({children}) => {
    const [idActiveBranch, setIdActiveBranch] = React.useState<number>(null)

    const handlerIdActiveBranch = (id: number) => {
        setIdActiveBranch(id)
    }

    return (
        <BranchContext.Provider value={{idActiveBranch, handlerIdActiveBranch}}>
            {children}
        </BranchContext.Provider>
    );
};

export const useBranchContext = () => {
    return useContext(BranchContext)!
}

export default BranchContextProvider;