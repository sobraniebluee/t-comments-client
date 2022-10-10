import {AxiosInstance} from "axios";
import {CreateComment, IComment} from "../utils/types";
import {OutputData} from "@editorjs/editorjs";

export const commentsApi = (instance: AxiosInstance) => ({
    getAllForPost: async (id: number | string) => {
        return await instance.get<IComment[]>('/comments/' + id.toString())
    },
    createCommentForPost: ({id_post, id_root, text, is_reply}: CreateComment) => {
        return instance.post<IComment>('/comments/' + id_post, {is_reply, id_root, text})
    }
})