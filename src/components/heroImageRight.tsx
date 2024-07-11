"use client";
import Image from "next/image";
import ImageThree from "@/public/image-three.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function HeroImageRight() {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <button className="uppercase shop-now-btn w-20 text-sm text-wrap h-20 flex justify-center items-center rounded-full absolute border-2 border-white p-8 text-white z-10 box-border">
        Shop Now
      </button>
      <div className="absolute overlay w-full p-6 box-border h-full flex flex-col gap-4 flex-wrap justify-end items-end top-0 left-0">
        <button
          onClick={() => {
            console.log("Learn More");
          }}
          className="bg-white w-full  uppercase rounded-full py-1 pl-5 pr-1 cursor-pointer box-border flex justify-between items-center"
        >
          Learn More
          <div className="relative bg-black flex items-center justify-center rounded-full w-12 h-12">
            <span className="absolute text-white">↓</span>
          </div>
        </button>
        <button
          onClick={() => {
            console.log("Contact Us");
          }}
          className="border-2 w-full uppercase rounded-full py-1 pl-5 pr-1 cursor-pointer box-border flex justify-between items-center"
        >
          <span className="text-white">Contact Us</span>
          <div className="relative bg-white flex items-center justify-center rounded-full w-12 h-12">
            {/* <span className="absolute text-white">↓</span> */}
            <FontAwesomeIcon icon={faEnvelope} className=""></FontAwesomeIcon>
          </div>
        </button>
      </div>
      <Image src={ImageThree} alt="A bucket hat model"></Image>
    </div>
  );
}
