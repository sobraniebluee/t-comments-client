import React from 'react';
import {IconButton, Paper, Typography} from "@mui/material";
import styles from "./PostComments.module.scss";
import Comment, {CommentsLevels} from "./Comment";
import {TuneOutlined} from "@mui/icons-material";
import Index from "./BranchCommentForm/CommentForm";
import {NoSsr} from "@mui/base";
import {dataComments} from "../../utils/consts";
import {IComment} from "../../utils/types";
import {countCommentsDepth} from "../../utils/utils";
import CommentFormContextProvider from "../../context/CommentFormContext";
import usePagination from "../../hooks/usePagination";
import BranchContextProvider from "../../context/BranchContext";



interface PostCommentsProps {

}


const PostComments:React.FC<PostCommentsProps> = () => {
    const countComments = countCommentsDepth(dataComments)
    return (
        <Paper elevation={0} className={styles.postComments}>
            <Paper elevation={0} className="content">
                <div className={styles.postCommentsHeader}>
                    <Typography style={{fontSize: "20px", fontWeight:500}}>{countComments}&nbsp;{countComments == 1 ? `Comment` : 'Comments'} </Typography>
                    <div className={styles.postCommentsHeader__actions}>
                        <TuneOutlined color={"primary"} fontSize={"small"}/>
                    </div>
                </div>
                <Index/>
                <CommentFormContextProvider>
                    <BranchContextProvider>
                        <NoSsr>
                           {
                            dataComments.length > 0 &&
                               dataComments.map((item, index) => (
                                       <Comment key={(Math.random() * 100).toString()}
                                                id={item.id}
                                                author={item.author}
                                                created_at={item.created_at}
                                                text={item.text}
                                                level={0}
                                                rootAnswers={item.answers}
                                                dataBranchesLevels={[]}
                                       />
                               ))
                            }
                        </NoSsr>
                    </BranchContextProvider>
                </CommentFormContextProvider>
            </Paper>
        </Paper>
    );
};

export default PostComments;



// const RenderChildComments = (rootAnswers: IComment[], level, content: JSX.Element[] = [], levels: CommentsLevels[] = []) => {
//         {rootAnswers.length > 0 && rootAnswers.map(({id,author,text,created_at, answers}: IComment, index) => {
//                 // console.log("Length:", author.username, {level: level,length: countCommentsDepth(answers), isLast: children.length - 1 == index})
//             // console.log("rootAnswers",author.username, rootAnswers)
//             let nextAnswers = rootAnswers[index + 1] ? answers : []
//             levels.push({level: level, length: countCommentsDepth(nextAnswers), isLast: rootAnswers.length - 1 == index})
//             // console.log("Levels for Render",author.username, levels)
//
//             content.push(<Comment key={(Math.random() * 1000).toString()}
//                             id={id}
//                             author={author}
//                             created_at={created_at}
//                             text={text}
//                             level={level}
//                             levels={levels}
//             />);
//
//             answers.length > 0 && RenderChildComments(answers,level + 1,content,levels)
//         })}
//         // console.log(levels)
//         return content
//     }
