import Arrow from "@/public/arrow.svg";
import Image from "next/image";
export default function HeroText() {
  return (
    <div className="p-6 flex">
      <div className="bg-[#DBDAD7] rounded-lg p-6">
        <h1>
          For{" "}
          <Image
            src={Arrow}
            alt="Forward Pointing Arrow"
            className="inline"
          ></Image>{" "}
          Everyone notanyone
        </h1>
      </div>
    </div>
  );
}
