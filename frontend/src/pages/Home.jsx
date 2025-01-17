import React from 'react'
import { useChatStore } from '../store/useChatStore'
import Sidebar from '../components/Sidebar';
import NoChatSelected from '../components/NoChatSelected';
import ChatContainer from '../components/ChatContainer';
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/useAuthStore';
const Home = () => {
    const { selectedUser } = useChatStore();
    const { authUser } = useAuthStore();
    return (
        <div className="h-screen bg-base-200">
            <div className="flex items-center justify-center pt-20 px-4 flex-col">
                {/* <h1>Welcome {authUser.fullName}</h1> */}
                <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
                    <div className="flex h-full rounded-lg overflow-hidden">
                        <Sidebar />
                        {/* <NoChatSelected /> */}
                        {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home