import React from 'react';
import {AccessTime as NewIcon, BookmarkBorder as BookmarkIcon,
    FollowTheSigns, TrendingUp as RatingIcon, List as FollowIcon} from "@mui/icons-material";
import MenuItem from "./MenuItem";
import styles from './LeftMenu.module.scss'
import {useRouter} from "next/router";
import classNames from "classnames";
import {useTypedSelector} from "../../redux/hooks";

const menu = [
    {
        text:"New",
        href:"/",
        icon:<NewIcon color={"secondary"}/>,
        auth_required:false
    },
    {
        text:"Rating",
        href:"/rating",
        icon:<RatingIcon color={"secondary"}/>,
        auth_required:false
    },
     {
        text:"Follows",
        href:"../u/follows",
        icon:<FollowIcon color={"secondary"}/>,
        auth_required:true
    },
    {
        text:"Bookmarks",
        href:"../u/bookmarks",
        icon:<BookmarkIcon color={"secondary"}/>,
        auth_required:true
    }
] as const;

interface ILeftMenu {
}

const LeftMenu: React.FC<ILeftMenu> = () => {
    const router = useRouter()
    const {isAuth} = useTypedSelector((state) => state.user)
    return (
        <div className={classNames(styles.menu)}>
          <ul>
            {menu.map(({href, text,icon,auth_required}) => {
                if (auth_required && auth_required == isAuth) {
                    return (<MenuItem
                        key={href + text}
                        path={href}
                        icon={icon}
                        text={text}
                        isContained={router.asPath === href.replace("..","")}/>)
                }
                if (!auth_required) {
                    return (<MenuItem
                        key={href + text}
                        path={href}
                        icon={icon}
                        text={text}
                        isContained={router.asPath === href.replace("..","")}/>)
                }
            }
            )}
          </ul>
        </div>

    );
};

export default LeftMenu;