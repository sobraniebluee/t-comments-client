import React from 'react';
import styles from './PostActions.module.scss'
import Vote, {VoteTypeEnum} from '../../Vote';
import ListPostActions from "./ListPostActions";
import {useSendVotes} from "../../../hooks/useVotes";

interface IPostAction {
    id: number
    rating: number | null,
    commentsCount: number,
    is_voted: VoteTypeEnum
}

const PostActions: React.FC<IPostAction> = ({id, rating,commentsCount, is_voted}) => {
    const {sendVote} = useSendVotes()
    return (
        <div className={styles.postActions}>
            <ListPostActions
                commentsCount={commentsCount}/>
            <Vote id={id}
                  rating={rating}
                  isMyVote={is_voted}
                  sendVote={sendVote}
            />
        </div>
    );
};

export default PostActions;