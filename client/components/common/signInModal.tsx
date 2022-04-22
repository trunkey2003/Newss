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
  showSignIn: boolean,
  handleShowSignIn: (bl: boolean) => void,
}

export default function SignInModal({ showSignIn, handleShowSignIn }: Props) {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const messageContext = useContext(MessageContext);

  const setCookieClient = (cookieName: string, cookieValue : string | number, maxAge : number) => {
    let date = new Date();
    date.setTime(date.getTime()+(maxAge));
    document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toUTCString();
  }

  const handleSignIn = () => {
    const user = {
      userName: userName,
      password: password
    };

    setLoading(true);

    Axios.post(`/api/user/sign-in`, user).then(({data}) => {
      setCookieClient('userName',  data.userName, data.maxAge);
      setCookieClient('role',  0, data.maxAge);
      messageContext?.handleAddMessage({ type: 'success', title: 'Đăng nhập thành công', content: 'Đăng nhập dưới tài khoản ' + userName + ' thành công' });
    }).catch((err : any) => {
      console.log(err);
      if (err.response?.status == 409)
        messageContext?.handleAddMessage({ type: 'fail', title: 'Đăng nhập thất bại', content: 'Đăng nhập ' + userName + ' thất bại' });
      else
        messageContext?.handleAddMessage({ type: 'fail', title: 'Đăng nhập thất bại', content: 'Đăng nhập của bạn không được hoàn thành' });
    })
      .finally(() => setLoading(false))
  };

  return (
    <Modal
      open={showSignIn}
      onClose={() => handleShowSignIn(false)}
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
                onClick={handleSignIn}
                loading={loading}
                loadingPosition="start"
                startIcon={<DoubleArrowIcon />}
              >
                Sign In
              </LoadingButton>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  )
}