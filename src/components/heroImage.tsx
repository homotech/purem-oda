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
    <div className="flex flex-wrap w-full mt-4 gap-4 md:m-0 md:flex-nowrap md:h-1/3">
      {vibeImages.map((vibeImage) => (
        <div
          key={vibeImage.id}
          className="relative w-full h-full rounded-lg overflow-hidden mb-4 "
        >
          <div className="overlay text-white p-4 flex items-end absolute h-full w-full z-10">
            <p className="text-6xl md:text-4xl bebas-neue-regular">
              {vibeImage.text}
            </p>
          </div>
          <Image
            className="sm:w-full h-full top-1/2 left-1/2 md:object-cover md:w-full md:h-full object-top-left"
            src={vibeImage.image}
            alt={vibeImage.text}
            // layout="fill"
            // objectFit="cover"
          ></Image>
        </div>
      ))}
    </div>
  );
}
