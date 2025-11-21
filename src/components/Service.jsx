import React from "react";
import Span from "./Span";
import CardService from "./CardService";
import { useTranslation } from "react-i18next";

import image_1 from "../assets/png/cards/card_1.png";
import image_2 from "../assets/png/cards/card_4.png";
import image_3 from "../assets/png/cards/card_2.png";
import image_4 from "../assets/png/cards/card_3.png";
import image_5 from "../assets/png/cards/card_5.png";

function Service() {
  const { t } = useTranslation();
  const service_data = t("service", { returnObjects: true });

  const images = [image_1, image_2, image_3, image_4, image_5];
  return (
    <section id="service" className=" bg-white w-full lg:pt-[120px] pt-[80px]">
      <article className=" max-w-[1296px] w-full mx-auto px-[16px] md:px-auto">
        <div className="flex items-start md:justify-between  flex-col md:flex-row ">
          <h2 className="flex-1 ">{service_data.title}</h2>
          <div className="flex  justify-end flex-1">
            <p className="text-[20px] text-[#6C7281] font-medium">
              {service_data.description}
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:grid md:grid-cols-2 pt-[56px] gap-[24px]">
          {service_data?.card.map((c, index) => {
            return (
              <CardService
                bgColor={c.bg_colors}
                title={c.title}
                items={c.description_items}
                image={images[index]}
                index={index}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default Service;
