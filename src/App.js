import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import Header from './components/Header';
import './App.css';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Container className="app-container">
      <Header />
      <Grid container spacing={2} className="main-grid">
        <Grid item xs={12} md={4} className="chat-list-grid">
          <ChatList setSelectedChat={setSelectedChat} />
        </Grid>
        <Grid item xs={12} md={8} className="chat-window-grid">
          {selectedChat ? (
            <ChatWindow chatId={selectedChat} />
          ) : (
            <div>Select a chat to view messages</div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
