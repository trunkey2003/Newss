import React from 'react'


export default function AlertBoxWrapper({children}: any) {
  return (
    <div className='w-[90%] right-[5%] md:w-[400px] fixed md:right-10 md:top-10 z-[1000000]'>
        {children}
    </div>
  )
}
