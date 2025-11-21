import React from "react";
import SIGH_PNG from "../assets/png/sign_png.png";
import BUTTON_1_SVG from "../assets/svg/social_media/wa_svg.svg";
import BUTTON_2_SVG from "../assets/svg/social_media/tel_svg.svg";
import BUTTON_3_SVG from "../assets/svg/social_media/ins_svg.svg";
import LOGO_PNG from "../assets/png/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const MAP_POINT =
    "https://2gis.kg/bishkek/inside/15763234351133967/firm/70000001040806416?m=74.598743%2C42.840251%2F19.72";
  const INSTAGRAM_LINK =
    "https://www.instagram.com/kabgroup.kg?igsh=cnlybmFxNWZpM3J5";
  const WHATSAPP_LINK = "https://wa.me/996990988301";
  const TELEGRAM_LINK = "https://t.me/kabgroupkg";
  const handleCopyPhoneNumber = (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Get the phone number from the clicked link's text content
    const phoneNumber = e.target.textContent.trim();

    // Try copying to clipboard
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Скопировано"); // Show alert if successful
      })
      .catch(() => {
        alert("Ошибка при копировании"); // Show error if failed
      });
  };

  const { t } = useTranslation();
  const footer_data = t("footer", { returnObjects: true });

  const navigationLinks = t("navigation", { returnObjects: true });

  return (
    <footer className="bg-[#F7F7FF] w-full min-h-[200px] border-t border-[#1800901A] px-[24px] md:px-auto">
      <div className="max-w-[1296px] w-full mx-auto flex flex-col justify-between pt-[48px] gap-[40px] xl:flex-row xl:px-0 xl:gap-[0px]">
        <div>
          <div>
            <a href="/">
              <img className="max-h-[56px]" src={LOGO_PNG} alt="" />
            </a>
            <p className="text-[#6C7281] text-[14px] font-semibold pt-[32px]">
              {footer_data.description}
            </p>
          </div>
          <Link className="text-[14px] text-[#180090]" to={"/terms"}>
            {footer_data.terms}
          </Link>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[24px] pb-[8px] font-semibold">
            {footer_data.info_title}
          </h3>
          <a href={MAP_POINT} target="_blank">
            {footer_data.adress}
          </a>
          <a href={MAP_POINT} target="_blank">
            {footer_data.work_time}
          </a>

          <a
            className="underline text-[18px] font-bold text-[#25B34B]"
            href={MAP_POINT}
            target="_blank"
          >
            {footer_data.map_button_text}
          </a>

          <a
            href="#"
            onClick={handleCopyPhoneNumber} // Use the click handler
            className="text-[#091520] font-semibold text-[24px]"
          >
            +996 312 988 301
          </a>
          <a href="#" onClick={handleCopyPhoneNumber}>
            audit.buhuchet@mail.ru
          </a>
          <div className="flex gap-[24px]">
            <a href={WHATSAPP_LINK} target="_blank">
              <img src={BUTTON_1_SVG} alt="" />
            </a>
            <a href={TELEGRAM_LINK} target="_blank">
              <img src={BUTTON_2_SVG} alt="" />
            </a>
            <a href={INSTAGRAM_LINK} target="_blank">
              <img src={BUTTON_3_SVG} alt="" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[24px] pb-[8px] font-semibold">
            {footer_data.nav_text}
          </h3>
          <ul>
            {navigationLinks.map((item, index) => {
              if (index === 0) {
                return;
              }
              return (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <hr className="bg-[#180090] opacity-10 mt-[56px]" />
      <div className="max-w-[1296px] w-full mx-auto flex justify-between pt-[12px]">
        <small>{footer_data.copyright_text}</small>
        <small className="items-center hidden xl:flex">
          {footer_data.author_text}
          <img className="pl-[10px]" src={SIGH_PNG} alt="" />
        </small>
      </div>
    </footer>
  );
}

export default Footer;
