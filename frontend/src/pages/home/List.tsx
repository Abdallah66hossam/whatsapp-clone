import { Camera, MessageCircle, MoreVertical, Search } from "lucide-react";
import type { ChatListProps } from "../../types/chat";

export const List = ({ chats, onSelectChat }: ChatListProps) => {
  return (
    <div className="h-screen bg-[#111b21] flex flex-col">
      {/* Header */}
      <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between">
        <h1 className="text-white text-xl font-medium">WhatsApp</h1>
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white">
            <Camera size={22} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Search size={22} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <MoreVertical size={22} />
          </button>
        </div>
      </div>

      <div className="bg-[#111b21] px-4 py-3">
        <div className="bg-[#202c33] rounded-lg px-4 py-2 flex items-center gap-3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className="bg-[#111b21] hover:bg-[#202c33] px-4 py-3 flex items-center gap-3 cursor-pointer border-b border-[#202c33]"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[#25d366] flex items-center justify-center text-white font-medium">
                {chat.avatar}
              </div>
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25d366] rounded-full border-2 border-[#111b21]"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white font-medium truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400 truncate flex-1">
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-[#25d366] flex items-center justify-center ml-2">
                    <span className="text-xs text-black font-medium">
                      {chat.unread}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors">
        <MessageCircle size={24} className="text-white" />
      </button>
    </div>
  );
};
