import React, { useEffect, useState } from "react";
import LOGO_PNG from "../assets/png/logo.png";
import PHONE_SVG from "../assets/svg/phone_svg.svg";
import PHONE_SVG_WHITE from "../assets/svg/phone_svg_white.svg";

import LANG_SVG from "../assets/svg/language/ru_svg.svg";
import { Link } from "react-router-dom";

import BUGER_BUTTON_SVG from "../assets/svg/header_buttons/burger.svg";
import CLOSE_BUTTON_SVG from "../assets/svg/header_buttons/close.svg";

import { useTranslation } from "react-i18next";

function Header() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleMenu = () => {
    setVisible((p) => !p);
  };

  const { formVisible, toggleFormVisible } = useGlobalState();

  const { t } = useTranslation();
  const navigationLinks = t("navigation", { returnObjects: true });

  useEffect(() => {
    console.log("Navigation Links:", navigationLinks); // This should log an array of objects.
  }, [navigationLinks]);

  return (
    <>
      {visible && (
        <NavigationMenu links={navigationLinks} setVisible={setVisible} />
      )}

      <header className=" bg-white w-full  px-[16px] md: px-auto fixed left-0 top-0 z-[9999]">
        <div className="flex mx-auto justify-between items-center h-[72px] max-w-[1322px] w-full ">
          <div>
            <Link to="/">
              <div className="w-full">
                <img
                  className=" object-cover  h-full max-h-[48px]"
                  src={LOGO_PNG}
                  alt=""
                />
              </div>
            </Link>
          </div>

          <nav className="hidden xl:block ">
            <ul className="flex gap-[24px] text-[16px] font-semibold">
              {navigationLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className=" hidden md:flex gap-[24px]">
            <button
              className=" font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] flex gap-[8px] hover:bg-[#180090] hover:text-white"
              onMouseEnter={() => setIsHovered(true)} // When mouse enters, set hovered to true
              onMouseLeave={() => setIsHovered(false)} // When mouse leaves, set hovered to false
              onClick={toggleFormVisible}
            >
              {/* Show first image when not hovered, and second image when hovered */}
              <img src={isHovered ? PHONE_SVG_WHITE : PHONE_SVG} alt="Phone" />
              <span className={` ${isHovered ? "text-white" : ""}`}>
                +996 312 988 301
              </span>
            </button>
            <button className=" font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] flex gap-[8px] hover:bg-[#180090] hover:text-white">
              <img src={LANG_SVG} alt="" />
              Русский
            </button>
          </div>
          <div className=" xl:hidden">
            <button onClick={toggleMenu}>
              {visible ? (
                <img src={CLOSE_BUTTON_SVG} alt="" />
              ) : (
                <img src={BUGER_BUTTON_SVG} alt="" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
import SIGH_PNG from "../assets/png/sign_png.png";
import i18next from "i18next";
import { useGlobalState } from "../context/Context";

const NavigationMenu = ({ links, setVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-0 left-0 bg-white h-full w-full flex flex-col w-full z-[9999] xl:hidden">
      <nav className=" flex-1">
        <ul className="flex flex-col gap-[32px] text-[16px] font-semibold justify-center items-center pt-[174px]">
          {links.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => {
                  setVisible((p) => !p);
                }}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className=" flex gap-[24px] mx-auto ">
        <button
          className=" font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] flex gap-[8px] hover:bg-[#180090] hover:text-white"
          onMouseEnter={() => setIsHovered(true)} // When mouse enters, set hovered to true
          onMouseLeave={() => setIsHovered(false)} // When mouse leaves, set hovered to false
        >
          {/* Show first image when not hovered, and second image when hovered */}
          <img src={isHovered ? PHONE_SVG_WHITE : PHONE_SVG} alt="Phone" />
          <span className={` ${isHovered ? "text-white" : ""}`}>
            +996 312 988 301
          </span>
        </button>
        <button className=" font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] flex gap-[8px] hover:bg-[#180090] hover:text-white">
          <img src={LANG_SVG} alt="" />
          Русский
        </button>
      </div>
      <div className=" max-w-[1296px] w-full mx-auto flex flex-col items-center justify-between ">
        <small className=" items-center flex">
          Разработка и дизайн сайта:{" "}
          <img className=" pl-[10px]" src={SIGH_PNG} alt="" />
        </small>
        <br />
        <hr className="bg-[#180090] opacity-10 w-full " />

        <small className="mt-[8px]">
          2025 © KAB group by Anna Kalinina. Все права защищены
        </small>
      </div>
    </div>
  );
};

export default Header;
