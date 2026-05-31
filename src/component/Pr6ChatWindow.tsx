import React from "react";

type ChatWindowProps = {
  chat: {
    id: number;
    user: string;
    chats: string[];
    unread: number;
  } | null;
};

const ChatWindow: React.FC<ChatWindowProps> = React.memo(({ chat }) => {
  if (!chat) return null;

  return (
    <div>
      <h4>{chat.user}</h4>
      <ul>
        {chat.chats.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
});

export default ChatWindow;
