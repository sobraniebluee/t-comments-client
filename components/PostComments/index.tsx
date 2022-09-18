import React from 'react';
import {Paper, Typography} from "@mui/material";
import styles from "./PostComments.module.scss";
import Comment from "./Comment";
import {TuneOutlined} from "@mui/icons-material";
import CommentForm from "./BranchCommentForm/CommentForm";
import {NoSsr} from "@mui/base";
import {IComment} from "../../utils/types";
import {countCommentsDepth} from "../../utils/utils";
import CommentFormContextProvider from "../../context/CommentFormContext";
import BranchContextProvider from "../../context/BranchContext";
import CommentContextProvider from "../../context/CommentContext";
import {useAppDispatch, useTypedSelector} from "../../redux/hooks";
import {fetchCommentsForPost} from "../../redux/post-comments/post-comments.actions";
import {PaginationLoader} from "../Loaders/PaginationLoader";


interface PostCommentsProps {
    idPost: number
    dataComments?: IComment[]
}

const PostComments:React.FC<PostCommentsProps> = ({idPost}) => {
    const [countComments, setCountComments] = React.useState<number>(0)
    const dispatch = useAppDispatch()
    const dataComments = useTypedSelector((state) => state.post_data.post_comments.comments)
    const isLoading = useTypedSelector((state) => state.post_data.post_comments.isLoading)
    const message = useTypedSelector((state) => state.post_data.post_comments.message)

    React.useEffect(() => {
        dispatch(fetchCommentsForPost(idPost))
    }, [idPost])

    React.useEffect(() => {
        if (!isLoading && !message) {
            setCountComments(countCommentsDepth(dataComments))
        }
    }, [dataComments])

    return (
        <Paper elevation={0} className={styles.postComments}>
            <Paper elevation={0} className="content">
                <div className={styles.postCommentsHeader}>
                    <Typography style={{fontSize: "20px", fontWeight:500}}>{countComments}&nbsp;{countComments == 1 ? `Comment` : 'Comments'} </Typography>
                    <div className={styles.postCommentsHeader__actions}>
                        <TuneOutlined color={"primary"} fontSize={"small"}/>
                    </div>
                </div>
                { !isLoading
                    ?
                    <>
                    <CommentFormContextProvider>
                        <BranchContextProvider>
                                <CommentForm isClosable={false}
                                             idRoot={null}
                                             isReply={false}
                                             idPost={idPost}
                                />
                                <NoSsr>
                                    {
                                        dataComments.length > 0 &&
                                            dataComments.map((item, index) => (
                                                <CommentContextProvider key={index}>
                                                    <Comment key={(Math.random() * 100).toString()}
                                                             id={item.id}
                                                             author={item.author}
                                                             created_at={item.created_at}
                                                             text={item.text}
                                                             level={0}
                                                             rootAnswers={item.answers}
                                                             dataBranchesLevels={[]}
                                                             isLast={item.answers.length == 0}
                                                    />
                                                </CommentContextProvider>
                                            ))
                                        }
                                </NoSsr>
                            </BranchContextProvider>
                        </CommentFormContextProvider>
                    </>
                    :
                    <PaginationLoader/>
                }
            </Paper>
        </Paper>
    );
};

export default PostComments;



