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
    <div className="w-full mt-4 sm:m-0 flex flex-wrap gap-4 sm:flex-nowrap bg-red-300 overflow-hidden ">
      {vibeImages.map((vibeImage) => (
        <div
          key={vibeImage.id}
          className="relative w-full h-full bg-red-200 rounded-lg overflow-hidden mb-4"
        >
          <div className="overlay text-white p-4 flex items-end absolute h-full w-full">
            <p className="text-6xl md:text-4xl bebas-neue-regular">
              {vibeImage.text}
            </p>
          </div>
          <Image
            className="sm:w-auto h-auto top-1/2 left-1/2"
            src={vibeImage.image}
            alt={vibeImage.text}
            layout="fill"
          ></Image>
        </div>
      ))}
    </div>
  );
}
