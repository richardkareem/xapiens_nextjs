import React from 'react'
type Props = {
    id: string;
    children: React.ReactNode
}
const ModalParent = (props: Props) => {
    const {id, children} = props

  return (
    <dialog id={id} className="modal">
    <div className="rounded-xl bg-slate-50 flex flex-col p-4">
        {children}
    </div>
  </dialog>
  )
}

export default ModalParent