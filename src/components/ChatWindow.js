import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Paper, CircularProgress } from '@mui/material';
import { getChatMessages } from '../services/api';

function ChatWindow({ chatId }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!chatId) {
      return;
    }

    getChatMessages(chatId)
      .then(data => {
        console.log('API response for messages:', data);
        setMessages(data.data); // Assuming 'data.data' contains the array of messages
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
        setMessages([]); // Set messages to empty array on error
        setLoading(false);
      });
  }, [chatId]);

  return (
    <Paper className="chat-window">
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {messages.length > 0 ? (
            messages.map(message => (
              <ListItem key={message.id}>
                <ListItemText
                  primary={message.text}
                  secondary={new Date(message.timestamp).toLocaleString()}
                />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No messages available" />
            </ListItem>
          )}
        </List>
      )}
    </Paper>
  );
}

export default ChatWindow;
