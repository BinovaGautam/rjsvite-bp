import React from 'react'
import { MdError } from 'react-icons/md'

interface ICompErrorComp {
    title ?: string
}

const CompErrorComp = ({
    title
}: ICompErrorComp) => {
  return (
    <div className='w-full bg-red-100 flex flex-col rounded-md  items-center justify-center p-8 '>
        <MdError size={50} className='text-white bg-red-500 p-2 rounded-full' />
        <h1 className='text-white text-lg font-semibold p-4'>{title}</h1>
    </div>
  )
}

export default CompErrorComp