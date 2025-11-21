import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className=" bg-white w-full">
      <article className=" max-w-[1296px] w-full mx-auto">
        <div className="  lg:pt-[120px] pt-[80px] flex flex-col lg:flex-row  px-[16px] md:px-auto">
          <h2 className=" lg:hidden"> {t("about", { returnObjects: true })}</h2>
          <div className="flex-1  flex-col justify-between hidden lg:flex">
            <h2 className="hidden lg:block">
              {" "}
              {t("about", { returnObjects: true })}
            </h2>
            <div className="flex justify-between pr-[60px]">
              <div>
                <h3 className=" font-extrabold text-[#180090] text-[52px]">
                  20+{" "}
                </h3>
                <small className="text-[#6C7281] text-[14px]">лет опыта</small>
              </div>
              <div>
                <h3 className=" font-extrabold text-[#180090] text-[52px]">
                  25 лет{" "}
                </h3>
                <small className="text-[#6C7281] text-[14px]">
                  личной экспертизы
                </small>
              </div>
              <div>
                <h3 className=" font-extrabold text-[#180090] text-[52px]">
                  200+{" "}
                </h3>
                <small className="text-[#6C7281] text-[14px]">
                  компаний доверяют нам
                </small>
              </div>
            </div>
          </div>
          <p className="flex-1 text-[20px] font-medium">
            {t("about_p_1", { returnObjects: true })}
            <br />
            <br />
            {t("about_p_2", { returnObjects: true })}
            <br />
            <br />
            {t("about_p_3", { returnObjects: true })}
            <br />
            <br />
            {t("about_p_4", { returnObjects: true })}
          </p>
          <div className="flex justify-between pr-[60px] lg:hidden">
            <div>
              <h3 className=" font-extrabold text-[#180090] text-[52px]">
                20+{" "}
              </h3>
              <small className="text-[#6C7281] text-[14px]">лет опыта</small>
            </div>
            <div>
              <h3 className=" font-extrabold text-[#180090] text-[52px]">
                25 лет{" "}
              </h3>
              <small className="text-[#6C7281] text-[14px]">
                личной экспертизы
              </small>
            </div>
            <div>
              <h3 className=" font-extrabold text-[#180090] text-[52px]">
                200+{" "}
              </h3>
              <small className="text-[#6C7281] text-[14px]">
                компаний доверяют нам
              </small>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
