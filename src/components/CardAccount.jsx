import React from "react";
function CardAccount({ title, description, SVG }) {
  return (
    <div className="bg-[#EBEDFE] p-[32px] rounded-[16px] h-[260px] w-full flex flex-col justify-end relative">
      <div className="p-[15px] bg-white absolute top-0 rounded-b-[12px]">
        <img src={SVG} alt="" />
      </div>
      <h3 className="text-[23px] font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CardAccount;
