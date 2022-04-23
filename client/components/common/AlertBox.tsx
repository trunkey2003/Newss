import React from 'react'
import { MessageType } from '../../models/Message';
import CheckCircle from '@mui/icons-material/CheckCircle';
import GppMaybe from '@mui/icons-material/GppMaybe';


type Props = {
    message : MessageType | undefined,
    handleCloseMessage: (index : Number) => void,
    index: Number
}

export default function AlertBox({message, handleCloseMessage, index}: Props) {
  if (!message) return <div></div>;

  return (
    <>
    {(message)? <div role="alert" className='mb-5 md:w-[400px] z-[10000000]'>
          <div className={`${(message.type == 'success')? 'bg-green-500' : 'bg-red-500'} text-white font-bold rounded-t px-4 py-2 flex w-full`}>
            {message.title}
            <div className='ml-1'>{(message.type == 'success')? <CheckCircle/> : <GppMaybe/>}</div>
            <button onClick={() => handleCloseMessage(index)} className='ml-auto font-bold'>X</button>
          </div>
          <div className={`border ${(message.type == 'success')? 'border-green-400 bg-green-100 text-green-700' : 'border-red-400 bg-red-100 text-red-700'} border-t-0 rounded-b px-4 py-3 font-medium`}>
            <p>{message.content}</p>
          </div>
        </div> : ''}
    </>
  )
}
