export async function getAllChats() {
    try {
      const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
      const data = await response.json();
      console.log('API response for chats:', data); 
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch chats');
      }
      return data; 
    } catch (error) {
      console.error('Error fetching chats:', error);
      return { data: [] }; 
    }
  }
  
  export async function getChatMessages(chatId) {
    try {
      const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
      const data = await response.json();
      console.log('API response for messages:', data);
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch messages');
      }
      return data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      return { data: [] }; 
    }
  }
  