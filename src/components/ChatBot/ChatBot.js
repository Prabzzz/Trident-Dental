import React, { useState } from "react";
import { chatFlow } from "../../chatData/chatFlow";
import { useNavigate } from "react-router-dom";
import "./ChatBot.scss";

const ChatBot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("start");
  const [messages, setMessages] = useState([
    { sender: "bot", text: chatFlow.start.message }
  ]);

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    // Reset chat completely
    setCurrentStep("start");
    setMessages([{ sender: "bot", text: chatFlow.start.message }]);
  };

  const handleOptionClick = (option) => {
    const updatedMessages = [
      ...messages,
      { sender: "user", text: option.label }
    ];

    if (option.next === "redirect") {
      navigate("/appointment");
      return;
    }

    const nextStep = chatFlow[option.next];

    updatedMessages.push({
      sender: "bot",
      text: nextStep.message
    });

    setMessages(updatedMessages);
    setCurrentStep(option.next);
  };

  const currentOptions = chatFlow[currentStep]?.options || [];

  return (
    <div className="chatbot-wrapper">

      {/* Show icon ONLY when closed */}
      {!isOpen && (
        <div className="chatbot-icon" onClick={openChat}>
          Chat
        </div>
      )}

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot__header">
            <span>Trident Dental Clinic</span>
            <button onClick={closeChat}>×</button>
          </div>

          <div className="chatbot__body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot__message ${
                  msg.sender === "user" ? "user" : "bot"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot__options">
            {currentOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
