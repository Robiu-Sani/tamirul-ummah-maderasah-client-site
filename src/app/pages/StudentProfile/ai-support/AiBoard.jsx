"use client";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaRegPlusSquare } from "react-icons/fa";
import { RiFileUserFill } from "react-icons/ri";
import { SiWikimediafoundation } from "react-icons/si";
import SimpleAlertForComingSoon from "@/app/_DefaultsComponent/SimpleAlertForComeingSoon";

export default function AiBoard() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const handleAlert = (data) => {
    setAlert(data);
  };

  return (
    <div className="flex w-full flex-col h-screen bg-white">
      {/* Navbar */}
      {alert && <SimpleAlertForComingSoon handleAlert={handleAlert} />}

      <div className="p-3 bg-gray-100 flex justify-between items-center shadow-md">
        <div className="flex justify-start items-center">
          <Link href="/" className="text-green-500 p-1 px-2 text-2xl">
            <FaHome />
          </Link>
          <Link
            href="/pages/StudentProfile"
            className="text-green-500 p-1 px-2 text-2xl"
          >
            <RiFileUserFill />
          </Link>
          <Link
            href="/pages/articles"
            className="text-green-500 p-1 px-2 text-2xl"
          >
            <SiWikimediafoundation />
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <marquee className="text-sm text-green-500">
            In todays fast-paced world, finding solutions quickly and
            efficiently is essential. AI-powered assistance allows you to get
            instant answers, solve complex problems, and receive intelligent
            recommendations. Whether you need help with coding, troubleshooting
            errors, generating content, or answering general questions, AI is
            here to guide you. With advanced language processing, AI understands
            your queries and provides accurate, relevant, and insightful
            responses. Just type in your problem, and let AI do the rest!
            Embrace the power of AI and make problem-solving easier than ever.{" "}
          </marquee>
        </div>
      </div>

      {/* Chat Box */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
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
          <Image
            src="/ai.gif"
            alt="ai"
            height={50}
            width={50}
            className="rounded-lg"
          />
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white border-t  flex items-center sticky bottom-0 w-full">
        <div
          onClick={() => handleAlert(true)}
          className="p-2 bg-white cursor-pointer absolute right-[57px]"
        >
          <FaRegPlusSquare className="text-xl text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Write your question"
          className="flex-1 p-2 border rounded-md outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="p-2 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleSendMessage}
          disabled={isLoading}
        >
          <BsFillSendArrowUpFill className="text-xl" />
        </button>
      </div>
    </div>
  );
}
