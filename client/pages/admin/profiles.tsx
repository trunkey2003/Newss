import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Loading from '../../components/common/Loading';
import GetLayoutAdmin from '../../components/function/GetLayoutAdmin'
import LockIcon from '@mui/icons-material/Lock';
import CardStats from '../../components/admin/CardStats';
import ProfilesIcon from '@mui/icons-material/FolderShared';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmModal from '../../components/common/ConfirmModal';
import { Axios } from '../../configs/axios';
import {MessageContext} from '../_app';


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
    const messageContext = useContext(MessageContext);
    const [showModalConfirmDelte, setShowModalConfirmDelte] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pendingConfirmDelete, setPendingConfirmDelete] = useState('');
    const url = 'http://localhost:5000';

    const handleShowModalConfirmDelte = (e : React.MouseEvent, profileID : string) => {
        e.stopPropagation();
        setShowModalConfirmDelte(true);
        setPendingConfirmDelete(profileID);
    }

    const handleConfirmDelete = () =>{
        setLoading(true);
        Axios.delete(`/api/hoso/${pendingConfirmDelete}`)
            .then(() => {
                const profilesArr = profiles.filter((profile) => profile.id != pendingConfirmDelete);
                setProfiles(profilesArr);
                messageContext?.handleAddMessage({title : `Delete profile ${pendingConfirmDelete}`, content : `Delete profile ${pendingConfirmDelete} successfully`, type : 'success'})
            })
            .catch(() => {
                messageContext?.handleAddMessage({title : `Delete profile ${pendingConfirmDelete}`, content : `Cannot delete profile ${pendingConfirmDelete}, please contact the developer`, type : 'fail'})
            })
            .finally(() =>{
                setLoading(false);
                setShowModalConfirmDelte(false);
                setPendingConfirmDelete('');
            })
    }

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
            <ConfirmModal content='Are you sure you want to delete this ? This action cannot be undo' buttonConfirm='Delete' open={showModalConfirmDelte} handleClose={() => setShowModalConfirmDelte(false)} handleConfirm={handleConfirmDelete}/>
            <div className="md:py-24 md:px-16 bg-sky-600 min-h-screen">
                <CardStats
                    statSubtitle="profile"
                    statTitle={String(
                        profiles.length
                    )}
                    statArrow="down"
                    statPercent="0"
                    statPercentColor="text-green-500"
                    statDescripiron="Since yesterday"
                    statIcon={
                        ProfilesIcon
                    }
                    statIconColor="bg-green-500"
                />
                <div className="flex flex-wrap">
                    <div className="flex items-center w-full md:w-[32%] md:mx-[0.6%] rounded overflow-hidden shadow-lg border-2 hover:border-2 hover:border-black hover:cursor-pointer rounded bg-white my-2">
                        <Link
                            href={
                                "/admin/profiles/add"
                            }
                        >
                            <a className="text-center w-full font-bold text-[100px]">
                                +
                            </a>
                        </Link>
                    </div>
                    {profiles.map(
                        (
                            profile: Profile,
                            index
                        ) => (
                            <div
                                key={
                                    index
                                }
                                className="w-full md:w-[32%] md:mx-[0.6%] rounded overflow-hidden shadow-lg border-2 hover:border-2 hover:border-black hover:cursor-pointer rounded bg-white my-2"
                            >
                                <Link
                                    href={`/admin/profiles/${profile.id}`}
                                >
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 flex items-center">
                                            <LockIcon color="primary" />
                                            {
                                                profile.id
                                            }
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                className="fill-black hover:fill-red-600 h-[20px] w-[20px] ml-auto"
                                                onClick={(e) => handleShowModalConfirmDelte(e, profile.id)}
                                            >
                                                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">
                                            {
                                                profile.fieldOne
                                            }
                                        </p>
                                        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">
                                            {
                                                profile.fieldTwo
                                            }
                                        </p>
                                        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">
                                            {
                                                profile.fieldThree
                                            }
                                        </p>
                                        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">
                                            {
                                                profile.fieldFour
                                            }
                                        </p>
                                        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">
                                            {
                                                profile.fieldFive
                                            }
                                        </p>
                                        <p className="text-gray-700 text-base h-8 bg-gray-300 my-2 rounded-lg p-1">
                                            {
                                                profile.fieldSix
                                            }
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

HoSo.getLayout = GetLayoutAdmin;