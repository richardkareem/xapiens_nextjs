'use client'
import CardAuth from '@/components/CardAuth'
import { postRegister } from '@/redux/action/auth'
import { AuthForm } from '@/types/global.type'
import { useAppDispatch } from '@/types/redux.type'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RegisterPage = () => {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [form, setForm] = useState({
    email:'',
    password: ''
  })
  const onChange = (type: keyof AuthForm, e: string) =>{
    setForm(prev =>{
      return{
        ...prev,
        [type]: e
      }
    })
  }

  const isEmpty = form.email === "" || form.password === ""
  const isCanClick = isEmpty || loading
  const handleSuccessRegist = () =>{
    router.replace('/')
  }
  const onRegister = () =>{
    dispatch(postRegister(form, setLoading, handleSuccessRegist))
  }
  return (
    <div className='min-h-svh w-full flex flex-col justify-center items-center'>
        <CardAuth 
        title='Register'
        disable={isCanClick}
        btnLink='Login'
        descRedirect='Already have account?'
        linkTo='/auth/login'
        onChangeEmail={(e)=> onChange('email', e.target.value)}
        onChangePassword={(e)=> onChange('password', e.target.value)}
        onClickBtn={onRegister}
        emailValue={form.email}
        passwordValue={form.password}
        btnLabel='Register' />
    </div>
  )
}

export default RegisterPage