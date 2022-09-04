import React from 'react';
import styles from "../PostComments.module.scss";
import {CommentsLevels} from "../Comment";
import Branch from "./Branch";
// import {dataBranchesLevels} from "../Comment";
interface BranchesProps {
    currentCompLevel: number,
    dataBranchesLevels?: CommentsLevels[]
}

const Branches: React.FC<BranchesProps> = ({currentCompLevel,dataBranchesLevels}) => {
    // console.log(dataBranchesLevels)
    console.log("Component Child: ", dataBranchesLevels)

    return (
        // <div className={styles.commentBranches}>
        //     {
        //         Array(currentCompLevel).fill(0).map((_, index) => {
        //             if (index < 9) {
        //                 let currentLevelBranch = index + 1
        //                 let branchData = branchesLevels.find(item => item.level == currentLevelBranch)
        //                 let isDraw = false
        //                 if (branchData) {
        //                     // if branch length more than 0 and branch is not last then draw this branch level else we must delete this data from branchLevels array for recalculation
        //                     if (branchData.lengthBranch > 0 && !branchData.isLast) {
        //                         isDraw = true
        //                         branchData.lengthBranch = branchData.lengthBranch - 1
        //                     } else {
        //                         branchesLevels.splice(branchesLevels.indexOf(branchData))
        //                     }
        //                 }
        //                 return <Branch isDraw={isDraw}
        //                                currentIterLevel={index}
        //                                currentCompLevel={currentCompLevel}
        //                                rootBranch={branchData?.rootBranch || null}/>
        //             }
        //         })
        //     }
        // </div>
        <>
            {
                Array(currentCompLevel).fill(0).map((_, index) => {
                    if (index < 9) {
                        let currentLevelBranch = index + 1
                        let branchData = dataBranchesLevels.find(item => item.level == currentLevelBranch)
                        let isDraw = false
                        if (branchData) {
                            if (branchData.lengthBranch > 0 && !branchData.isLast) {
                                isDraw = true
                                branchData.lengthBranch = branchData.lengthBranch - 1
                            } else {
                                dataBranchesLevels.splice(dataBranchesLevels.indexOf(branchData))
                            }
                        }
                        return <Branch key={Math.random().toString(12)}
                                       isDraw={isDraw}
                                       currentIterLevel={index}
                                       currentCompLevel={currentCompLevel}
                                       rootBranch={branchData?.rootBranch || null}/>
                    }
                })
            }
        </>
    )
}


export default Branches;