import React, { useEffect, useState } from 'react';
import Loading from '../../components/common/Loading';
import GetLayoutAdmin from '../../components/function/GetLayoutAdmin'
import { Axios } from '../../configs/axios';
import { UserType } from '../../models/UserType';

import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import ImageIcon from '@mui/icons-material/Image';
import CardStats from '../../components/common/admin/CardStats';
import UsersIcon from '@mui/icons-material/People';

type Props = {}

export default function Users({ }: Props) {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get('/api/user')
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        setUsers([]);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  if (loading) return <Loading />

  return (
    <div className='px-5 md:py-24 md:px-16 bg-sky-600 min-h-screen'>
      <CardStats
        statSubtitle="users"
        statTitle={String(users.length)}
        statArrow="down"
        statPercent="0"
        statPercentColor="text-green-500"
        statDescripiron="Since yesterday"
        statIcon={UsersIcon}
        statIconColor="bg-yellow-500"
      />
      <div className='flex flex-wrap'>
        {users.map((user: UserType) =>
          <div className='w-full md:w-[49%] mx-[0.25%] p-4 bg-white h-[220px] mt-5 border-2 hover:border-black hover:cursor-pointer'>
            <div className='h-9 my-2 flex items-center'>
              <AccountCircle />
              <div className='ml-2 bg-gray-200 truncate py-1 px-4 rounded-md'>{user.userName}</div>
            </div>
            <div className='h-9 my-2 flex items-center'>
              <PasswordIcon />
              <div className='ml-2 bg-gray-200 truncate py-1 px-4 rounded-md'>{user.password}</div>

            </div>
            <div className='h-9 my-2 flex items-center'>
              <AdminIcon />
              <div className='ml-2 bg-gray-200 truncate py-1 px-4 rounded-md'>{(user.role == '0') ? 'user' : 'admin'}</div>
            </div>
            <div className='h-9 my-2 flex items-center'>
              <ImageIcon />
              <div className='ml-2 bg-gray-200 truncate py-1 px-4 rounded-md'>{user.avatar}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Users.getLayout = GetLayoutAdmin;