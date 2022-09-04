import React from "react";
import {Button, NoSsr, Paper, Typography} from "@mui/material";
import {MessageOutlined, SettingsOutlined} from "@mui/icons-material"
import styles from './Account.module.scss'
import {UserAvatar} from "../../Header/AccountMenu";
import {getRandomColor} from "../../../utils/utils";
import AccountTabs from "./AccountTabs";

interface AccountHeaderProps {
    username: string,
    isMyAndAuth: boolean
}


const AccountHeader: React.FC<AccountHeaderProps> = React.memo(({username, isMyAndAuth}) => {

    return (
        <Paper elevation={0} className={styles.accountHeader}>
            <div className={styles.top}>
                <NoSsr>
                    <UserAvatar username={username}
                                width={120}
                                height={120}
                                background={getRandomColor()}
                                classNames={styles.userAvatar}
                    />
                </NoSsr>
                <div className={styles.top__info}>
                    <Typography variant={"h2"}>{username}</Typography>
                    <Typography>Rating <span data-positive="true">+5</span></Typography>
                </div>
                <div className={styles.top__buttons}>
                    { isMyAndAuth &&
                        <Button variant={"contained"}>
                            <SettingsOutlined/>
                        </Button>
                    }
                    <Button variant={"contained"} className="defaultButton">
                        <MessageOutlined fontSize={'small'}/>
                        Message
                    </Button>
                </div>
            </div>
            <AccountTabs/>
        </Paper>
    )
})

AccountHeader.displayName = "AccountHeader"

export default AccountHeader;