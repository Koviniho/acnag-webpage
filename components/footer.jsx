"use client";
import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#181818] max-w-screen overflow-x-hidden">
      <footer className="footer bg-[#181818]">
        <div className="w-full text-2xl font-light flex justify-center items-end">
          {/* logo has to be added here */}
          <div className="w-full h-[50vh] bg-black relative flex justify-center items-center">
            <div className="w-full h-full bg-black/90 absolute z-1"></div>
            <img
              src="/footer_use.png"
              alt="footer"
              className=" w-full h-full object-cover z-0"
            />
            <div className="absolute w-[90%] h-[80%] flex flex-col">
              <div className="flex w-full h-1/2 justify-center z-2 items-start relative">
                <img
                  src="/company_logo_2.svg"
                  alt="logo"
                  className=" md:w-60 md:h-60  object-cover absolute top-[-7rem] md:top-[-5rem]"
                />
              </div>
              <div className="md:flex hidden w-full h-1/2 z-2 justify-around">
                <div className="flex flex-col items-center gap-1">
                  <FontAwesomeIcon icon={faPhone} className="text-[green]" />
                  <p className="text-lg">+4101010101</p>
                  <p className="text-[green] text-sm font-bold">
                    Hauptzentrale
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[green]"
                  />
                  <p className="font-light text-[16px] md:w-280">
                    Leenrütimattweg 3,{" "}
                  </p>
                  <p className="font-light text-[16px] md:w-280">
                    4804 Niederbipp{" "}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[green]" />
                  <p className="text-sm font-semibold">info@acnag.ch</p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <FontAwesomeIcon icon={faClock} className="text-[green]" />
                  <div className="flex gap-1 text-sm">
                    <p className="text-[green]">MO-FR:</p>
                    <p>8:00-12:00/13:15-18:30</p>
                  </div>
                  <div className="flex text-sm gap-1">
                    <p className="text-[green]">SA</p>
                    <p>Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for desktop */}
        <div className="container md:block hidden py-10">
          <div className="flex justify-around ">
            <FooterColumn
              title="RACING"
              items={[
                "Scuderia Ferrari HP",
                "Charles Leclerc",
                "Carlos Sainz",
                "Hypercar",
                "GT Series",
              ]}
            />
            <FooterColumn
              title="SPORTS CARS"
              items={[
                "Range",
                "Configure your Ferrari",
                "MyFerrari",
                "Pre-owned",
                "Dealers",
              ]}
            />
            <FooterColumn
              title="COLLECTIONS"
              items={["Men", "Women", "Kids", "Shoes", "Eyewear"]}
            />
          </div>
        </div>

        {/* for mobile */}
        <div className="w-screen h-auto py-4 bg-[#181818] md:hidden ">
          <Footer_Colume_Mobile />
        </div>
      </footer>
      <div className="w-full h-[0.3px] bg-gray-600 md:block hidden"></div>
      <div className="w-full h-[0.3px] bg-gray-600 absolute md:hidden"></div>
      <div className="bg-[#181818] py-3 text-white md:mt-10 md:px-20">
        <SocialMedias />
      </div>
      <div className="w-full flex h-auto justify-center items-center border-t-1 border-t-gray-600 bg-[#181818] text-white">
        <div className="md:w-2/3 w-[80%] text-xs text-center px-15 py-10">
          Auto Center Niederbipp AG - Ihr erstklassiges Carrosserie-Unternehmen
          in der Schweiz, spezialisiert auf Fahrzeugverkauf, hochwertige
          Carrosseriearbeiten und professionelle Lackierungen. Unser
          Unternehmen, ansässig in Niederbipp, steht für unvergleichliche
          Qualität und herausragenden Kundenservice. Ob Fahrzeugreparaturen,
          Lackierarbeiten oder der Kauf eines neuen Fahrzeugs – die Auto Center
          Niederbipp AG ist Ihre erste Wahl. Besuchen Sie uns, um erstklassige
          Dienstleistungen zu erleben und zu verstehen, warum wir in der Region
          führend sind.
          <div style={{ marginTop: "10px" }}></div>
          Smatik GmbH - Ihr Partner für professionelle Webseitenentwicklung und
          Webdesign. Die Smatik GmbH bietet maßgeschneiderte Web-Lösungen, die
          Ihre Online-Präsenz stärken und Ihr Geschäft voranbringen. Mit einem
          hochqualifizierten Team und einem Fokus auf Performance und
          Benutzerfreundlichkeit erstellen wir Webseiten, die Ihre Marke
          hervorheben und Ihren Online-Erfolg maximieren. Vertrauen Sie auf
          Smatik GmbH für innovative und effektive Webdesign-Dienstleistungen.
          <div style={{ marginTop: "10px" }}></div>
          Urheberrecht 2024 - Alle Rechte vorbehalten.
        </div>
      </div>
      <div className="w-full p-3 font-light text-xl text-white flex border-t-1 border-t-gray-600 justify-center items-center">
        <p>Powered by </p>
        <img
          src="/Smtak_logo.svg"
          alt="Smatik Logo"
          className="w-32 h-auto ml-2"
        />
      </div>
    </div>
  );
};

const FooterColumn = ({ title, items }) => (
  <div className="text-center">
    <h3>{title}</h3>
    <ul className="flex flex-col gap-2 mt-5">
      {items.map((item, index) => (
        <li key={index} data-aos="fade-up" data-aos-delay={`${index * 50}`}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SocialMedias = () => {
  const [rotations, setRotations] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const data = [
    {
      name: "INSTAGRAM",
      src: (
        <ion-icon
          name="logo-instagram"
          style={{ width: "24px", height: "24px" }}
        ></ion-icon>
      ),
    },
    {
      name: "LINKEDIN",
      src: (
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ width: "24px", height: "24px" }}
        />
      ),
    },
    {
      name: "TIKTOK",
      src: (
        <FontAwesomeIcon
          icon={faTiktok}
          style={{ width: "24px", height: "24px" }}
        />
      ),
      href: "https://www.tiktok.com/",
    },
    {
      name: "AUTOSCOUT24",
      src: (
        <FontAwesomeIcon
          icon={faXTwitter}
          style={{ width: "24px", height: "24px" }}
        />
      ),
    },
  ];

  const handleIconClick = (index) => {
    setRotations(
      rotations.map((isRotated, i) => (i === index ? !isRotated : isRotated))
    );
    setClicked(
      clicked.map((isClicked, j) => (j === index ? !isClicked : isClicked))
    );
  };

  return (
    <div>
      <div className="w-full md:grid flex flex-col grid-cols-4 gap-7">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-start md:gap-4 md:mb-4 px-4 md:w-full w-screen"
          >
            <div className="flex items-center md:gap-16 justify-between w-full ">
              <a href={value.href}>
                <div className="flex gap-2 md:text-xl text-sm tableRow">
                  <div>{value.src}</div>
                  <div className="flex gap-2 md:text-xl text-sm">
                    <p>{value.name}</p>
                  </div>
                </div>
              </a>
              <div
                onClick={() => handleIconClick(index)}
                className={`flex justify-end w-[32px] h-[32px] items-center transition-transform transform ${
                  rotations[index] ? "-rotate-45" : ""
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer_Colume_Mobile = () => {
  const [rotations, setRotations] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const data = [
    {
      name: "RACING",
      items: [
        "Scuderia Ferrari HP",
        "Charles Leclerc",
        "Carlos Sainz",
        "Hypercar",
        "GT Series",
      ],
    },
    {
      name: "SPORTS CAR",
      items: [
        "Range",
        "Configure your Ferrari",
        "MyFerrari",
        "Pre-owned",
        "Dealers",
      ],
    },
    { name: "COLLECTION", items: ["Men", "Women", "Kids", "Shoes", "Eyewear"] },
    {
      name: "EXPERIENCE",
      items: [
        "Corse Clienti",
        "Ferrari Esports Series",
        "Ristorante Cavallino",
        "Ferrari Museums",
        "Ferrari World Abu Dhabi",
      ],
    },
    {
      name: "ABOUT US",
      items: [
        "Corporate",
        "Sustainability",
        "Media Centre",
        "News",
        "Magazine",
      ],
    },
  ];

  const handleIconClick = (index) => {
    setRotations(
      rotations.map((isRotated, i) => (i === index ? !isRotated : isRotated))
    );
    setClicked(
      clicked.map((isClicked, j) => (j === index ? !isClicked : isClicked))
    );
  };

  return (
    <div>
      <div className="w-full md:grid flex flex-col grid-cols-4 gap-7">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-start md:gap-4 px-4 md:mb-4 md:w-full w-screen"
          >
            <div className="flex items-center md:gap-16 justify-between w-full ">
              <div className="flex gap-2 md:text-xl text-sm">
                <p>{value.name}</p>
              </div>
              <div
                onClick={() => handleIconClick(index)}
                className={`flex justify-end w-[32px] h-[32px] items-center transition-transform transform ${
                  rotations[index] ? "-rotate-45" : ""
                }`}
              >
                <ion-icon
                  name="add-outline"
                  style={{ width: "32px", height: "32px" }}
                ></ion-icon>
              </div>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                clicked[index] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="rounded shadow-md">
                <div className="flex flex-col gap-2 font-extralight">
                  {value.items.map((item, itemIndex) => (
                    <Link key={itemIndex} href={"#"}>
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
