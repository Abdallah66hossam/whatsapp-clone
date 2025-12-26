import {
  ArrowLeft,
  CheckCheck,
  Mic,
  MoreVertical,
  Paperclip,
  Search,
  Send,
  Smile,
} from "lucide-react";
import type { ChatViewProps, Message } from "../../types/chat";
import { useState } from "react";

export const View = ({ chat, messages, onBack }: ChatViewProps) => {
  const [message, setMessage] = useState<string>("");

  const handleSend = () => {
    if (message.trim()) {
      alert(`Sending: ${message}`);
      setMessage("");
    }
  };

  return (
    <div className="h-screen bg-[#0b141a] flex flex-col">
      {/* Chat Header */}
      <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="text-gray-400 hover:text-white">
          <ArrowLeft size={24} />
        </button>
        <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center text-white font-medium">
          {chat.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium">{chat.name}</h3>
          <p className="text-xs text-gray-400">
            {chat.online ? "online" : "offline"}
          </p>
        </div>
        <button className="text-gray-400 hover:text-white">
          <Search size={20} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <MoreVertical size={20} />
        </button>
      </div>

      <div
        className="flex-1 overflow-y-auto bg-[#0b141a] p-4"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-2">
          {messages.map((msg: Message) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-lg px-3 py-2 ${
                  msg.sender === "me"
                    ? "bg-[#005c4b] text-white"
                    : "bg-[#202c33] text-white"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-xs text-gray-400">{msg.time}</span>
                  {msg.sender === "me" && (
                    <CheckCheck size={16} className="text-[#53bdeb]" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#202c33] px-4 py-3 flex items-center gap-2">
        <button className="text-gray-400 hover:text-white">
          <Smile size={24} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Paperclip size={24} />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message"
          className="flex-1 bg-[#2a3942] text-white py-2 px-4 rounded-lg focus:outline-none placeholder-gray-500"
        />
        {message.trim() ? (
          <button
            onClick={handleSend}
            className="text-[#25d366] hover:text-[#20bd5a]"
          >
            <Send size={24} />
          </button>
        ) : (
          <button className="text-gray-400 hover:text-white">
            <Mic size={24} />
          </button>
        )}
      </div>
    </div>
  );
};
