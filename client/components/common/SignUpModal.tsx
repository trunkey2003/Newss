import { Box, Modal } from '@mui/material'
import { Axios } from '../../configs/axios';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useContext, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { MessageContext } from '../../pages/_app';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  padding: '50px 0 50px 0',
};


type Props = {
  showSignUp: boolean,
  handleShowSignUp: (bl: boolean) => void,
}


export default function SignUpModal({ showSignUp, handleShowSignUp }: Props) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const messageContext = useContext(MessageContext);

  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {

    const user = {
      userName: userName,
      password: password,
    }

    if (confirmPassword != password) {
      const content = "Mật khẩu xác nhận không khớp"
      console.log(messageContext);
      messageContext?.handleAddMessage({type : 'fail', title: 'Đăng ký thất bại', content: content});
      return;
    }
    
    setLoading(true);
    
    Axios.post(`/api/user/sign-up`, user).then((res) => {
      console.log(res);
      messageContext?.handleAddMessage({type : 'success', title: 'Đăng ký thành công', content: 'Tài khoản của bạn đã được đăng ký thành công'});
    })
    .catch((err) => {
      const content = err.response.data.message;
      messageContext?.handleAddMessage({type : 'fail', title: 'Đăng ký thất bại', content: content});
    })
    .finally(() => setLoading(false))
  }

  return (
    <Modal
      open={showSignUp}
      onClose={() => handleShowSignUp(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Username
              </label>
            </div>
            <div className="md:w-2/3">
              <input onChange={(e) => setUsername(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Confirm Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input onChange={(e) => setConfirmPassword(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <label className="ml-[10%] block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">
                Auto Login
              </span>
            </label>
            <div className='ml-auto'>
                <LoadingButton
                  size='medium'
                  variant='contained'
                  color='success'
                  onClick={handleSignUp}
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<DoubleArrowIcon />}
                >
                  Sign Up
                </LoadingButton>
              </div>
          </div>
          <div className="md:flex md:items-center">

          </div>
        </form>
      </Box>
    </Modal>
  )
}
