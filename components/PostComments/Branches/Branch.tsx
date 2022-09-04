import React from 'react';
import clsx from "clsx";
import styles from "../PostComments.module.scss";
import {useBranchContext} from "../../../context/BranchContext";

interface BranchProps {
    isDraw: boolean,
    currentIterLevel: number,
    currentCompLevel: number
    rootBranch: number | null
}

const Branch: React.FC<BranchProps> = ({isDraw, currentIterLevel, currentCompLevel, rootBranch}) => {

    const {idActiveBranch, handlerIdActiveBranch} = useBranchContext()
    const handlerMouseEnter = () => {
        handlerIdActiveBranch(rootBranch)
    }
    const handlerMouseLeave = () => {
        handlerIdActiveBranch(null)
    }
    return (
        <div
            onMouseEnter={handlerMouseEnter}
            onMouseLeave={handlerMouseLeave}
            data-branch={rootBranch}
            className={
                clsx(styles.commentBranches__content,
                    idActiveBranch == rootBranch && styles.active_branch,
                    (currentIterLevel != currentCompLevel - 1) && styles.hide,
                    `--level:${currentIterLevel + 1}`
                )
            }
            style={{height: `${isDraw ? 100 : 0}%`}}
        />
    );
};

export default Branch;