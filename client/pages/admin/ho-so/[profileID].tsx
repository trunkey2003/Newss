import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Profile } from './index';
import { useRouter } from 'next/router'
import Loading from '../../../components/common/loading';

type Props = {}

export default function ProfileID({ }: Props) {
  const [profile, setProfile] = useState<Profile>();
  const [Msg, setMsg] = useState('');
  const [computers, setComputers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const url = 'http://localhost:5000';



  useEffect(() => {
    setLoading(true);
    if (!router.query.profileID) return;
    const { profileID } = router.query;
    axios.get(`${url}/api/hoso/${profileID}`).then(({ data }) => {
      setProfile(data);
      axios.get(`${url}/api/hoso/computers/${profileID}`)
        .then(({ data }) => {
          console.log(data);
          setComputers(data);
          if (data.length == 0) setMsg(`Hiện tại không có computer nào thuộc về hồ sơ này`)
        })
        .catch(() => {
          setMsg(`Không đọc được thư mục ${profileID} vui lòng kiểm tra lại host`)
        })
        .finally(() => {
          setLoading(false);
        })
    }).catch((err) => {
      setProfile(undefined);
      setLoading(false);
    })
  }, [router])

  if (loading) return (
    <Loading/>
  )

  if (!profile) return (
    <div className='w-full p-16 text-gray-500 border-2 border-gray-400'>
      <div className='w-full text-[100px] text-center'>404</div>
      <div className='text-center text-2xl font-bold'>
        Không có hồ sơ nào
      </div>
    </div>
  )

  return (
    <div>
      <div className="px-6 py-4 border-2 border-blue-600 rounded">
        <div className="font-bold text-xl mb-2">ID: {profile?.id}</div>
        <p className="text-gray-700 text-base">Field 1 : {profile?.fieldOne}</p>
        <p className="text-gray-700 text-base">Field 2 : {profile?.fieldTwo}</p>
        <p className="text-gray-700 text-base">Field 3 : {profile?.fieldThree}</p>
        <p className="text-gray-700 text-base">Field 4 : {profile?.fieldFour}</p>
        <p className="text-gray-700 text-base">Field 5 : {profile?.fieldFive}</p>
        <p className="text-gray-700 text-base">Field 6 : {profile?.fieldSix}</p>
      </div>
      {Msg ? <div className='text-center p-12 border-2 border-gray-400 mt-5 text-2xl text-gray-500 font-semibold'>{Msg}</div> : ''}
      <div className='flex flex-wrap my-4'>
        {computers.length > 0 ? computers.map((computer, index) =>
          <p key={index} dangerouslySetInnerHTML={{__html: computer}} className="w-full md:w-[32%] h-[200px] mx-[0.6%] my-2 border-2 border-purple-500 p-5 rounded">
          </p>
        ) : ''}
      </div>
    </div>
  )
}