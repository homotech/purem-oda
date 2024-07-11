import Image from "next/image";
import ImageOne from "@/public/image-one.jpg";
import ImageTwo from "@/public/image-two.jpg";

export default function HeroImage() {
  const divClassNames = "relative";
  const vibeImages = [
    {
      id: 1,
      image: ImageOne,
      text: "#rip stop",
    },
    {
      id: 2,
      image: ImageTwo,
      text: "#insulated",
    },
  ];

  return (
    <div className="w-full mt-4 flex flex-wrap">
      {vibeImages.map((vibeImage) => (
        <div
          key={vibeImage.id}
          className="relative w-full rounded-lg overflow-hidden mb-4"
        >
          <div className="overlay bebas-neue-regular text-white p-4 flex items-end absolute h-full w-full">
            <p className="text-6xl">{vibeImage.text}</p>
          </div>
          <Image
            className=""
            src={vibeImage.image}
            alt={vibeImage.text}
          ></Image>
        </div>
      ))}
    </div>
  );
}
