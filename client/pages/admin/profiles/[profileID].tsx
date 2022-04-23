import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Profile } from '../profiles';
import { useRouter } from 'next/router'
import Loading from '../../../components/common/loading';
import GetLayoutAdmin from '../../../components/function/getLayoutAdmin';
import LockIcon from '@mui/icons-material/Lock';
import CardStats from '../../../components/common/admin/CardStats';
import ComputerIcon from '@mui/icons-material/Computer';

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
          if (data.length == 0) setMsg(`None computer belongs to this profile`)
        })
        .catch(() => {
          setMsg(`Cannot read profile ${profileID}, please contact the developer`)
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
    <Loading />
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
    <div className='md:py-24 md:px-16 px-4 bg-sky-600 min-h-screen'>
      <div className='pt-4'/>
      <CardStats
        statSubtitle="Computers"
        statTitle={String(computers.length)}
        statArrow="down"
        statPercent="0"
        statPercentColor="text-green-500"
        statDescripiron="Since yesterday"
        statIcon={ComputerIcon}
        statIconColor="bg-purple-500"
      />

      <div className="px-6 py-4 bg-white rounded mt-4">
        <a className="font-bold text-xl mb-2 hover:text-red-400" href={`/api/profile/${profile.id}`}><LockIcon color='primary' /> {profile.id}</a>
        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldOne}</p>
        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldTwo}</p>
        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldThree}</p>
        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldFour}</p>
        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldFive}</p>
        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldSix}</p>
      </div>
      {Msg ? 
      <div className='text-center p-12 bg-gray-200 border-2 border-white mt-5 text-2xl text-gray-700 font-semibold'>
        <div className='text-[100px] text-center text-red-400'>404</div>
        <br/>
        {Msg}
      </div> : ''}
      <div className='flex flex-wrap my-4'>
        {computers.length > 0 ? computers.map((computer, index) =>
          <p key={index} dangerouslySetInnerHTML={{ __html: computer }} className="w-full md:w-[32%] h-[200px] mx-[0.6%] my-2 bg-white border-2 border-gray-600 p-5 rounded">
          </p>
        ) : ''}
      </div>
    </div>
  )
}

ProfileID.getLayout = GetLayoutAdmin;