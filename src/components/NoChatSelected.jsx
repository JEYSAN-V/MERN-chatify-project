import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const NoChatSelected = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
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
    </div>
  );
};

export default NoChatSelected;
