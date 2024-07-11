import Arrow from "@/public/arrow.svg";
import Image from "next/image";
export default function HeroText() {
  return (
    <div className="p-6 rounded-lg flex flex-wrap box-border bg-[#DBDAD7]">
      <h1 className="bebas-neue-regular text-8xl">
        For
        <Image
          src={Arrow}
          alt="Forward Pointing Arrow"
          className="inline w-48 ml-4"

          // layout="responsive"
        ></Image>
        Everyone notanyone
      </h1>
      <p className="mt-24">
        We establish personal relationship with our boutiques, to make sure each
        is vetted for a stress-free shopping experience
      </p>
    </div>
  );
}
