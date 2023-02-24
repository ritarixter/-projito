import { FC } from "react";
import styles from "./NewsSlider.module.css";
import { TJournalMaterial, TNews } from "../../services/types/types";
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

interface INewsSlider {
  Cards: Array<TNews>;
}

export const NewsSlider: FC<INewsSlider> = ({ Cards }) => {
  const windowInnerWidth = window.innerWidth;

  return (
    <div className={styles.slider}>
      {Cards.map((el, i) => {
        if (i >= 3) {
          return;
        }
        return (
          <div className={styles.mobileView} key={i}>
            <img className={styles.image} src={el.image} alt={el.type} />
            <div className={styles.text}>{el.text}</div>
            <div className={styles.dataContainer}>
              <p className={styles.date}>{el.date}</p>
              <p className={styles.type}>
                <i>{el.type}</i>
              </p>
            </div>
          </div>
        );
      })}
      <CarouselProvider
        naturalSlideWidth={328}
        naturalSlideHeight={windowInnerWidth > 770 ? 328 : 428}
        totalSlides={6}
        visibleSlides={windowInnerWidth > 770 ? 2.67 : 2.5}
        className={styles.CarouselProvider}
      >
        <div className={styles.heading}>
          <h3 className={styles.title}>Свежее</h3>
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
                <div className={styles.slide}>
                  <div className={styles.imageContainer}>
                    <div>
                      <p className={styles.date}>{el.date}</p>
                      <p className={styles.type}>
                        <i>{el.type}</i>
                      </p>
                    </div>
                    <Image
                      src={el.image}
                      className={styles.image}
                      hasMasterSpinner={true}
                    />
                  </div>
                  <div className={styles.text}>{el.text}</div>
                </div>
              </Slide>
            );
          })}
        </Slider>
        <DotGroup className={styles.dotGroup} />
      </CarouselProvider>
    </div>
  );
};
