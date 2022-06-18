import axios, {AxiosResponse} from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fe698d58-4d10-4f41-a217-bc0f632c98e5'
    }
})