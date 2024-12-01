// src/components/Chatbot.js
import React, { useState } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message to the chat
    setMessages([...messages, { sender: "user", text: input }]);

    // Clear the input field
    setInput("");

    // Get chatbot's response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
    }, 1000); // Simulate response delay
  };

  const getBotResponse = (userMessage) => {
    // Simulated climate information response
    const responses = {
      "What is climate change?":
        "Climate change refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities like burning fossil fuels.",
      "How can I reduce my carbon footprint?":
        "You can reduce your carbon footprint by using energy-efficient appliances, walking or cycling instead of driving, and supporting renewable energy.",
      "What are the effects of climate change?":
        "Climate change can lead to extreme weather events, rising sea levels, loss of biodiversity, and more.",
      // Add more responses here based on common climate questions
    };
    return responses[userMessage] || "I'm not sure about that. Can you ask something else?";
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="chat-header">
          <h3>Climate AI Chatbot</h3>
          <button
            className="close-btn"
            onClick={() => setMessages([])} // Clear chat history
          >
            X
          </button>
        </div>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "user" : "bot"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask about climate change..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
