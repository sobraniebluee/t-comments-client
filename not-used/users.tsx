// import {GetServerSidePropsContext, NextPage} from "next";
// import axios, {Axios, AxiosPromise, AxiosResponse, AxiosResponseHeaders} from "axios";
// import Link from "next/link";
// import React from "react";
// import {CatchClause, ThrowStatement} from "@typescript-eslint/types/dist/generated/ast-spec";
// // import UserProfile from "../components/User/user-profile";
//

//
// const Users: NextPage<IUsers> = ({u}) => {
//     // const [fetchUsers, setUsers] = React.useState<IUser[]>([])
//     // const f = async () => {
//     //     let res = axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users/12")
//     //     return await res
//     // }
//     // React.useEffect( () => {
//     //
//     //     f().then((data ) => setUsers(data.data))
//     //         .catch((e) => console.log(e.message))
//     // },[])
//
//     return (
//         <div>
//             <div>
//                 <h1>Users</h1>
//                 <ul>
//                     {u.map((item) =>
//                         <UserProfile key={item.id} {...item}/>
//                     )}
//                     {/*{u.map((item:IUser, index) => <li key={item.id}><Link href={"/u/" + item.id}>{item.username}</Link></li>)}*/}
//                 </ul>
//             </div>
//         </div>
//     )
// }
//
// export async function getServerSideProps() {
//     const data = await axios.get<AxiosResponse<IUser[]>>("https://jsonplaceholder.typicode.com/users")
//     return {
//         props: {
//             u: data.data
//         }
//     }
// }
// export default Users;
//
//
// <main>
//            <p>hello</p>
//            <h1>{data ? data.username : 'False'}</h1>
//             {
//                 isAuth && <Button variant="contained" onClick={logOut}>logout</Button>
//             }
//            <Button onClick={() => me()}>Me</Button>
//             { !isAuth &&
//                 <div>
//                     <Button>
//                         <Link href="auth/register">
//                             <a>Register</a>
//                         </Link>
//                     </Button>
//                     <Button>
//                         <Link href="auth/login">
//                             <a>Login</a>
//                         </Link>
//                     </Button>
//                 </div>
//             }
//             </main>
import {VoteTypeEnum} from "../components/Vote";

export default function () {

}

 // const me = async () => {
    //     try {
    //         const data = await Api().user.me()
    //         console.log(data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // const logOut = () => {
    //     dispatch(userLogoutThunk())
    // }

 // {/*<IconButton>*/}
 //            {/*  <MessageIcon />*/}
 //            {/*</IconButton>*/}
 //            {/*<IconButton>*/}
 //            {/*  <NotificationIcon />*/}
 //            {/*</IconButton>*/}


import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import {StatusToggle} from "../utils/types";
import React from "react";
import {IComm} from "../components/PostComments/BranchCommentForm/CommentFormEditor";
import styles from "../components/PostComments/PostComments.module.scss";
import clsx from "clsx";
// import {useTypedSelector} from "../redux/hooks";
// import {wrapper} from "../redux/store";
//
//
// const MeProfile: NextPage = () => {
//     return (
//         <div>
//             kdk
//         </div>
//     )
// }
//
// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
//     const {user} = store.getState()
//     if (!user.data) {
//         return {
//             redirect: {
//                 destination:'/login',
//                 permanent:false
//             }
//         }
//     }
//     return {
//         props:{}
//     }
// })
//
// export default MeProfile


 // const voteUpHandler = () => {
 //        // if my vote don't exist is change for UP +1
 //        if (ratingPost.myVote.type == VoteTypeEnum.NULL) {
 //            setRatingPost({myVote: {type: VoteTypeEnum.UP} ,rating: sumRating + 1})
 //        }
 //        // if my vote exist and equal UP is change for NULL = init
 //        if (ratingPost.myVote.type == VoteTypeEnum.UP) {
 //            setRatingPost({myVote: {type: VoteTypeEnum.NULL} ,rating: initialRating})
 //        }
 //        // if my vote exist and equal DOWN is change for UP = init + 1
 //        if (ratingPost.myVote.type == VoteTypeEnum.DOWN) {
 //            setRatingPost({myVote: {type: VoteTypeEnum.UP} ,rating: initialRating !== null ? initialRating + 1 : 1})
 //        }
 //    }
 //    const voteDownHandler = () => {
 //        // if my vote don't exist is change for DOWN -1
 //        if (ratingPost.myVote.type == VoteTypeEnum.NULL) {
 //            setRatingPost({myVote: {type: VoteTypeEnum.DOWN} ,rating: sumRating - 1})
 //        }
 //        // if my vote exist and equal DOWN is change for NULL = init
 //        if (ratingPost.myVote.type == VoteTypeEnum.DOWN) {
 //            setRatingPost({myVote: {type: VoteTypeEnum.NULL} ,rating: initialRating})
 //        }
 //         // if my vote exist and equal UP is change for DOWN = init - 1
 //        if (ratingPost.myVote.type == VoteTypeEnum.UP) {
 //            setRatingPost({myVote: {type: VoteTypeEnum.DOWN} ,rating: initialRating !== null ? initialRating - 1 : -1})
 //        }
 //    }


    // const setToggleVote = (status_toggle: StatusToggle, type: VoteTypeEnum) => {
    //     switch (status_toggle) {
    //         case "change":
    //             if (type == VoteTypeEnum.UP) {
    //                 setCurrentVote(VoteTypeEnum.DOWN)
    //             }
    //             if (type == VoteTypeEnum.DOWN) {
    //                 setCurrentVote(VoteTypeEnum.UP)
    //             }
    //             setRatingPost(prevState => prevState ? prevState + (type * 2): type)
    //             break;
    //         case "create":
    //             if (type == VoteTypeEnum.UP) {
    //                 setCurrentVote(VoteTypeEnum.UP)
    //             }
    //             if (type == VoteTypeEnum.DOWN) {
    //                 setCurrentVote(VoteTypeEnum.DOWN)
    //             }
    //             setRatingPost(prevState => prevState ? prevState + type : type)
    //             break;
    //         case "remove":
    //             setCurrentVote(VoteTypeEnum.NULL)
    //             setRatingPost(
    //             (isMyVote != 0 && ratingPost)
    //                 ?
    //                     type ? (ratingPost - type) : (ratingPost + type)
    //                 :
    //                     sumRating)
    //             break;
    //     }
    // }

    // const getCursorPos = (): number => {
    //     const selection = document.getSelection()
    //         // setOffset(selection.anchorOffset)
    //         // @ts-ignore
    //         selection.modify("extend", "backward", "paragraphboundary");
    //         const pos = selection.toString().length;
    //
    //         // selection.removeAllRanges()
    //         if (selection.anchorNode !== undefined) {
    //             selection.collapseToEnd()
    //         }
    //         return pos
    // }
    //
    // const handlerChange = (e: any) => {
    //     setValue(e.target.innerHTML.replace(/<[^>]+>/, ""))
    // }
    //
    // React.useEffect(() => {
    //     if (value) {
    //         const regex = new RegExp(/<[^>]*>/g,)
    //         let result: IComm[] = []
    //         value.split(regex).forEach(item => {
    //             if (item.length > 0) {
    //                result.push({
    //                     data: item,
    //                     type: 'text'
    //                 })
    //             }
    //         })
    //         setDataComments(result)
    //     }
    // }, [value])
//
// {/*{(!isFocus && !value) && <Typography className={styles.placeholder}>Write comment....</Typography>}*/}
//                     {/*<div className={styles.commentFormEditor__editable}*/}
//                     {/*     contentEditable={true}*/}
//                     {/*     suppressContentEditableWarning*/}
//                     {/*     // dangerouslySetInnerHTML={{__html: value}}*/}
//                     {/*     onInput={(e) => handlerChange(e)}*/}
//                     {/*     ref={textRef}>*/}
//                     {/*</div>*/}

// const createNewRange = () => {
//         // if (textRef) {
//         //     let startNode = document.createTextNode("")
//         //     textRef.current.appendChild(startNode)
//         //     textRef.current.normalize()
//         //
//         //     const newRange = document.createRange()
//         //     // console.log(textRef.current.childNodes[0])
//         //     const selection = document.getSelection()
//         //     // newRange.setStart(newNode, offset)
//         //     // selection.removeAllRanges()
//         //     newRange.setStart(, offset)
//         //     selection.addRange(newRange)
//         //     selection.collapseToEnd()
//         //     console.log(textRef.current.childNodes[0])
//         //     console.log(textRef.current.childNodes)
//         // }
//     }
//     //
//     // React.useEffect(() => {
//     //     if (textRef) {
//     //         const range = document.getSelection().getRangeAt(0)
//     //         const selected = range.toString().length;
//     //         const preCaretRange = range.cloneRange();
//     //         preCaretRange.selectNodeContents(textRef.current);
//     //         preCaretRange.setEnd(range.endContainer, range.endOffset);
//     //         let caretOffset = preCaretRange.toString().length - selected;
//     //         console.log(caretOffset)
//     //         // const selection = window.getSelection()
//     //         const newRange = document.createRange()
//     //         // selection.removeAllRanges()
//     //         newRange.setStart(textRef.current.childNodes[0], caretOffset)
//     //         // selection.addRange(newRange)
//     //
//     //     }
//     // }, [])

/**
 * WORK CODE
 */

// <div className={styles.commentBranches}>
//                          {
//                              Array(level).fill(0).map((_, index) => {
//                                  if (index < 9) {
//                                      let currentLevelBranch = index + 1
//                                      let k = LEVELS.find(item => item.level == currentLevelBranch)
//                                      let isDraw = false
//                                      if (k) {
//                                          if (k.lengthBranch > 0 && !k.isLast) {
//                                              isDraw = true
//                                              k.lengthBranch = k.lengthBranch - 1
//                                          } else {
//                                              LEVELS.splice(LEVELS.indexOf(k))
//                                          }
//                                      }
//                                      return <div
//                                          key={Math.random().toString(12)}
//                                          data-branch={k?.rootBranch}
//                                          className={clsx(styles.commentBranches__content, (index != level - 1) && styles.hide, `--level:${index + 1}`)}
//                                          style={{height: `${isDraw ? 100 : 0}%`}}
//                                      />
//                                  }
//                              })
//                          }
//                 </div>


// idOpen={idOpen}
//                                  onOpen={() => handlers.onOpenCommentForm(item.id)}
//                                  onClose={() => handlers.onCloseCommentForm(null)}
//                                  handlers={handlers}

// {/*{*/}
//               {/*    answers.length > 0 && answers.map((item, index) =>*/}
//               {/*        <Comment key={(Math.random() * 100).toString()}*/}
//               {/*                                id={item.id}*/}
//               {/*                                author={item.author}*/}
//               {/*                                created_at={item.created_at}*/}
//               {/*                                text={item.text}*/}
//               {/*                                level={1}*/}
//               {/*                                isLast={index == (item.answers.length - 1)}*/}
//               {/*        />)*/}
//               {/*}*/}
//
// { level < 9 &&
//                 <div className={styles.commentBranch}>
//                     { level > 0 &&
//                         <div key={Math.random().toString(12)}
//                              className={clsx(styles.commentBranch__content,`--level:${level}`)}
//                              style={{height: `${(!isLast) ? 100 : 0}%`}}
//                         />
//                     }
//                 </div>
// }
//                                isLast={(index !== answers.length - 1 || rootAnswers[index + 1] != undefined)}