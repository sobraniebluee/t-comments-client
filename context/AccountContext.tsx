import React, {useContext} from 'react';
import {useTypedSelector} from "../redux/hooks";
import {useRouter} from "next/router";

export type hashTabs = 'posts' | 'comments' | 'more'


interface AccountContext {
    isMyAndAuth: boolean
    currentTabIndex: hashTabs,
    handlerSetCurrentTabIndex: (e: React.SyntheticEvent, index: hashTabs) => void
}
interface AccountContextProviderProps {
    children: React.ReactNode | React.ReactNode[]
    userId: string
}


const AccountContext = React.createContext<AccountContext | null>(null)

const AccountContextProvider: React.FC<AccountContextProviderProps> = ({children, userId}) => {
    const router = useRouter()
    // const initialIndex = window.location.hash.replace("#", "") as hashTabs
    const {data} = useTypedSelector((state) => state.user)
    const [currentTabIndex, setCurrentTabIndex] = React.useState<hashTabs>(false || "posts")

    const handlerSetCurrentTabIndex = React.useCallback((e: React.SyntheticEvent, index: hashTabs) => {
        setCurrentTabIndex(index)
        router.push(`${window.location.pathname}#${index}`)
    }, [])

    return (
        <AccountContext.Provider value={{
            isMyAndAuth: !!(data && (data.id == userId)),
            currentTabIndex,
            handlerSetCurrentTabIndex}}
        >
            {children}
        </AccountContext.Provider>
    );
};

export const useAccountContext = () => {
    return useContext(AccountContext)!
}

export default AccountContextProvider;