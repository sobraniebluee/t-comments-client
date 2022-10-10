import React from 'react';
import {Button} from "@mui/material";
import Link from 'next/link'
import styles from 'components/LeftMenu/LeftMenu.module.scss'
interface IMenuItem {
    path: string,
    icon: string | React.ReactNode
    text: string,
    isContained: boolean
}

const MenuItem: React.FC<IMenuItem> = ({path, icon, text, isContained}) => {

    return (
        <li key={path}>
            <Link href={path}>
              <a>
                <Button variant={isContained ? 'contained' : 'text'} >
                  {icon}
                  {text}
                </Button>
              </a>
            </Link>
          </li>
    );
};

export default MenuItem;