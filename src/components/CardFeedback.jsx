import React from "react";
function CardFeedback({ name, title, feedback, logo }) {
  return (
    <div className="pr-[24px] h-full">
      <div className=" bg-[#F7F7FF] p-[32px] w-full max-w-[636px] rounded-[16px] h-full">
        <div className="flex justify-between">
          <div>
            <h3 className=" text-[20px] font-bold text-[#091520]">{name}</h3>
            <p className="text-[16px] text-[#180090] font-medium pt-[8px]">
              {title}
            </p>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <p className=" font-medium text-[#091520] pt-[16px]">{feedback}</p>
      </div>
    </div>
  );
}

export default CardFeedback;
