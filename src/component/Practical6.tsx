// 6. Chat Application Sidebar
// Hooks
// useState
// useCallback
// React.memo
// Problem Statement

import type { JSX } from "react/jsx-dev-runtime";
import { chatData } from "../data/chatData";
import { useCallback, useState } from "react";
import ChatWindow from "./Pr6ChatWindow";

// Create:

// chat list
// unread count
// search users
// clicking one chat should NOT rerender all chats
// Real World Mapping

// WhatsApp, Slack, Discord.

// Important Learning

// Why functions recreate on every render.

// Main Goal

// Prevent unnecessary rerenders.

function Practical6(): JSX.Element {
    const [chats, setChats] = useState(chatData);
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const handleChatClick = useCallback((id: number) => {

        const chat = chats.find(chat => chat.id === id);
        if (chat) {
            let updatedChats = chats.map(c => c.id === id ? { ...c, unread: 0 } : c);
            setChats(updatedChats);
            setSelectedChat(chat)
        }
    }, [chats]);
    return (
        <div>
            <h2>Chat Application Sidebar</h2>
            <div style={{ display: "flex", width: "100%", height: "400px", border: "1px solid black", }}>
                <div className="left" style={{ width: "30%", height: "100%", border: "1px solid black" }}>
                    {chats.map((chat) => (
                        <div key={chat.id} style={{ display: "flex", justifyContent: "space-between", padding: "5px", borderBottom: "1px solid gray" }} onClick={() => handleChatClick(chat.id)}>
                            <span>{chat.user}</span>
                            <span>{chat.chats[chat.chats.length - 1]}</span>
                            <span style={{ backgroundColor: "red", color: "white", borderRadius: "50%", padding: "2px 6px" }}>{chat.unread}</span>
                        </div>
                    ))}
                </div>
                <div className="right" style={{ width: "70%", height: "100%", border: "1px solid black" }}>
                    <h3>Chat Window</h3>
                    <ChatWindow chat={selectedChat} />
                </div>
            </div>
        </div>
    )
}
export default Practical6;
