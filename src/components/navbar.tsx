"use client";

import PuremLogo from "@/public/puremoda-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faEnvelope,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Navbar() {
  const LinksClassName =
    "uppercase hover:font-bold transition duration-150 ease-in-out hover:duration-150 py-4";
  const iconsClassname = "text-2xl ";
  const Links = [
    { id: 1, link: "/womenswear", text: "Women's wear" },
    { id: 2, link: "/menswear", text: "Men's wear" },
    { id: 3, link: "/kids", text: "Kids" },
    { id: 4, link: "/sale", text: "Sale" },
    { id: 5, link: "/discover", text: "Discover" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const hideNavLinks = !isOpen ? "hidden" : "";
  return (
    <nav className="navbar px-8 py-4">
      <div className="navbar-container items-center flex-row flex justify-between flex-wrap lg:flex-nowrap">
        {/* The brands Logo  */}
        <div className="logo w-1/4 lg:w-auto">
          <Link href="/">
            <Image
              src={PuremLogo}
              alt="Purem Oda Logo design"
              className="w-20"
            ></Image>
          </Link>
        </div>

        {/* The toggle Button  */}
        <div className="toggle-btn flex lg:hidden ">
          <button className="text-4xl" onClick={openMenu}>
            {isOpen ? (
              <FontAwesomeIcon className="" icon={faXmark}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon className="" icon={faBars}></FontAwesomeIcon>
            )}
          </button>
        </div>

        {/* The Navigation Links */}
        <ul
          className={
            "nav-links w-full mt-4 lg:block lg:w-2/4 lg:flex lg:flex-row lg:gap-4 lg:justify-between box-border " +
            hideNavLinks
          }
        >
          {Links.map((navLink, index) => (
            <li key={navLink.id} className={LinksClassName}>
              <Link href={navLink.link} key={navLink.id}>
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* The Navigation Icons  */}
        <div
          className={
            "flex w-full mt-4 lg:flex lg:w-auto lg:flex-row " + hideNavLinks
          }
        >
          <form className="w-full gap-4 bg-gray-100 px-4 py-3 rounded-full flex lg:flex-row lg:w-2/3">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-2xl w-1/6 flex justify-center"
            ></FontAwesomeIcon>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
              className="bg-transparent flex justify-center w-5/6 focus:outline-none"
            />
          </form>
          <div className="pl-8 gap-4 flex justify-between items-center lg:w-1/3">
            <button className="">
              <FontAwesomeIcon icon={faHeart} className={iconsClassname} />
            </button>
            <button className="">
              <FontAwesomeIcon icon={faEnvelope} className={iconsClassname} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
