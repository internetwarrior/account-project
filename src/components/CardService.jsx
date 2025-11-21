import React from "react";

function CardService({ bgColor = "#EAF2FF", title, items, image, index }) {
  return (
    <div
      className={`flex rounded-[24px] p-[32px]  ${
        index === 4 ? " col-span-2" : ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <h3 className="pb-[24px] text-[23px] font-bold">{title}</h3>
        <div>
          <ul className="flex flex-col gap-[16px]">
            {items.map((item, index) => (
              <li key={index} className="font-medium">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" my-auto">
        <img src={image} alt="service card" />
      </div>
    </div>
  );
}

export default CardService;
