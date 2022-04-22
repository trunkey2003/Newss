import React from 'react'

type Props = {}

export default function LoadingFixed({ }: Props) {
    return (
        <div className='fixed top-0 left-0 text-center py-[50vh] text-2xl font-bold text-gray-500 w-full h-screen bg-black bg-opacity-50'>
            <span className="ml-40 animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-400 opacity-75"></span>
            <span className="mx-20 animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-400 opacity-75"></span>
            <span className="mr-40 animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-400 opacity-75"></span>
        </div>
    )
}