import React, { useEffect, useState } from "react";
import Span from "../components/Span";

import BANNER_PNG from "../assets/png/hero.png";
import LOGO_WHITE_PNG from "../assets/png/logo_white.png";
import CONTACT_PERSON from "../assets/png/contact_person.png";

import CLOSE_BUTTON_SVG from "../assets/svg/christ_svg.svg";
import TELEGRAM_BUTTON_SVG from "../assets/svg/buttons/telegram_svg.svg";
import WHATSAPP_BUTTON_SVG from "../assets/svg/buttons/whatsapp_svg.svg";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../context/Context";
function Hero() {
  const { formVisible, toggleFormVisible } = useGlobalState();
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible((p) => !p);
  };

  const { t } = useTranslation();

  return (
    <section id="main" className=" bg-[#F7F7FF] w-full  mt-[72px]">
      {formVisible && <ContactOverlay toggle={toggleFormVisible} />}
      <article className="min-h-screen max-w-[1296px] w-full mx-auto px-[16px] md:px-auto">
        <div className="flex pt-[80px] flex-col xl:flex-row">
          <h1 className="  tracking-[0]  line-clamp-3 flex-1 w-full">
            {t("hero", { returnObjects: true })}
          </h1>
          <div className="pl-0 xl:pl-[106px]">
            <div className="md:ml-auto w-auto max-w-[370px]">
              <p className=" text-[20px] text-[#6C7281]">
                {t("hero_p", { returnObjects: true })}
              </p>
              <button
                onClick={toggleFormVisible}
                className=" font-semibold bg-[#180090] hover:bg-[#091520] text-white p-[13px] px-[34px] rounded-[8px] flex gap-[8px] mt-[32px]"
              >
                {t("hero_button_text", { returnObjects: true })}
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-[24px] overflow-hidden max-h-[480px] mt-[72px] ">
          <img src={BANNER_PNG} alt="" />
        </div>
      </article>
    </section>
  );
}

const ContactOverlay = ({ toggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [final, setFinal] = useState(false);

  // Токен твоего бота
  // const BOT_TOKEN = "8539096714:AAHmXEQZRXC1RJftrLzorBfwcwneP7S_lwk";
  const BOT_TOKEN = "8565983119:AAGrly5k4wBE5a2zHSNr20McuX9Zdn4rY4s";

  // ID канала, куда нужно отправить сообщение
  // const CHANNEL_ID = "-1003177719615";
  const CHANNEL_ID = "-1003370400232";

  // Функция для отправки сообщения в канал
  async function sendMessageToChannel(formData) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // Данные, которые отправляются в запросе (POST)
    const data = {
      chat_id: CHANNEL_ID,
      text: `Новое сообщение с сайта:\n\nИмя: ${formData.name}\nE-mail: ${formData.email}\nТелефон: ${formData.phone}`,
    };

    try {
      // Отправляем POST-запрос с использованием fetch
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Преобразуем объект в строку JSON
      });

      // Проверка, что запрос прошел успешно
      if (response.ok) {
        const result = await response.json(); // Преобразуем ответ в формат JSON
        console.log("Message sent successfully:", result);
        setFinal(true);
      } else {
        console.error("Error sending message:", response.statusText);
        alert("Произошла ошибка при отправке заявки.");
      }
    } catch (error) {
      console.error("Request failed", error);
      alert("Произошла ошибка. Попробуйте снова.");
    }
  }

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Останавливаем перезагрузку страницы при отправке формы
    // Проверяем, что все поля заполнены
    if (name && email && phone) {
      const formData = { name, email, phone };
      sendMessageToChannel(formData); // Отправляем данные в Telegram
    } else {
      alert("Пожалуйста, заполните все поля!");
    }
  };

  useEffect(() => {
    // Function to toggle visibility when ESC is pressed
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        toggle(); // Toggle the visibility
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleEscape);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const WHATSAPP_LINK = "https://wa.me/996990988301";
  const TELEGRAM_LINK = "https://t.me/kabgroupkg";

  function openInNewTab(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-[99999] flex justify-center items-center">
      <div className="text-white bg-white rounded-[24px] flex relative">
        <button onClick={toggle} className=" absolute right-[30px] top-[30px]">
          <img src={CLOSE_BUTTON_SVG} alt="" />
        </button>
        {/* Left Blue Section */}
        <div className="bg-[#180090]  w-[280px] rounded-l-[24px] p-[32px] pb-0 py-[40px] flex flex-col">
          <img src={LOGO_WHITE_PNG} alt="" />
          <small className="13px pt-[16px] text-white  opacity-70">
            Помогаем бизнесу вести <br /> бухучет безупречно с 2006 года
          </small>
          <img src={CONTACT_PERSON} className="h-full object-cover" alt="" />
        </div>

        {/* Right Form Section */}
        <div className=" p-[76px] px-[72px] max-w-[561px] w-full">
          <h3 className="font-semibold text-[28px] text-[#091520]">
            {final ? "Спасибо за обращение!" : "   Возьмём бухгалтерию на себя"}
          </h3>
          <p className="text-[#747480] font-medium">
            {final
              ? "Мы перезвоним вам на номер, указанный в заявке. Не пропустите звонок."
              : "Закроем отчётность, наладим учёт, подскажем, где можно сэкономить"}
          </p>
          {final && (
            <p className=" text-[#091520] pt-[40px]">
              Если у вас срочный вопрос, позвоните нам: <br />{" "}
              <b>+996 312 988 301</b>
            </p>
          )}

          {final ? (
            <>
              <button
                onClick={() => {
                  openInNewTab(WHATSAPP_LINK);
                }}
                className="bg-[#25D366] p-[13px] px-[24px] flex gap-[12px] rounded-[12px] mt-[32px]"
              >
                <img src={WHATSAPP_BUTTON_SVG} alt="" />
                Перейти в WhatsApp
              </button>
              <br />
              <button
                onClick={() => {
                  openInNewTab(TELEGRAM_LINK);
                }}
                className="bg-telegram p-[13px] px-[24px] flex gap-[12px] rounded-[12px] mb-[115px]"
              >
                <img src={TELEGRAM_BUTTON_SVG} alt="" />
                Перейти в WhatsApp
              </button>
            </>
          ) : (
            <form
              onSubmit={handleSubmit} // Обработчик отправки формы
              className="h-full text-black pt-[32px] rounded-[16px] flex flex-col gap-[12px]"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px]"
                placeholder="Имя*"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px]"
                placeholder="E-mail*"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px]"
                placeholder="Телефон*"
              />
              <input
                type="submit"
                value="Оставить заявку"
                className="py-[13px] w-full text-white bg-[#091520] rounded-[8px] mt-[24px]"
              />
              <small className="text-[12px] text-[#888E94] font-semibold">
                Нажимая на кнопку “Оставить заявку”, я даю свое согласие на
                обработку моих персональных данных в соответствии с Законом КР
              </small>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
