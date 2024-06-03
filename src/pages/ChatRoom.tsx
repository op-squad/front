import React, { useState, useEffect, useRef, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setMessages, addMessage } from "../features/chat/chatSlice";
import webSocketService from "@/features/chat/WebSocketService";
import { useGetMessageQuery } from "@/features/chat/chatApiSlice";
import "../index.css"; // Assuming you have the tailwind styles imported here

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const [message, setMessage] = useState("");
  const [senderId] = useState("1"); // Placeholder for actual sender ID
  const [recipientId] = useState("2"); // Placeholder for actual recipient ID

  // Use the generated RTK Query hook to fetch messages
  const {
    data: fetchedMessages,
    error,
    isLoading,
  } = useGetMessageQuery({
    senderId,
    recipientId,
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    webSocketService.connect();
  }, []);

  // Handle fetching messages and updating state
  useEffect(() => {
    if (!isLoading && !error && fetchedMessages) {
      dispatch(setMessages(fetchedMessages));
    }
  }, [fetchedMessages, isLoading, error, dispatch]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!message) return;
    const chatMessage = {
      id: "",
      chatId: "",
      senderId,
      recipientId,
      content: message,
      timestamp: new Date().toISOString(),
    };
    webSocketService.sendMessage(chatMessage);
    dispatch(addMessage(chatMessage)); // Add the message to the Redux store
    setMessage("");
  };

  return (
    <div>
      <div className="bg-blue-50 rounded-lg max-h-96 shadow-lg flex flex-col">
        <div className="flex h-full justify-between">
          <p className="font-extrabold text-xl pt-8 pb-4 px-8 2xl:text-2xl text-blue-950">
            Chat Room
          </p>
        </div>
        <hr className="mx-[-32px] h-full" />
        <div
          className="flex-1 p-4 overflow-y-auto border-b border-gray-300"
          style={{ maxHeight: "400px" }}
        >
          {Array.isArray(messages) && messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-md ${
                  msg.senderId === senderId
                    ? "bg-blue-100 self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                <strong>
                  {msg.senderId === senderId ? "Me" : msg.senderId}:{" "}
                </strong>{" "}
                {msg.content}
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center ">No messages yet</div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={handleSendMessage}
          className="flex p-4 border-t border-gray-300"
        >
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
