import { useState, useEffect } from "react";

export default function Audio({ audioText }) {
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const updateVoices = () => {
      const voices = synth.getVoices();
      console.log("Available Voices:", voices); // ✅ Debugging log
      const selectedVoice = voices.find(
        (v) => v.lang === "bn-BD" || v.lang === "en-US"
      );
      setVoice(selectedVoice || voices[0]); // প্রথম ভয়েস fallback হিসেবে সেট করা হলো
    };

    // প্রথমবার ভয়েস আপডেট করা
    updateVoices();

    // যখন ভয়েস পরিবর্তিত হয় তখন ইভেন্ট লিসেনার ব্যবহার করা
    synth.addEventListener("voiceschanged", updateVoices);

    return () => {
      synth.removeEventListener("voiceschanged", updateVoices);
    };
  }, []);

  const speakText = () => {
    if (!audioText || !voice) return;
    const utterance = new SpeechSynthesisUtterance(audioText);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    window.speechSynthesis.speak(utterance);
    console.log("Utterance Voice:", utterance.voice);
    console.log("Language:", utterance.lang);
    console.log("Button Clicked");
  };

  return (
    <div>
      <button
        onClick={speakText}
        className="p-2 bg-blue-500 text-white rounded"
      >
        🎤 Play Audio
      </button>
    </div>
  );
}
