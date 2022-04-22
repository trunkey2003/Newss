import '../styles/globals.css'
import { Layout } from '../components/layout/index';
import AlertBoxWrapper from '../components/common/alertBoxWrapper';
import AlertBox from '../components/common/alertBox';
import { MessageType } from '../models/Message';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

type MessageContextType = {
  handleAddMessage : (msg: MessageType) => void
} | null

export const MessageContext = createContext<MessageContextType>(null);

export default function MyApp({ Component, pageProps }: any) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const route = useRouter();

  useEffect(() =>{
    const pathnameArr = route.pathname.split('/');
    if (pathnameArr[1] == 'admin') console.log('admin!!!');
    return;
  }, [])

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
