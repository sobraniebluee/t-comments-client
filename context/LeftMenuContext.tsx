import React, {createContext, useContext} from 'react'

interface ILeftMenuProvider {
    children: React.ReactNode[] | React.ReactNode
}
interface IContext {
    isHideMenu: boolean,
    setHideMenu:((param: boolean) => void)
}

export const leftMenuContext = createContext<IContext>({isHideMenu: false, setHideMenu: () => {}})

const LeftMenuProvider: React.FC<ILeftMenuProvider> = ({children}) => {
    const [value, setValue] = React.useState<boolean>(false)

    React.useEffect(() => {
        let storedItem = window.localStorage.getItem('hideMenu')
        if (storedItem !== null) {
            setHideMenu(JSON.parse(storedItem))
        }
    }, [])
    const setHideMenu = (isHide: boolean): void => {
        setValue(isHide)
        window.localStorage.setItem('hideMenu', JSON.stringify(isHide))
    }

    return (
        <leftMenuContext.Provider value={{isHideMenu: value, setHideMenu}}>
            {children}
        </leftMenuContext.Provider>
    )
}

export const useLeftMenuContext = () => {
    return useContext(leftMenuContext)
}
export default LeftMenuProvider