"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MouseButton = () => {
  const router = useRouter();
  return (
    <Image
      src="/images/mouse-down.gif"
      width="30"
      height="20"
      alt="mouse-down"
      onClick={() => router.push("#portfolio")}
      className="absolute bottom-9 left-1/2 right-1/2 z-30 hidden cursor-pointer md:flex"
    />
  );
};
export default MouseButton;