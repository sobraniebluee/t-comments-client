import React from 'react';
import clsx from "clsx";
import styles from "../PostComments.module.scss";
import {useBranchContext} from "../../../context/BranchContext";
import {useHideBranchContext} from "../../../context/HideBranchCommentContext";
import {IComment} from "../../../utils/types";
import {hasOwnIds} from "../../../utils/utils";

interface BranchProps {
    id: number,
    isDraw: boolean,
    currentIterLevel: number,
    currentCompLevel: number
    rootBranchId: number | null
    idsChild: number[]
}

const Branch: React.FC<BranchProps> = ({id, isDraw, currentIterLevel, currentCompLevel, rootBranchId, idsChild}) => {

    const {idActiveBranch, handlerIdActiveBranch} = useBranchContext()
    const {idsHideBranch, handlerHideBranch} = useHideBranchContext()
    const isHide = idsHideBranch.filter(item => item.idsChild.includes(id))
    const handlerMouseEnter = () => {
        handlerIdActiveBranch(rootBranchId)
    }
    const handlerMouseLeave = () => {
        handlerIdActiveBranch(null)
    }
    const handlerOnHide = () => {
        handlerHideBranch({idsChild: idsChild, rootId: rootBranchId})
    }
    return (
        <div
            onMouseEnter={handlerMouseEnter}
            onMouseLeave={handlerMouseLeave}
            onClick={handlerOnHide}
            data-branch={rootBranchId}
            className={
                clsx(styles.commentBranches__content,
                    idActiveBranch == rootBranchId && styles.active_branch,
                    (currentIterLevel != currentCompLevel - 1) && styles.hide,
                    `--level:${currentIterLevel + 1}`,
                    isHide.length > 0 && styles.remove
                )
            }
            style={{height: `${isDraw ? 100 : 0}%`}}
        />
    );
};

export default Branch;