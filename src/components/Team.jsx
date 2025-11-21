import React, { useRef } from "react";
import Span from "./Span";
import RIGHT_BUTTON_SVG from "../assets/svg/buttons/button_1.svg";
import LEFT_BUTTON_SVG from "../assets/svg/buttons/button_2.svg";
import CardTeam from "./CardTeam";
import { useTranslation } from "react-i18next";
import user_1 from "../assets/png/profile/user_1.png";
import user_2 from "../assets/png/profile/user_2.png";
import user_3 from "../assets/png/profile/user_3.png";
import user_4 from "../assets/png/profile/user_4.png";
import user_5 from "../assets/png/profile/user_5.png";
import user_6 from "../assets/png/profile/user_6.png";
import user_7 from "../assets/png/profile/user_7.png";
import user_8 from "../assets/png/profile/user_8.png";
import user_9 from "../assets/png/profile/user_9.png";
import Slider from "react-slick";
import { div } from "three/tsl";
function Team() {
  const users = [
    user_1,
    user_2,
    user_3,
    user_4,
    user_5,
    user_6,
    user_7,
    user_8,
    user_9,
  ];
  const { t } = useTranslation();
  const team_data = t("team", { returnObjects: true });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <section id="team" className=" bg-white w-full lg:pt-[120px] pt-[80px] ">
      <article className=" max-w-[1296px] w-full mx-auto px-[16px] md:px-auto">
        <div className="flex justify-between">
          <h2>{team_data.title}</h2>
          <div>
            <button onClick={previous}>
              <img src={LEFT_BUTTON_SVG} alt="" />
            </button>
            <button onClick={next} className=" pl-[16px]">
              <img src={RIGHT_BUTTON_SVG} alt="" />
            </button>
          </div>
        </div>

        <div className="pt-[56px] overflow-hidden">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {team_data.cards.map((card, index) => {
              return (
                <CardTeam
                  name={card.name}
                  description={card.description}
                  image={users[index]}
                />
              );
            })}
          </Slider>
        </div>
      </article>
      ;
    </section>
  );
}

export default Team;
