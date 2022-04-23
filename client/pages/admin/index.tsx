import React, { useState } from 'react'
import type { ReactElement } from 'react'
import LoadingFixed from '../../components/common/LoadingFixed';
import { AdminLayout } from "../../components/layout";
import HeaderStats from '../../components/common/admin/HeaderStats';

type Props = {}

export default function Index({ }: Props) {
  const [loading, setLoading] = useState(false);

  if (loading) return <LoadingFixed />;

  return (
    <div className='bg-blue-500 w-full'>
      <HeaderStats />
    </div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}