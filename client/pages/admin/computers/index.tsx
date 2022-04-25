import React, { useEffect, useState } from 'react'
import CardStats from '../../../components/admin/CardStats';
import getLayoutAdmin from '../../../components/function/GetLayoutAdmin';
import { Axios } from '../../../configs/axios';
import Loading from '../../../components/common/Loading';
import ComputerIcon from '@mui/icons-material/Computer';
import ProfileIcon from '@mui/icons-material/FolderShared';

type Props = {}

type computersDataType = {
  profileID: string,
  fileName: string,
  fileData: string,
}

export default function Computers({ }: Props) {
  const [loading, setLoading] = useState(true);
  const [computers, setComputers] = useState<computersDataType[]>([]);
  useEffect(() => {
    Axios.get('/api/hoso/computers')
      .then(({ data }) => {
        setComputers(data);
      })
      .catch(() => {

      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  if (loading) return (
    <Loading />
  )

  return (
    <div className='md:py-24 md:px-16 bg-sky-600 min-h-screen'>
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
      {computers.length == 0 ?
        <div className='text-center p-12 bg-gray-200 border-2 border-white mt-5 text-2xl text-gray-700 font-semibold'>
          <div className='text-[100px] text-center text-red-400'>404</div>
          <br />
          There's no computer file in whole server
        </div> : ''}
      {computers.length > 0 ? computers.map((computer, index) =>
        <div className='flex flex-wrap my-4'>
          <div className='md:w-[32%] mx-[0.6%] my-2 border-2 border-white-300 rounded-lg'>
            <div className='text-white text-lg font-semibold px-3 bg-purple-700 rounded-t-lg'>
              <div className='py-1 flex items-center'><ProfileIcon/> <span className='ml-2'>{computer.profileID}</span></div>
              <div className='py-1 flex items-center'><ComputerIcon/> <span className='ml-2'>{computer.fileName}</span></div>
            </div>
            <div>
              <p key={index} dangerouslySetInnerHTML={{ __html: computer.fileData }} className="w-full max-w-full min-h-[200px] max-h-[200px] overflow-y-auto bg-white p-5 rounded-b-lg">
              </p>
            </div>
          </div>
        </div>
      ) : ''}
      <style jsx>{`
        /* width */
        ::-webkit-scrollbar {
          width: 5px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey; 
          border-radius: 10px;
        }
         
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #81698c; 
          border-radius: 10px;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #4d3e54; 
        }
      `}</style>
    </div>
  )
}

Computers.getLayout = getLayoutAdmin;