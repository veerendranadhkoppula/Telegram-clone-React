import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Paper, CircularProgress } from '@mui/material';
import { getAllChats } from '../services/api';

function ChatList({ setSelectedChat }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllChats()
      .then(data => {
        setChats(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching chats:', error);
        setChats([]);
        setLoading(false);
      });
  }, []);

  return (
    <Paper className="chat-list">
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {chats.length > 0 ? (
            chats.map(chat => (
              <ListItem button key={chat.id} onClick={() => setSelectedChat(chat.id)}>
                <ListItemText primary={chat.name} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No chats available" />
            </ListItem>
          )}
        </List>
      )}
    </Paper>
  );
}

export default ChatList;
