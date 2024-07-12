import Image from "next/image";
import PuremLogo from "@/public/puremoda-logo-white.svg";
export default function Footer() {
  return (
    <div className="bg-black p-6 w-full mt-8 text-white flex justify-between items-end rounded-xl">
      <Image
        src={PuremLogo}
        alt="Purem Logo"
        className="w-1/3 md:w-1/12"
      ></Image>
      <p className="text-xs">All rights reserved</p>
    </div>
  );
}
