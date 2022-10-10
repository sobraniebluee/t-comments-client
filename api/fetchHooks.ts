import {Api} from "./api";
import {CreateComment, ErrorResponse} from "../utils/types";

export const fetchUserPosts = async (currenPage: number, username: string,) => {
    try {
        const {data} = await Api().member.getMemberPosts(username, currenPage)
        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export const fetchAllPosts = async (currentPage: number) => {
    try {
        const {data} = await Api().post.getAll(currentPage)
        return data
    } catch (e: any) {
        console.log(e)
        return null
    }
}

export const createCommentForPost = async (dataComment: CreateComment) => {
    try {
        return await Api().comments.createCommentForPost(dataComment)
    } catch (e) {
        console.log("error")
        let err: ErrorResponse = e;
        console.log(err.response)
        return null
    }
}
