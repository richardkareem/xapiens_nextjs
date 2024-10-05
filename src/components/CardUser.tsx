import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';
import React from 'react'

type Props = {
    name: string;
    job:string;
    onUpdate: ()=> void;
    onDelete: ()=> void
}
const CardUser = (props: Props) => {
    const {job,name, onDelete, onUpdate} = props
  return (
    <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 w-xl">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-400 text-sm">{job}</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button 
          onClick={onUpdate} 
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <PencilIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={onDelete} 
          className="text-gray-300 hover:text-red-500 transition-colors duration-200"
        >
          <TrashIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default CardUser