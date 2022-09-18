import React from 'react';
import PropTypes from 'prop-types';
import {timeHasPassed} from "../../../utils/timeHasPassed";
import {Typography} from "@mui/material";
interface CreatedAtProps {
    created_at: string
}
const CreatedAt: React.FC<CreatedAtProps> = ({created_at}) => {
    let [createdAt, setCreatedAt] = React.useState<string>('')

    React.useEffect(() => {
        setCreatedAt(timeHasPassed(created_at))
    }, [created_at])

    return (
        <Typography color={"secondary"} className="ml-20">{createdAt}</Typography>
    );
};

export default CreatedAt;