import axios, { AxiosError, isAxiosError } from "axios"
import { API_URL } from "../../constant"
import { AuthForm, AuthResponse } from "../../types/global.type"
import { alertMessage } from "@/utils/alertMessage"
import Cookies from 'js-cookie'
export const postLogin = (
    data: AuthForm, 
    setLoading:(loading:boolean)=>void,
    successRegist:()=>void
) => async() =>{
    setLoading(true)
    try{
        const res = await axios.post(`${API_URL}login`, data)
        if(res.status === 200){
            const resData : AuthResponse = res.data
            const profile = JSON.stringify({
                id: resData.id,
                email: data?.email,
            })
            alertMessage('success login', 'success')
            Cookies.set('token', resData?.token)
            successRegist()

        }
    }catch(e : unknown | AxiosError){
        if(isAxiosError(e)){
            alertMessage(e.response?.data?.error || 'error', 'error')
        }
    }finally{
        setLoading(false)
    }
}
export const postRegister = (data: AuthForm, setLoading:(loading:boolean)=> void, successRegist:()=>void) => async() =>{
    setLoading(true)
    try{
        const res = await axios.post(`${API_URL}register`, data)
        if(res.status === 200){
            const resData : AuthResponse = res.data
            const profile = JSON.stringify({
                id: resData?.id,
                email: data?.email,
            })
            alertMessage('success Register', 'success')
            Cookies.set('token', resData?.token)
            successRegist()
        }
    }catch(e : unknown | AxiosError){
        if(isAxiosError(e)){
            alertMessage(e.response?.data?.error || 'error', 'error')
        }
    }finally{
        setLoading(false)
    }
}