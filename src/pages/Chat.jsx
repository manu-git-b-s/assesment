import { useState, useEffect, useRef } from 'react';
import { User, Bot, Send, Plus } from 'lucide-react';
import { defaultSessions } from '../data/staticData';

const ChatPage = () => {
  const [sessions, setSessions] = useState(defaultSessions);
  const [activeSessionId, setActiveSessionId] = useState(defaultSessions[0].id);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSession?.messages]);

  const handleSendMessage = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: newMessage,
      timestamp: new Date(),
    };
    setSessions((prev) =>
      prev.map((session) =>
        session.id === activeSessionId
          ? { ...session, messages: [...session.messages, userMessage] }
          : session,
      ),
    );
    setNewMessage('');

    setTimeout(() => {
      const responses = [
        "That's a great question! Let me analyze that for you.",
        'I can help you with that. Based on the current data trends...',
        "Interesting point! Here's what I found in your metrics...",
        'Let me break that down for you with some insights.',
        'Great observation! The data suggests...',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage = {
        type: 'assistant',
        content: randomResponse,
        timestamp: new Date(),
      };
      setSessions((prev) =>
        prev.map((session) =>
          session.id === activeSessionId
            ? { ...session, messages: [...session.messages, assistantMessage] }
            : session,
        ),
      );
    }, 1000);
  };

  const handleNewChat = () => {
    const newId = sessions.length ? Math.max(...sessions.map((s) => s.id)) + 1 : 1;
    const newSession = {
      id: newId,
      title: `Chat ${newId}`,
      messages: [
        {
          type: 'assistant',
          content: "Hello! I'm your AI assistant. How can I help you today?",
          timestamp: new Date(),
        },
      ],
    };
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newId);
  };

  return (
    <div className="min-h-screen bg-white flex">
      <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={handleNewChat}
            className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition mb-2 text-black font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => setActiveSessionId(session.id)}
              className={`w-full text-left px-4 py-3 flex items-center gap-2
                ${
                  activeSessionId === session.id
                    ? 'bg-gray-200 border-l-4 border-black font-bold'
                    : 'hover:bg-gray-100'
                }
                text-black transition`}
            >
              <Bot className="w-5 h-5" />
              <span className="truncate">{session.title}</span>
            </button>
          ))}
        </div>
      </aside>

      <div className="flex-1 flex flex-col bg-white">
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-black mb-2">AI Assistant</h1>
            <p className="text-gray-600">Ask me anything about your analytics</p>
          </div>

          <div className="flex-1 bg-white rounded-t-2xl border border-gray-200 border-b-0 overflow-hidden flex flex-col shadow-sm">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {activeSession?.messages?.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  } animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`flex items-start space-x-3 max-w-3xl ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                        message.type === 'user'
                          ? 'bg-white border-gray-300'
                          : 'bg-gray-900 border-gray-700'
                      }`}
                    >
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-black" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl p-4 border text-sm ${
                        message.type === 'user'
                          ? 'bg-gray-100 border-gray-300 text-black ml-auto'
                          : 'bg-gray-900 border-gray-700 text-white'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-60 mt-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>

          <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 p-4">
            <form
              className="flex items-center space-x-4"
              onSubmit={handleSendMessage}
              autoComplete="off"
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Ask me about your analytics..."
                className="flex-1 bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    handleSendMessage(e);
                  }
                }}
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-black text-white p-3 rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ChatPage;
