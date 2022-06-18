import {instance} from "./api-create";
import {AxiosResponse} from "axios";

type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDataType = {
    userId: number
}

// export const authAPI = {
//     me() {
//         return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
//     },
//     login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
//         return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCapcthaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
//             .then(res => res.data);
//     },
//     logout() {
//         return instance.delete(`auth/login`);
//     }
// }

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<any, AxiosResponse<ResponseType<{ userId?: number }>>>(`auth/login`, data);
    },

    me() {
        return instance.get<any, AxiosResponse<ResponseType<{ id: number, email: string, login: string }>>>(`auth/me`);
    },

    logout() {
        return instance.delete<any, AxiosResponse<ResponseType<{ userId?: number }>>>(`auth/login`);
    }
}


// types
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
