import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Loading from '../../../components/common/loading';

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

    if (loading) return <Loading/>;
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
            <div className='text-xl font-bold p-4'>Danh sách hồ sơ</div>

            <div className='flex flex-wrap'>
                {profiles.map((profile: Profile, index) => (<div key={index} className="w-full md:w-[32%] md:mx-[0.3%] rounded overflow-hidden shadow-lg border-2 hover:border-2 hover:border-blue-600 hover:cursor-pointer rounded">
                    <Link href={`admin/ho-so/${profile.id}`}>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">ID: {profile.id}</div>
                            <p className="text-gray-700 text-base">Field 1 : {profile.fieldOne}</p>
                            <p className="text-gray-700 text-base">Field 2 : {profile.fieldTwo}</p>
                            <p className="text-gray-700 text-base">Field 3 : {profile.fieldThree}</p>
                            <p className="text-gray-700 text-base">Field 4 : {profile.fieldFour}</p>
                            <p className="text-gray-700 text-base">Field 5 : {profile.fieldFive}</p>
                            <p className="text-gray-700 text-base">Field 6 : {profile.fieldSix}</p>
                        </div>
                    </Link>
                </div>))}
            </div>
        </>
    )
}