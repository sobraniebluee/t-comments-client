import {Api} from "./api";

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
        return null
    }
}
