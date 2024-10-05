import React from 'react'

type Props = {
    onAcc: ()=> void;
    onReject: ()=> void;
    title: string;
    id: string;
    desc?: string;
}
const Modal = (props: Props) => {
    const {onAcc,onReject,title,desc,id} = props
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{desc}</p>
        <div className="modal-action">
        <button className="btn" onClick={onReject}>No</button>
        <button className="btn" onClick={onAcc}>Yes</button>
        </div>
      </div>
    </dialog>
  )
}

export default Modal