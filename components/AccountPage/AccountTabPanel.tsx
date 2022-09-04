import React from "react";
import {hashTabs} from "../../context/AccountContext";

interface TabPanelProps {
  children?: React.ReactNode;
  index: hashTabs;
  value: hashTabs;
}

const AccountTabPanel: React.FC<TabPanelProps> = ({children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
}

export default AccountTabPanel