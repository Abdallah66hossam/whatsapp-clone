import { useState } from "react";
import type { Chat, Message } from "../../types/chat";
import { List } from "./List";
import { View } from "./View";

export default function Home() {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const chats: Chat[] = [
    {
      id: 1,
      name: "John Doe",
      avatar: "JD",
      lastMessage: "Hey! How are you doing?",
      time: "10:30 AM",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Sarah Smith",
      avatar: "SS",
      lastMessage: "See you tomorrow!",
      time: "9:15 AM",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "MJ",
      lastMessage: "Thanks for your help",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "Emily Davis",
      avatar: "ED",
      lastMessage: "Can you send me the files?",
      time: "Yesterday",
      unread: 5,
      online: false,
    },
    {
      id: 5,
      name: "Team Project",
      avatar: "TP",
      lastMessage: "Meeting at 3 PM",
      time: "12/25",
      unread: 0,
      online: false,
    },
    {
      id: 6,
      name: "Alex Brown",
      avatar: "AB",
      lastMessage: "Got it, thanks!",
      time: "12/24",
      unread: 0,
      online: true,
    },
  ];

  const messages: Message[] = [
    { id: 1, text: "Hey! How are you?", sender: "other", time: "10:25 AM" },
    {
      id: 2,
      text: "I am good, thanks! How about you?",
      sender: "me",
      time: "10:26 AM",
    },
    {
      id: 3,
      text: "Doing great! Want to grab coffee later?",
      sender: "other",
      time: "10:28 AM",
    },
    {
      id: 4,
      text: "Sure! What time works for you?",
      sender: "me",
      time: "10:29 AM",
    },
    { id: 5, text: "How about 3 PM?", sender: "other", time: "10:30 AM" },
  ];

  const handleSelectChat = (chatId: number) => {
    setSelectedChatId(chatId);
  };

  const handleBackToList = () => {
    setSelectedChatId(null);
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <>
      {selectedChat ? (
        <View
          chat={selectedChat}
          messages={messages}
          onBack={handleBackToList}
        />
      ) : (
        <List chats={chats} onSelectChat={handleSelectChat} />
      )}
    </>
  );
}
