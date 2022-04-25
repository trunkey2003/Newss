import React from 'react'
import getMainLayout from '../components/function/GetLayoutMain';

type Props = {}

export default function Index({}: Props) {
  return (
    <div className='w-full pt-36 text-center text-4xl font-bold'>Home</div>
  )
}

Index.getLayout = getMainLayout;