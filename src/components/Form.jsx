import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { replace, useNavigate } from "react-router-dom";

function Form() {
  // Состояния для полей формы
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation();
  const form_data = t("form", { returnObjects: true });

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
        alert("Заявка отправлена!");
        window.location.href = "/";
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

  return (
    <section
      id="contact"
      className=" bg-white w-full lg:pt-[116px] pt-[80px] lg:pb-[146px] pb-[120px] "
    >
      <article className="max-w-[1296px] w-full mx-auto px-[16px] md:px-auto">
        <div className=" px-[16px] md:px-[96px] py-[40px] md:py-[64px] bg-[#180090] flex flex-col xl:flex-row justify-between items-center rounded-[24px] text-white">
          <div className=" py-[0px]  md:py-[64px] bg-[#180090] rounded-[24px] text-white flex-1 w-full">
            <h3 className=" text-[40px] font-bold leading-[48px]">
              {form_data.title}
            </h3>
            <ul className=" flex flex-col gap-[16px] py-[32px]">
              {form_data.description_items.map((item) => {
                return <li> • {item}</li>;
              })}
            </ul>
          </div>
          <div className="  rounded-[16px] w-full flex-1">
            <form
              onSubmit={handleSubmit} // Обработчик отправки формы
              className="h-full text-black bg-white p-[32px] rounded-[16px] flex flex-col gap-[12px]"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] "
                placeholder={form_data.form_text.name_input}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] "
                placeholder={form_data.form_text.email_input}
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="font-semibold outline outline-[#EBEBEB] outline-[1px] p-[16px] rounded-[8px] "
                placeholder={form_data.form_text.phone_input}
              />
              <input
                type="submit"
                value={form_data.form_text.button_text}
                className=" py-[13px] w-full text-white bg-[#091520] rounded-[8px] mt-[24px]"
              />
              <small className="text-[12px] text-[#888E94]">
                {form_data.form_text.warning_text}
              </small>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Form;
