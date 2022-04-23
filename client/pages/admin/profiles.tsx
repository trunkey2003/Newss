import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Loading from '../../components/common/Loading';
import GetLayoutAdmin from '../../components/function/GetLayoutAdmin'
import LockIcon from '@mui/icons-material/Lock';
import CardStats from '../../components/common/admin/CardStats';
import ProfilesIcon from '@mui/icons-material/FolderShared';


type Props = {}

export type Profile = {
    id: string,
    fieldOne: string,
    fieldTwo: string,
    fieldThree: string,
    fieldFour: string,
    fieldFive: string,
    fieldSix: string,
}

export default function HoSo({ }: Props) {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(true);
    const url = 'http://localhost:5000'

    useEffect(() => {
        setLoading(true);
        axios.get(`${url}/api/hoso`).then(({ data }) => {
            setProfiles(data);
        }).catch((err) => {
            return;
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    if (loading) return <Loading />;
    if (profiles.length == 0) return (
        <div className='w-full p-16 text-gray-500 border-2 border-gray-400'>
            <div className='w-full text-[100px] text-center'>404</div>
            <div className='text-center text-2xl font-bold'>
                Không có hồ sơ nào
            </div>
        </div>
    )
    return (
        <>
            <div className='md:py-24 md:px-16 bg-sky-600'>
                <CardStats
                    statSubtitle="profile"
                    statTitle={String(profiles.length)}
                    statArrow="down"
                    statPercent="0"
                    statPercentColor="text-green-500"
                    statDescripiron="Since yesterday"
                    statIcon={ProfilesIcon}
                    statIconColor="bg-green-500"
                />
                <div className='flex flex-wrap'>
                    {profiles.map((profile: Profile, index) => (<div key={index}
                        className="w-full md:w-[32%] md:mx-[0.6%] rounded overflow-hidden shadow-lg border-2 hover:border-2 hover:border-black hover:cursor-pointer rounded bg-white my-2">
                        <Link href={`/admin/profiles/${profile.id}`}>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2"><LockIcon color='primary' /> {profile.id}</div>
                                <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldOne}</p>
                                <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldTwo}</p>
                                <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldThree}</p>
                                <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldFour}</p>
                                <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldFive}</p>
                                <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">{profile.fieldSix}</p>
                            </div>
                        </Link>
                    </div>))}
                </div>
            </div>
        </>
    )
}

HoSo.getLayout = GetLayoutAdmin;