"use client";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiFileUserFill } from "react-icons/ri";
import { SiWikimediafoundation } from "react-icons/si";

export default function AiBoard() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

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
    <div className="container relative mx-auto bg-white rounded-md border am:border-0 pb-3 px-2 h-full flex flex-col">
      <div className="w-full flex justify-center items-center">
        <div className="flex">
          <Link href={"/"} className="p-2">
            <FaHome className="text-green-500 text-2xl" />
          </Link>
          <Link href={"/pages/StudentProfile"} className="p-2">
            <RiFileUserFill className="text-green-500 text-2xl" />
          </Link>
          <Link href={"/pages/articles"} className="p-2">
            <SiWikimediafoundation className="text-green-500 text-2xl" />
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <marquee className="text-sm text-green-500">
            In today`s fast-paced world, finding solutions quickly and
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
      {/* Chat content box */}
      <div className="flex-1 overflow-y-auto mb-11 p-3 space-y-3 border rounded-md">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[90%] p-3 rounded-lg whitespace-pre-wrap ${
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
            <Image
              src="/ai.gif"
              alt="ai"
              className="h-[100px] w-[120px] rounded-lg border"
              height={50}
              width={500}
            />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input box */}
      <div className="flex w-full absolute bottom-2 gap-2 items-center pt-3 ">
        <input
          type="text"
          placeholder="Write your problem"
          className="w-[calc(100%-60px)] p-2 px-4 border outline-0 rounded-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
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
