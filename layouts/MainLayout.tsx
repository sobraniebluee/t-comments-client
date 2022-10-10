import React from 'react';
import clsx from "clsx";
import LeftMenu from "../components/LeftMenu";
import {useLeftMenuContext} from "../context/LeftMenuContext";
import classNames from "classnames";

interface IMainLayout {
    children: React.ReactNode[] | React.ReactNode
    contentFullWidth?:boolean,
    className?: string,
    hideMenuProp?:boolean,
    classNameContent?: string
}

const MainLayout: React.FC<IMainLayout> = ({children,contentFullWidth,className, classNameContent}) => {
    const {isHideMenu} = useLeftMenuContext()

    return (
        <div className={clsx('wrapper')}>
            <div className={classNames("leftSide", {
                'hidden': isHideMenu
            })}>
                {!isHideMenu && <LeftMenu/>}
            </div>
            <div className={clsx('content',className, { 'content--full': contentFullWidth })}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;