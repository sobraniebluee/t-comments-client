import React from 'react';
import styles from "./PostElements/PostActions/PostActions.module.scss";
import AuthRequired from "./AuthRequired";
import {IconButton} from "@mui/material";
import {KeyboardArrowDownRounded as VoteDownIcon, KeyboardArrowUpRounded as VoteUpIcon} from "@mui/icons-material";
import clsx from "clsx";
import {useSendVotes} from "../hooks/useVotes";

// myVote: type: 0 = "Vote null" | 1 = "Vote Up" | 2 = "Vote Down"

export enum VoteTypeEnum {
    "NULL" = 0,
    "UP" = 1,
    "DOWN" = -1
}

interface VoteProps {
    id: number,
    rating: number | null,
    isMyVote: VoteTypeEnum,
    sendVote: (id, type: "like" | "unlike") => void
}

const Vote: React.FC<VoteProps> = ({id, rating, isMyVote, sendVote}) => {
    let sumRating = rating !== null ? rating : null
    const [currentVote, setCurrentVote] = React.useState<VoteTypeEnum>(isMyVote)
    const [ratingPost, setRatingPost] = React.useState<number | null>(sumRating)

    const handlerToggleVote = async (type: VoteTypeEnum) => {
        if ((type == VoteTypeEnum.DOWN && currentVote == VoteTypeEnum.DOWN) ||
            (type == VoteTypeEnum.UP && currentVote == VoteTypeEnum.UP)) {
            setRatingPost(
                (isMyVote != 0 && ratingPost != null)
                    ?
                        type ? (ratingPost - type) : (ratingPost + type)
                    :
                        sumRating
            )
            setCurrentVote(VoteTypeEnum.NULL)
        }
        if (type == VoteTypeEnum.DOWN && currentVote == VoteTypeEnum.NULL) {
            setRatingPost(prevState =>  prevState != null ? prevState + type : type)
            setCurrentVote(VoteTypeEnum.DOWN)
        }
        if (type == VoteTypeEnum.UP && currentVote == VoteTypeEnum.NULL) {
            setRatingPost(prevState =>  prevState != null ? prevState + type : type)
            setCurrentVote(VoteTypeEnum.UP)
        }
        if (type == VoteTypeEnum.DOWN && currentVote == VoteTypeEnum.UP) {
            setRatingPost(prevState =>  prevState != null ? prevState + (type * 2) : type)
            setCurrentVote(VoteTypeEnum.DOWN)
        }
        if (type == VoteTypeEnum.UP && currentVote == VoteTypeEnum.DOWN) {
            console.log(ratingPost)
            setRatingPost(prevState => prevState != null ? prevState + (type * 2) : type)
            setCurrentVote(VoteTypeEnum.UP)
        }
        await sendVote(id, type == VoteTypeEnum.UP ? "like" : "unlike")
    }

    return (
         <div className={styles.postActionsVote}>
             <AuthRequired onClick={() => handlerToggleVote(VoteTypeEnum.DOWN)}>
                        <IconButton>
                            <VoteDownIcon className={clsx(currentVote == VoteTypeEnum.DOWN && styles.postActionsList__active_down_vote)} fontSize={"small"}/>
                        </IconButton>
             </AuthRequired>
             <div className={styles.voteCount}>
                 { (ratingPost !== null)
                    ?  <span data-positive={(ratingPost > 0 ? "true" : "false")}>
                         {ratingPost}
                       </span>
                     : <span>&#8211;</span>
             }
             </div>
             <AuthRequired onClick={() => handlerToggleVote(VoteTypeEnum.UP)}>
                 <IconButton>
                     <VoteUpIcon className={clsx(currentVote == VoteTypeEnum.UP && styles.postActionsList__active_up_vote)} fontSize={"small"}/>
                 </IconButton>
             </AuthRequired>
         </div>
    );
};

export default Vote;



