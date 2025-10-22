import { useEffect, useRef, useState } from "react";
import { useChatStore } from "../../store/ChatStore";
import { Button } from "primereact/button";
import './QInsightChatPopup.css';
import Icon from "../Icon/Icon";

const QInsightChatPopup = () => {
    const { messages, addMessage, isLoading, setLoading, clearChat, chatVisible, setChatVisible, setFabVisible } = useChatStore();
    const [input, setInput] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const fakeLLMResponse = (input: string) =>
        new Promise<string>((res) => setTimeout(() => res(`Echo: ${input}`), 800));

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';

            const maxHeight = 160;
            let newHeight = textareaRef.current.scrollHeight;
            if (newHeight == 0 ) {
                newHeight=25;
            }
            if (newHeight > maxHeight) {
                newHeight = maxHeight;
                textareaRef.current.classList.add('overflow-y-auto');
            } else {
                textareaRef.current.classList.remove('overflow-y-auto');
            }
            textareaRef.current.style.height = `${newHeight}px`;
        }
    }, [input]);

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

    const resetConversation = () => {
        clearChat();
    }

    const closeChat = () => {
        setChatVisible(false);
        setFabVisible(true);
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className={`qinsight-chat-popup ${chatVisible === false ? "hidden" : ""}`}>
            <div className="qinsight-chat-popup-header">
                <div className="qinsight-chat-popup-header-left">
                    <Icon type="img" img="/icons/robot.png" iconClassname="qinsight-chat-popup-icon" />
                    <span>QInsight - Chat</span>
                </div>
                <div>
                    <Button severity="secondary" rounded text icon="pi pi-file-edit" onClick={() => resetConversation()} tooltip="Reiniciar conversacion" tooltipOptions={{ position: 'top' }} />
                    <Button severity="secondary" rounded text icon="pi pi-times" onClick={() => closeChat()} />
                </div>
            </div>
            <div className="qinsight-chat-popup-messages-container">
                {messages.map((m) => (
                    <div key={m.id} className={`message ${m.role}`}>
                        {m.content}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="qinsight-chat-popup-footer">
                <textarea ref={textareaRef} value={input} className="qinsight-chat-popup-footer-input"
                    onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
                    rows={1} placeholder="Pregunta lo que quieras..." disabled={isLoading} />
                <div className="qinsight-chat-popup-footer-button-container">
                    {/* <button onClick={sendMessage} disabled={!input.trim()} className="qinsight-chat-popup-footer-input-button"><i className="pi pi-arrow-right"/></button> */}
                    <Button rounded size="small" icon="pi pi-arrow-right" className="qinsight-chat-popup-footer-input-button" />
                </div>

            </div>
        </div>
    );
}

export default QInsightChatPopup;
