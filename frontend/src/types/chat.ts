export interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  time: string;
}

export interface ChatListProps {
  chats: Chat[];
  onSelectChat: (chatId: number) => void;
}

export interface ChatViewProps {
  chat: Chat;
  messages: Message[];
  onBack: () => void;
}
