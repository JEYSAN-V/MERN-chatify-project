import { useState } from "react";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";


const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null); // ✅ State to track selected user

  return (
    <>
      <div className="h-screen bg-base-200">
        <div className="flex items-center justify-center pt-20 px-4">
          <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
            <div className="flex h-full rounded-lg overflow-hidden">
              {/* ✅ Pass setSelectedUser so Sidebar can update selected user */}
              <Sidebar setSelectedUser={setSelectedUser} selectedUser={selectedUser} />

              {/* ✅ Pass selectedUser so ChatContainer can display chat */}
              {!selectedUser ? <NoChatSelected /> : <ChatContainer selectedUser={selectedUser} />}
            </div>
          </div>
        </div>
      </div>
    </>
      
  );
};

export default HomePage;
