import {AxiosInstance} from "axios";
import {IPost, PaginationResponse, PostCreateRequest, ResponseTogglePost} from "../utils/types";
import {LIMIT_PEG_PAGE} from "../utils/consts";

export const postApi = (instance: AxiosInstance) => ({
    getAll: async (_page: number = 1, _limit: number = 10) => {
        return await instance.get<PaginationResponse<IPost[]>>(`posts?page=${_page}&limit=${_limit}`)
    },
    getOne: async (id: string | number) => {
        return await instance.get<IPost>('posts/' + id)
    },
    create: async ({title, description} : PostCreateRequest) => {
        return await instance.post('posts', {title, description})
    },
    delete:async (id: string | number) => {
        return await instance.delete('posts/' + id)
    },
    update: async (id: number | string, {title, description}: PostCreateRequest) => {
        return await instance.put('posts/' + id, {title, description})
    },
    like: async (id: number) => {
        return await instance.post<ResponseTogglePost>('posts/' + id + '/like')
    },
    unlike: async (id: number) => {
        return await instance.post<ResponseTogglePost>('posts/' + id + '/dislike')
    },
})