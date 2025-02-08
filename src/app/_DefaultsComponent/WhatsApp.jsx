import Image from "next/image";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <Link
      href="https://wa.me/+8801703033332"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-[99]"
    >
      <Image
        src="/wp.png"
        width={40}
        height={40}
        alt="WhatsApp Image"
        className="w-[50px] h-[50px] hover:scale-110 transition-transform duration-300"
      />
    </Link>
  );
}
