import axios, {AxiosResponse} from 'axios'
import {UserType} from "../types/types";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fe698d58-4d10-4f41-a217-bc0f632c98e5'
    }
})

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}