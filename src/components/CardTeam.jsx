import React from "react";
function CardTeam({ name, description, image }) {
  return (
    <div className="pr-[12px]">
      <div className="flex flex-col max-w-[306px] w-full">
        <div>
          <img src={image} alt="" />
        </div>
        <h3 className=" text-[20px] font-bold pt-[24px]">{name}</h3>
        <p className=" font-medium text-[#6C7281] text-[16px]">{description}</p>
      </div>
    </div>
  );
}

export default CardTeam;
