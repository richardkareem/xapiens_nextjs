import { ArrowLeftStartOnRectangleIcon, PencilIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import Cookies from 'js-cookie'

import Modal from './Modal'
import { useRouter } from 'next/navigation'
import ModalParent from './ModalParent'
import { useAppDispatch } from '@/types/redux.type'
import { postCreate } from '@/redux/action/crud'
const Header = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
      name: "",
      job: "",
    })
    const onLogout = () =>{
      if(window){
        localStorage.clear()
      }
      Cookies.remove('token')
        router.push('/auth/login')
    }
    const handleClear = () =>{
      setForm({name:'', job:''})
    }
    const onSave = () =>{
      const modal = 
      document.getElementById('modal_add') as HTMLDialogElement
      dispatch(postCreate(form, setLoading,handleClear))
      modal.close()
    }
  return (
    <div className='flex justify-end items-end px-8 py-4 gap-4'>
        <PencilIcon 
        onClick={()=> {
          const modal = 
          document.getElementById('modal_add') as HTMLDialogElement
          modal?.showModal()
        }}
        className='w-8 h-8 cursor-pointer' />
        <ArrowLeftStartOnRectangleIcon  
        onClick={()=>{
          const modal = 
          document.getElementById('modal_exit') as HTMLDialogElement
          modal?.showModal()
        }}
        className='w-8 h-8 cursor-pointer'  />
        <Modal 
            id='modal_exit'
            onAcc={onLogout}
            onReject={()=>{}}
            title='Do You Want to Exit?'
            desc='close or exit'
        />
        <ModalParent 
            id='modal_add'
        >
          <>
            <p className='font-bold text-xl'>Create User</p>
            <input 
            value={form.name}
            onChange={(e)=> setForm(prev => {
              return{
                ...prev,
                'name':e.target.value
              }
            })}
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs mt-4" />
            <input 
             onChange={(e)=> setForm(prev => {
              return{
                ...prev,
                'job':e.target.value
              }
            })}
            value={form.job}
            disabled={loading}
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs mt-4" />
            <button onClick={onSave} className="btn mt-4">Save</button>
          </>
        </ModalParent>
    </div>
  )
}

export default Header