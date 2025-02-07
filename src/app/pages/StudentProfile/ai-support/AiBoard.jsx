"use client";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { useState } from "react";

export default function AiBoard() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCJJj3dylstQ9VfUTtOJxz-dcWxlprx_NM",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${input} answer me by bangla`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const aiMessage = {
        text: data.candidates[0].content.parts[0].text,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Failed to get response from AI.", sender: "ai" },
      ]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <div className="container max-h-screen  mx-auto bg-white rounded-md border p-3 min-h-[700px] flex justify-between flex-col">
      <h1 className="text-xl font-bold text-center mb-4">
        Solve your problem by AI
      </h1>
      {/* Chat content box */}
      <div className="flex-1 max-h-[calc(100%-150px)]  overflow-y-auto p-3 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg whitespace-pre-wrap ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
              Thinking...
            </div>
          </div>
        )}
      </div>
      {/* Input box */}
      <div className="flex  gap-2 items-center p-3 border-t">
        <input
          type="text"
          placeholder="Write your problem"
          className="w-full p-2 px-4 border outline-0 rounded-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          type="submit"
          className="p-2 rounded-md border bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={handleSendMessage}
          disabled={isLoading}
        >
          <BsFillSendArrowUpFill className="text-xl" />
        </button>
      </div>
    </div>
  );
}
