import React, { useContext, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { MessageType } from '../../../../models/Message';
import axios from 'axios';
import AlertBox from '../../../../components/common/alertBox';
import AlertBoxWrapper from '../../../../components/common/alertBoxWrapper';
import {MessageContext} from '../../../_app';
 
type Props = {}

export default function Hoso({ }: Props) {
  const messageContext = useContext(MessageContext);
  const [id, setId] = useState('');
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [data5, setData5] = useState('');
  const [data6, setData6] = useState('');

  const [loading, setLoading] = useState(false);

  const uploadProfille = () => {
    const url = 'http://localhost:5000'
    const profile = {
      id: id,
      fieldOne: data1,
      fieldTwo: data2,
      fieldThree: data3,
      fieldFour: data4,
      fieldFive: data5,
      fieldSix: data6,
    }

    setLoading(true);
    axios.post(`${url}/api/hoso`, profile)
      .then((res) => {
        console.log(res);
        messageContext?.handleAddMessage({ type: 'success', title: 'Lưu thành công', content: "Đã lưu hồ sơ : " + profile.id + " thành công" });
      })
      .catch((err) => { 
        messageContext?.handleAddMessage({ type: 'fail', title: 'Lưu thất bại', content: "Việc lưu hồ sơ : " + profile.id + " thất bại" });
      })
      .finally(() => setLoading(false));
}

return (
  <>
    {/* <div className='h-screen w-full text-center flex leading-[100vh] justify-center text-2xl font-bold fixed bg-black bg-opacity-50 top-0 left-0 z-50'>
        LOADING...
      </div> */}
    <div className='md:px-20'>
      
      <div className='text-center text-2xl font-semibold'>Thêm Hồ Sơ</div>
      <div className='md:mx-48'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            id
          </label>
          <input onChange={(e) => setId(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Nhập ID hồ sơ" />
        </div>
      </div>

      <div className='md:mx-48'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Thông Tin A
          </label>
          <input onChange={(e) => setData1(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Data" />
        </div>
      </div>

      <div className='md:mx-48'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Thông Tin B
          </label>
          <input onChange={(e) => setData2(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Data" />
        </div>
      </div>

      <div className='md:mx-48'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Thông Tin C
          </label>
          <input onChange={(e) => setData3(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Data" />
        </div>
      </div>

      <div className='md:mx-48'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Thông Tin D
          </label>
          <input onChange={(e) => setData4(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Data" />
        </div>
      </div>

      <div className='md:mx-48'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Thông Tin E
          </label>
          <input onChange={(e) => setData5(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Data" />
        </div>
      </div>

      <div className='md:mx-48'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Thông Tin F
          </label>
          <input onChange={(e) => setData6(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Data" />
        </div>
      </div>

      <div className='w-full flex my-4 z-0 '>
        <div className='ml-auto md:mr-52'>
          <LoadingButton
            size="small"
            onClick={uploadProfille}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Save
          </LoadingButton>
        </div>
      </div>

    </div>
  </>
)
}