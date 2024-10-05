'use client'
import CardUser from "@/components/CardUser";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import ModalParent from "@/components/ModalParent";
import { deleteData, putData } from "@/redux/action/crud";
import { saveData } from "@/redux/reducer/global";
import { CreateRequest } from "@/types/global.type";
import { useAppDispatch, useAppSelector } from "@/types/redux.type";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const {datas} = useAppSelector(state => state.global)
  const [form, setForm] = useState({
    name:'',
    job:'',
    id:''
  })
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const datasLs = localStorage.getItem('datas')
    if(datasLs){
      if(datas.length === 0){
        const newDatas = JSON.parse(datasLs)
        dispatch(saveData(newDatas))
      }
    }
  },[])

  const onClickEdit = (job:string, name:string, id:string) =>{
    const modal =  document.getElementById('modal_edit') as HTMLDialogElement
    modal?.showModal()
    setForm({
      job,
      name,
      id
    })
  }

 

  const onEditSave = (data: CreateRequest, id: string) =>{
    const handleCloseModal = () =>{
      const modal = document.getElementById('modal_edit') as HTMLDialogElement
      modal?.close()
     }
    dispatch(putData(setLoading, data, id, handleCloseModal))
  }

  const onShowModalDelete = (id:string) =>{
    setForm({id, job:"",name:''})
    const modal = 
    document.getElementById('modal_delete') as HTMLDialogElement
    modal?.showModal()
  }

  const onDelete = () =>{
    const onSuccessDelete = () =>{
      const modal = 
      document.getElementById('modal_delete') as HTMLDialogElement
      setForm({id:"", job:'', name:''})
      modal.close()
    }
    dispatch(deleteData(setLoading, form.id, onSuccessDelete))
  }

  const handleCloseModal = () =>{
    const modal = 
    document.getElementById('modal_edit') as HTMLDialogElement
    modal.close()
  }
  return (
    <div >
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
        {datas?.length > 0 ? datas?.map((item, index) =>{
          return(
          <CardUser
            key={index}
            onDelete={()=> onShowModalDelete(item.id)}
            onUpdate={()=> {onClickEdit(item.job, item.name, item.id)}}
            job={item.job} name={item.name} />
          )
        }): (
          <h1 className="text-center font-bold">Data Is Empty</h1>
        )}
        
      </div>
      <ModalParent
            id='modal_edit'
        >
          <>
          <div className='flex justify-between'>
             <p className='font-bold text-xl'>Edit User</p>
             <XCircleIcon onClick={handleCloseModal} className='w-8 h-8' />
            </div>
            <input 
            value={form.name}
            onChange={(e)=> setForm(prev => {
              return{
                ...prev,
                'name':e.target.value
              }
            })}
            type="text" 
            placeholder="Name, ex: John Doe" 
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
            placeholder="Job, ex: Front End Developer" 
            className="input input-bordered w-full max-w-xs mt-4" />
            <p className="font-medium text-sm mt-4">Esc for close modal</p>

            <button onClick={()=>{onEditSave(form, form.id)}} className="btn mt-4">Save</button>
          </>
        </ModalParent>
        <Modal 
        id="modal_delete"
        onAcc={onDelete}
        onReject={()=>{
          const modal = document.getElementById('modal_delete') as HTMLDialogElement
          modal.close()
        }}
        title="Delete User"
        desc="Are you sure want to delete user?"

        />
      
     
    </div>
  );
}
