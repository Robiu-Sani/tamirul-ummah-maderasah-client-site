import AiBoard from "./AiBoard";

export default function page() {
  return (
    <div className="w-full bg-white fixed top-0 left-0 z-[99999] h-screen flex justify-center items-center ">
      <AiBoard />
    </div>
  );
}
