import React from 'react'
import {useTypedSelector} from "../../redux/hooks";
import {useAuthDialogContext} from "../../context/AuthDialogContext";

interface AuthRequiredProps {
    children: React.ReactElement,
    onClick?: () => void
}

const AuthRequired: React.FC<AuthRequiredProps> = ({children,onClick}) => {
    const {isAuth} = useTypedSelector((state) => state.user)
    const {handlerOpenAuthDialog} = useAuthDialogContext()!
    const newChildren = React.cloneElement(children, {
        onClick:isAuth ? onClick : handlerOpenAuthDialog
    })
    return (
        <>
            {newChildren}
        </>
    )
}

export default AuthRequired

