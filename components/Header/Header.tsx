import React from 'react';
import {useAppDispatch, useTypedSelector} from "../../redux/hooks";
import {useLeftMenuContext} from "../../context/LeftMenuContext";
import {Button, IconButton, Paper} from "@mui/material";
import styles from './Header.module.scss'
import {AccountCircleOutlined as UserIcon, Menu, NotificationsOutlined as NotificationIcon} from '@mui/icons-material';
import Link from 'next/link';
import {Logo} from "../Icons";
import WriteForm from "../WriteForm";
import clsx from "clsx";
import AuthDialog from "../AuthDialog";
import {userLogoutThunk} from "../../redux/user/user.actions";
import {useAuthDialogContext} from "../../context/AuthDialogContext";
import AuthRequired from "../AuthRequired";
import {useWriteFormContext} from "../../context/WriteFormContext";
import AccountMenu from './AccountMenu';
import HeaderLoader from "../Loaders/HeaderLoader";
import {NoSsr} from "@mui/base";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
    const dispatch = useAppDispatch()
    const {isAuth, data} = useTypedSelector((state) => state.user)
    const [isReloadAccess, setReloadAccess] = React.useState(false)
    // AuthDialog context
    const {isAuthDialogOpen, handlerOpenAuthDialog, handlerCloseAuthDialog} = useAuthDialogContext()!
    // FormWrite context
    const {idPost,isOpenWriterForm, handlerOpenWriteForm, handlerCloseWriteForm} = useWriteFormContext()!
    // LeftMenu context
    const {isHideMenu, setHideMenu} = useLeftMenuContext()

    const onToggleLeftMenu = () => {
        setHideMenu(!isHideMenu)
    }

    const logoutHandler = () => {
        dispatch(userLogoutThunk())
        setReloadAccess(true)
    }
    // Close Auth Dialog when user is login
    React.useEffect(() => {
        if (isAuth && isAuthDialogOpen) {
            handlerCloseAuthDialog()
        }
    }, [isAuth])

    // Reload when user logout
    React.useEffect(() => {
        if (!isAuth && isReloadAccess) {
            window.location.reload()
        }
    },[data])

    return (
       <Paper classes={{ root: styles.root }} elevation={0}>
            <div className="d-flex align-center">
                    <IconButton onClick={onToggleLeftMenu}>
                      <Menu />
                    </IconButton>
                    <Link href="/">
                      <a>
                        <Logo classNames="mr-20" />
                      </a>
                    </Link>
            </div>
            <div className="d-flex align-center">
                <AuthRequired onClick={handlerOpenWriteForm}>
                   <Button variant="contained"
                           className={clsx(styles.penButton, "ml-10")}>
                       New Post
                   </Button>
                </AuthRequired>
                <AuthRequired onClick={() => {}}>
                    <IconButton>
                        <NotificationIcon color={"primary"}/>
                    </IconButton>
                </AuthRequired>
                { isAuth && data ?
                    <AccountMenu
                        username={data?.username}
                        logoutHandler={logoutHandler}
                    />
                    :
                    <Button className={styles.loginButton}
                            onClick={handlerOpenAuthDialog}
                    >
                        <UserIcon/>
                        Log in
                    </Button>
                }
           </div>
               { isOpenWriterForm &&
                   <WriteForm idPost={idPost}
                              isOpenWriterForm={isOpenWriterForm}
                              handlerCloseWriteForm={handlerCloseWriteForm}/>
               }
               { (isAuthDialogOpen && !isAuth) &&
                   <AuthDialog isOpenAuthDialog={isAuthDialogOpen}
                               onCloseHandler={handlerCloseAuthDialog}
                    />
               }
           <NoSsr>
            <HeaderLoader/>
           </NoSsr>
        </Paper>
    );
};

export default Header;