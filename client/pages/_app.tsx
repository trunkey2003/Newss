import '../styles/globals.css'
import { Layout } from '../components/layout/index';
import { Axios } from '../configs/axios';
import AlertBoxWrapper from '../components/common/alertBoxWrapper';
import AlertBox from '../components/common/alertBox';
import { MessageType } from '../models/Message';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import Unauthorized from '../components/common/unauthorized';

type MessageContextType = {
  handleAddMessage : (msg: MessageType) => void
} | null

export const MessageContext = createContext<MessageContextType>(null);

export default function MyApp({ Component, pageProps }: any) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [authAdmin, setAuthAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  useEffect(() =>{
    const pathnameArr = route.pathname.split('/');
    if (pathnameArr[1] != 'admin'){
      setAuthAdmin(null); 
      setLoading(false);
      return;
    }
    
    Axios.post('/api/user/verify-admin')
    .then((res)=>{
      setAuthAdmin(res.data);
    })
    .catch((err) =>{
      setAuthAdmin(false);
    })
    .finally(() => setLoading(false))

    //Nếu là route admin thì sẽ gửi request kèm cookie tới server để check role
    
  }, []);

  if (authAdmin === false) return <Unauthorized/>
  if (loading) return <div></div>

  const handleCloseMessage = (index: Number) => {
    let _messages = messages;
    _messages = _messages.filter((message, i) => i != index);
    setMessages(_messages);
  }

  const handleAddMessage = (msg: MessageType) => {
    setMessages([...messages, msg]);
  }

  const value : MessageContextType = {
    handleAddMessage: handleAddMessage
  } 

  return (
    <MessageContext.Provider value={value}>
      <Layout>
        <AlertBoxWrapper>
          {messages.map((message, index) => <AlertBox key={index} message={message} handleCloseMessage={handleCloseMessage} index={index} />)}
        </AlertBoxWrapper>
        <Component {...pageProps} />
      </Layout>
    </MessageContext.Provider>
  )
}
