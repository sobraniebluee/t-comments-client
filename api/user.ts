import {ResponseAuth, ResponseUser, RequestCreateUser, RequestAuthUser} from "../utils/types";
import {AxiosInstance} from "axios";

// interface IHeaders {
//     access_token?:string,
//     refresh_token?: string
// }

export const userApi = (instance: AxiosInstance) => ({
    register: async ({username, email, password} : RequestCreateUser)=> {
        return await instance.post<ResponseAuth>('user/register', {email, username, password})
    },
    login: async ({username, password }: RequestAuthUser) => {
        return await instance.post<ResponseAuth>('user/login', {username, password})
    },
    me: async () => {
        return await instance.get<ResponseUser>('user/me')
    },
    logout: async () => {
        return await instance.get('user/logout')
    }
})
