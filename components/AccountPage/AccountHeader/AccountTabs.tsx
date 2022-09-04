import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useAccountContext} from "../../../context/AccountContext";

const AccountTabs = () => {
    const {currentTabIndex, handlerSetCurrentTabIndex} = useAccountContext()
    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTabIndex} onChange={handlerSetCurrentTabIndex}>
                    <Tab label="Posts" value={"posts"}/>
                    <Tab label="Comments" value={"comments"}/>
                    <Tab label="More" value={"more"}/>
                </Tabs>
            </Box>
        </Box>
    );
};

export default AccountTabs;