import { FC, useEffect } from "react";
import styles from "./JournalSlider.module.css";
import { TJournalMaterial } from "../../services/types/types";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Arrowright from "../../images/Arrow_right.svg";
import ArrowLeft from "../../images/Arrow_left.svg";
import SliderCardExp from "../SliderCardExp/SliderCardExp";
import SliderCardSpecial from "../SliderCardSpecial/SliderCardSpecial";

interface IJournalSlider {
  Cards: Array<TJournalMaterial>;
}

export const JournalSlider: FC<IJournalSlider> = ({ Cards }) => {
  const scrollList = document.getElementById("scrollList");
  let sliderMob = document.getElementById("sliderMob");

  function onScrollHandler() {
    if (null !== scrollList) {
      let children = scrollList.getElementsByTagName("li");
      let childrenArr = Array.prototype.slice.call(children);
      childrenArr.forEach((el, i) => {
        el.style.zIndex = 7 - i;
      });
      childrenArr[
        Math.abs(
          Math.round((scrollList.getBoundingClientRect().left - 12) / 132)
        )
      ].style.zIndex = 15;
    }
  }

  useEffect(() => {
    sliderMob?.addEventListener("scroll", onScrollHandler);
    return () => {
      sliderMob?.removeEventListener("scroll", onScrollHandler);
    };
  });

  return (
    <div className={styles.slider}>
      <div className={styles.sliderMob} id="sliderMob">
        <ul className={styles.sliderMobContainer} id="scrollList">
          {Cards.map((el, i) => {
            if (i >= 6) {
              return;
            }
            return (
              <li
                key={i}
                className={styles.slide}
                style={{ zIndex: Cards.length - i }}
              >
                {el.tag === "ОПЫТ ЧИТАТЕЛЯ" && <SliderCardExp el={el} />}
                {el.tag !== "ОПЫТ ЧИТАТЕЛЯ" && <SliderCardSpecial el={el} />}
              </li>
            );
          })}
        </ul>
      </div>

      <CarouselProvider
        naturalSlideWidth={328}
        naturalSlideHeight={526}
        totalSlides={6}
        visibleSlides={2.67}
        className={styles.CarouselProvider}
      >
        <div className={styles.heading}>
          <h3 className={styles.title}>Новые материалы</h3>
          <div className={styles.buttons}>
            <ButtonBack className={styles.button}>
              <Image
                src={ArrowLeft}
                className={styles.ArrowButton}
                hasMasterSpinner={true}
              />
            </ButtonBack>

            <ButtonNext className={styles.button}>
              <Image
                src={Arrowright}
                className={styles.ArrowButton}
                hasMasterSpinner={true}
              />
            </ButtonNext>
          </div>
        </div>
        <Slider className={styles.sliderContainer}>
          {Cards.map((el, i) => {
            if (i >= 6) {
              return;
            }
            return (
              <Slide index={i} key={i}>
                <>
                  {el.tag === "ОПЫТ ЧИТАТЕЛЯ" && <SliderCardExp el={el} />}
                  {el.tag !== "ОПЫТ ЧИТАТЕЛЯ" && <SliderCardSpecial el={el} />}
                </>
              </Slide>
            );
          })}
        </Slider>
        <DotGroup className={styles.dotGroup} />
      </CarouselProvider>
    </div>
  );
};
