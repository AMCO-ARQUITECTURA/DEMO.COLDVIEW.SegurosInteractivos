import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
}

interface ChatStore {
  fabVisible: boolean;
  setFabVisible: (newValue: boolean) => void;
  chatVisible: boolean;
  setChatVisible: (newValue: boolean) => void;
  messages: ChatMessage[];
  isLoading: boolean;
  error?: string;
  addMessage: (role: MessageRole, content: string) => void;
  updateLastMessage: (content: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error?: string) => void;
  clearChat: () => void;
}

/**
 * Zustand store to manage chat conversation with an LLM inside a dashboard popup.
 */
export const useChatStore = create<ChatStore>((set, get) => ({
  fabVisible: true,
  setFabVisible: (newValue: boolean) => {
    set(() => ({
      fabVisible: newValue
    }))
  },
  chatVisible: false,
  setChatVisible: (newValue: boolean) => {
    set(() => ({
      chatVisible: newValue
    }))
  },
  messages: [],
  isLoading: false,
  error: undefined,

  addMessage: (role, content) => {
    const newMessage: ChatMessage = {
      id: uuidv4(),
      role,
      content,
      createdAt: new Date().toISOString(),
    };
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },

  updateLastMessage: (content) => {
    set((state) => {
      const updated = [...state.messages];
      const lastIndex = updated.length - 1;
      if (lastIndex >= 0) {
        updated[lastIndex] = {
          ...updated[lastIndex],
          content,
        };
      }
      return { messages: updated };
    });
  },

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),

  clearChat: () => set({ messages: [], error: undefined }),
}));


/* example use
import React, { useState } from "react";
import { useChatStore } from "../store/useChatStore";

export function ChatPopup() {
  const { messages, addMessage, isLoading, setLoading, clearChat } = useChatStore();
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    addMessage("user", input);
    setInput("");
    setLoading(true);

    try {
      // Mock API call to LLM
      const response = await fakeLLMResponse(input);
      addMessage("assistant", response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-popup">
      <div className="messages">
        {messages.map((m) => (
          <div key={m.id} className={`message ${m.role}`}>
            <strong>{m.role === "user" ? "You:" : "Assistant:"}</strong> {m.content}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} disabled={isLoading}>
          Send
        </button>
      </div>

      <button onClick={clearChat} className="clear-btn">Clear Chat</button>
    </div>
  );
}

// Mock API for demo
const fakeLLMResponse = (input: string) =>
  new Promise<string>((res) => setTimeout(() => res(`Echo: ${input}`), 800));

/*/