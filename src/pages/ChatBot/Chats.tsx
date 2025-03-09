// Chats.tsx
import React from "react";
import * as pages from "../../index.ts";
import { Tooltip, CircularProgress } from "@mui/material";
import { Copy } from "lucide-react";
import "./components/index.css";

interface Messages {
  message_id: number;
  conversation_id: number;
  sender_id: number;
  content: string;
  type: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  chat_section_id: number;
}

interface ChatsProps {
  messages: Messages[];
  isLoading: boolean;
  isSending: boolean;
}

function Chats({ messages, isLoading, isSending }: ChatsProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress />
      </div>
    );
  }

  if(messages.length === 0){
    <div>Enter New Message !</div>
  }

  return (
    <div>
      {messages?.map((message) => (
        <div key={message.message_id}>
          {message.type === "QUESTION" && (
            <div className="flex justify-end w-[100%] m-2 overflow-y-auto">
              <pages.questionArea message={message.content} />
            </div>
          )}
          {message.type === "RESPONSE" && (
            <div className="flex justify-start w-[100%] m-2">
              <div className="flex flex-col">
                <pages.responseArea message={message.content} />
                <Tooltip title="Copy">
                  <Copy className="hover:opacity-65" size={18} />
                </Tooltip>
              </div>
            </div>
          )}
        </div>
      ))}
      {isSending && (
        <div className="flex justify-start w-[100%] m-2">
          <CircularProgress size={20} />
        </div>
      )}
    </div>
  );
}

export default Chats;
