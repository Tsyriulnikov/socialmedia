import {AnyAction, Dispatch} from "redux";
import {
    // ActionsType,
    SetAppErrorActionType,
    setAppStatusAC,
    SetAppStatusActionType,
    setIsLoggedInActionType
} from '../store/app-reducer'
import {authAPI, LoginParamsType} from "../api/auth-api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {AppDispatch} from "./store";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
// export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
export const loginTC = (data: LoginParamsType) => (dispatch:Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then(res=>{
            if (res.data.resultCode===0){
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatusAC('succeeded'))
            }else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch(error=>{
            handleServerNetworkError(error,dispatch)
        })
}

// types
type ActionsType = setIsLoggedInActionType | SetAppStatusActionType | SetAppErrorActionType
