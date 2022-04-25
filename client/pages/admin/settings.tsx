import React from 'react';
import GetLayoutAdmin from '../../components/function/GetLayoutAdmin'

type Props = {}

export default function Settings({}: Props) {
  return (
    <div className='w-full pt-36 text-center text-4xl font-bold'>Settings</div>
  )
}

Settings.getLayout = GetLayoutAdmin;