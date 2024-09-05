"use client";
import React, { useState } from 'react';
import { MessageSquare, MessageSquareMore, Send, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatMessageProps {
  message: string;
  onClose: () => void;
}

function ChatMessage({ message, onClose }: ChatMessageProps): React.JSX.Element {
  return (
    <div className='w-full h-full rounded-md border border-gray-800 p-2 text-base flex justify-between items-center'>
      <span className='text-sm'>{message}</span>
      <Button variant='ghost' className='bg-transparent text-black' onClick={onClose}>
        <X className='w-4 h-4' />
      </Button>
    </div>
  );
}

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([
    'Hi there!',
    'How can I help you?',
    'Is everything okay?',
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const removeMessage = (index: number) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  const clearAllMessages = () => {
    setMessages([]);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MessageSquareMore className="h-8 w-8 text-white " fill='#B2B2B2'  />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[300px] rounded-md" align="end">
          <div className='w-full min-h-80 p-4 border rounded-sm flex flex-col justify-between items-center bg-[#f0f0f0]'>
            <div className='w-full h-full flex flex-col justify-start items-center gap-2'>
                {!messages.length && <span className='text-base text-center'>No messages</span>}
              { messages && messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message}
                  onClose={() => removeMessage(index)}
                />
              ))}
            </div>
            <div className='w-full rounded-b-sm rounded-t-none border border-t pt-4 flex justify-center items-center gap-4'>
              <Button variant='default' className='w-full h-full'>
                View All
              </Button>
              <Button variant='secondary' className='w-full h-full' onClick={clearAllMessages}>
                Clear All
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Chat;
