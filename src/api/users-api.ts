import {GetItemsType, instance, APIResponseType} from './api-create';


export const usersAPI = {
    getUsers(currentPage:number, pageSize = 10, term: string = 'Max', friend: null | boolean = null) {
        let currentPagePlus=currentPage+1
        return instance.get<GetItemsType>(`users?page=${currentPagePlus}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`) )
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
}
