import {AxiosInstance} from "axios";
import {IPost, PaginationResponse, ResponseUser} from "../utils/types";

export const memberApi = (instance: AxiosInstance) => ({
    getMember: async (username: string) => {
        return await instance.get<ResponseUser>("/members/" + username)
    },
    getMemberPosts: async (username: string, page: number = 1, limit: number = 24) => {
        return await instance.get<PaginationResponse<IPost[]>>(`/members/${username}/posts?page=${page}&limit=${limit}`)
    }
})

// export default memberApi