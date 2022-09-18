import {OutputData} from "@editorjs/editorjs";
import {AxiosError} from "axios";
import {VoteTypeEnum} from "../components/Vote";

// Response interfaces for User model

export interface ResponseUser {
    id: string,
    username: string,
    created_at: string
    updated_at: string
}

export interface ResponseJWT {
    access_token: string,
    refresh_token: string
}

export interface ResponseAuth {
    data: ResponseUser
    jwt:ResponseJWT
}

// Requests interfaces for User model

export interface RequestAuthUser {
    username:string
    password: string
}

export interface RequestCreateUser extends RequestAuthUser {
    email: string
}


// Response and Requests interfaces for PostElements model

export interface IAuthor {
    id: string,
    username: string
}

export interface IPost {
    author: IAuthor
    created_at: string,
    description: OutputData['blocks'],
    id: number,
    rating: null | number,
    title: string,
    is_voted: VoteTypeEnum
    updated_at: string | null
}

export interface IPostFull extends IPost {
    comments: IComment[]
}

export interface IPagination {
    current_page: number,
    per_page: number,
    total_entries: number,
    total_pages: number
}

export interface PaginationResponse<T = unknown> {
    items: T,
    pagination: IPagination
}

export interface PostCreateRequest {
    title:string,
    description: OutputData['blocks']
}

export interface PostUpdateRequest extends PostCreateRequest {
    id: number
}

export type StatusToggle = "create" | "remove" | "change"

export interface ResponseTogglePost {
    status_toggle: StatusToggle
}

export interface IComment {
    id: number
    id_post: number
    id_author: string
    author: IAuthor
    created_at: string
    updated_at: string
    id_root: number
    text: OutputData['blocks']
    answers:IComment[],
    depth?: number | null,
}

// Error interface

interface Error<E = string> {
    message: E
}
export type ErrorResponse<E = string> = AxiosError<Error<E>>


// Create Comment Interface

export interface CreateComment {
    id_post: number,
    is_reply: boolean,
    id_root: number | null,
    text: OutputData['blocks']
}

// Available log levels for @editorjs

export enum LogLevels {
  VERBOSE = 'VERBOSE',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}