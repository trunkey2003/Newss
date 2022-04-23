import React, { useState } from 'react'
import LoadingFixed from '../../components/common/loadingFixed';
import GetLayoutAdmin from '../../components/function/getLayoutAdmin'
import HeaderStats from '../../components/common/admin/HeaderStats';
import Dashboard from '../../components/common/admin/Dashboard';

type Props = {}

export default function Index({ }: Props) {
  const [loading, setLoading] = useState(false);

  if (loading) return <LoadingFixed />;

  return (
    <div className='w-full'>
      <HeaderStats/>
      <Dashboard/>
    </div>
  )
}

Index.getLayout = GetLayoutAdmin;