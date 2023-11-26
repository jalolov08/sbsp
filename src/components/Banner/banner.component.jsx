import React from "react";
import { useSpring, animated } from "react-spring";
import "./banner.style.css";
import arrow from "../../assets/arrow.svg";
import Form from "../Form/form.component";
import { faArrowDown, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function Banner() {
  const bannerContentAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(100%)" },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <div className="banner" id="banner">
      <animated.div className="banner_content" style={bannerContentAnimation}>
        <div>
          <h2 className="banner_title">Оформление займа за 1 минуту</h2>
          <h1 className="banner_subtitle">
            Получите деньги наличными или на карту без отказа
          </h1>
          <p className="banner_description">Первый займ под 0%</p>
          <Link className="banner_button" to="partners" spy={true} smooth={true} offset={-120} duration={500}>
            Наши партнеры
            <FontAwesomeIcon
              style={{ marginLeft: 10, marginTop: 2, textAlign: "center", fontWeight: "regular" }}
              icon={faCircleArrowDown}
            />
          </Link>
        </div>
      </animated.div>

      <div>
        <Form />
      </div>
    </div>
  );
}
