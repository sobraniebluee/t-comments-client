import {Api, ApiReturnType} from "../api/api";
import {ErrorResponse, ResponseTogglePost} from "../utils/types";
import React from "react";



export const useSendVotes = () => {
    const [loading, setLoading] = React.useState<boolean>()
    const [errors, setErrors] = React.useState<string>("")
    const [data, setData] = React.useState<any>()
    const sendVote = async (id: number, type: "like" | "unlike") => {
        try {
            const response = await Api().post[type](id)
            setData(response.data)
        } catch (err: any) {
            const error: ErrorResponse = err
            if (!error.response) {
                throw err
            }
            console.log("e", error.response.data.message)
            setErrors(error.response.data.message)
        }
    }
    return {loading,errors,data,sendVote}
}