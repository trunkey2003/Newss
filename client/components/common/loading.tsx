import React from 'react'

type Props = {}

export default function Loading({ }: Props) {
    return (
        <div className='text-center py-52 text-2xl font-bold text-gray-500'>
            <span className="ml-20 animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="mx-10 animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="mr-20 animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
        </div>
    )
}