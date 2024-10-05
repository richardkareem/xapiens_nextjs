'use client'
import CardAuth from '@/components/CardAuth'
import { postLogin } from '@/redux/action/auth'
import { AuthForm } from '@/types/global.type'
import { useAppDispatch } from '@/types/redux.type'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
const LoginPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email:'',
    password: ''
  })
  const onChange = (type:keyof AuthForm, value: string) =>{
    setForm(prev =>{
      return{
        ...prev,
        [type]: value
      }
    })
  }
  const handleDirect = () =>{
    window.location.reload()
  }
  const handleLogin = () =>{
    dispatch(postLogin(form, setLoading, handleDirect))
  }
  const isEmpty = form.email === "" || form.password === ""
  const isCanClick = isEmpty || loading

  useEffect(()=>{
    const token = Cookies.get('token')
    if(token){
      router.replace('/')
    }
  },[])
 
  return (
   <div className='min-h-svh w-full flex flex-col justify-center items-center'>
    <CardAuth 
    title='Login'
      disable={isCanClick}
      onChangeEmail={(e)=> onChange('email', e.target.value)}
      onChangePassword={(e)=> onChange('password', e.target.value)}
      passwordValue={form.password}
      emailValue={form.email}
      btnLink='Register'
      descRedirect="Dont&apos;t have account?"
      linkTo='/auth/register'
      btnLabel='Login' 
      onClickBtn={handleLogin}
    />
   </div>
  )
}

export default LoginPage