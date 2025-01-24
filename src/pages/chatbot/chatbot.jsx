import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your supportive companion. Feel free to share your thoughts and feelings - I'm here to listen and help. How are you feeling today?",
      sender: 'bot',
      emotion: null
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: 'Previous Chat 1' },
    { id: 2, title: 'Previous Chat 2' },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = { 
        text: "This is a sample response. The actual response will come from the backend. I'm making this response a bit longer to demonstrate the new text sizing and layout changes.",
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const startNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="chatbot-modern">
      <div className="chat-sidebar">
        <button className="new-chat-button" onClick={startNewChat}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          New chat
        </button>
        <div className="chat-history">
          {chatHistory.map(chat => (
            <div key={chat.id} className="chat-history-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {chat.title}
            </div>
          ))}
        </div>
      </div>
      
      <div className="main-chat">
        <div className="chat-header">
          <h1>MentalNote Companion</h1>
          <p>A safe space for your thoughts and feelings</p>
        </div>

        <div className="chat-container">
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <div className="message-content">
                  <div className="avatar">
                    {message.sender === 'bot' ? '🤖' : '👤'}
                  </div>
                  <div className="message-bubble">
                    <p>{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-content">
                  <div className="avatar">🤖</div>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <form onSubmit={handleSubmit}>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Share your thoughts..."
                rows="1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={!inputValue.trim() || isTyping}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
