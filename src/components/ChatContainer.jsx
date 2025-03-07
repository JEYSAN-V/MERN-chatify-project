import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import Sidebar from "./Sidebar";

const ChatContainer = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelectUser={setSelectedUser} />
      <div className="flex-1 flex flex-col">
        {selectedUser ? (
          <>
            <ChatHeader/>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="chat chat-end">
                  <div className="chat-bubble">
                    {message.image && <img src={message.image} alt="Attachment" />}
                    {message.text && <p>{message.text}</p>}
                  </div>
                </div>
              ))}
            </div>
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-zinc-500">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatContainer;
