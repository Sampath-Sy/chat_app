import {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';
import React from 'react'
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <div>
      <ChatEngine
          height="100vh"
          projectID="639f4f9e-1806-445a-b60c-70c729a33473"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}


      
      />
    </div>
  )
}

export default App
