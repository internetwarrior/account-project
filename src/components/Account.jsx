import React from "react";
import CardAccount from "./CardAccount";
import Span from "./Span";
import ANNA_JPEG from "../assets/jpg/anna.jpg"; // Import the image
import { useTranslation } from "react-i18next";
import SVG_1 from "../assets/svg/account/third.svg";
import SVG_2 from "../assets/svg/account/second.svg";
import SVG_3 from "../assets/svg/account/forth.svg";
import SVG_4 from "../assets/svg/account/first.svg";

function Account() {
  const { t } = useTranslation();
  const account = t("account", { returnObjects: true });
  return (
    <section className="bg-white w-full min-h-screen pt-[80px] lg:pt-[120px]">
      <article className="max-w-[1296px] w-full mx-auto">
        <h2 className="pb-[56px] px-[16px] xl:auto">{account.title}</h2>

        {/* Grid container */}
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] px-[16px] xl:auto">
          {/* Left column */}
          <div className="flex flex-col gap-[24px]  row-span-2">
            <CardAccount
              description={account.cards[0].description}
              title={account.cards[0].title}
              SVG={SVG_1}
            />{" "}
            <CardAccount
              description={account.cards[1].description}
              title={account.cards[1].title}
              SVG={SVG_2}
            />
          </div>

          {/* Middle column */}
          <div
            className="bg-cover bg-center h-full col-span-1 row-span-2  rounded-[16px] flex flex-1 items-end flex-col "
            style={{ backgroundImage: `url(${ANNA_JPEG})` }} // Apply the background image via inline style
          >
            <div className="text-white p-[32px] flex flex-col bg-[#180090] gap-[16px] rounded-[16px] mt-auto">
              <h3 className="text-[23px] font-bold">
                {account.cards[2].title}
              </h3>
              <p>{account.cards[2].description}</p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-[24px] row-span-2">
            <CardAccount
              description={account.cards[3].description}
              title={account.cards[3].title}
              SVG={SVG_3}
            />{" "}
            <CardAccount
              description={account.cards[4].description}
              title={account.cards[4].title}
              SVG={SVG_4}
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Account;
