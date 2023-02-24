import { FC, useEffect, useRef } from "react";
import styles from "./BannerSample.module.css";
import { IBannerState } from "../../pages/SamplePage/SamplePage";

interface IBannerSampleProps {
  bannerState: IBannerState;
  setBannerState: (bannerState: IBannerState) => void;
}

const BannerSample: FC<IBannerSampleProps> = ({ bannerState, setBannerState }) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const positionBanner = () => {
    if (bannerState.linkElement && bannerState.paragraphElement && bannerRef.current) {
      const banner = bannerRef.current;
      const paragraph = bannerState.paragraphElement;
      const link = bannerState.linkElement;

      if (window.innerWidth >= 1440) {
        const maxWidth = 1400;
        const marginLeft = 20;
        banner.setAttribute('style', `
          width: ${(maxWidth - paragraph.offsetWidth) / 2 - marginLeft}px;
          transform: translate(${paragraph.offsetLeft + paragraph.offsetWidth + marginLeft}px, ${link.offsetTop}px);
        `);
      } else {
        const marginBottom = 4;
        banner.setAttribute('style', `
          width: ${paragraph.offsetWidth}px;
          transform: translate(${paragraph.offsetLeft}px, ${link.offsetTop - banner.offsetHeight - marginBottom}px);
        `);
      }
    }
  }

  useEffect(() => {
    if (bannerState.isVisible) {
      positionBanner()
      window.addEventListener('resize', positionBanner)
    } else {
      bannerRef.current && bannerRef.current.removeAttribute('style');
      window.removeEventListener('resize', positionBanner);
    }

    return () => {
      window.removeEventListener('resize', positionBanner);
    }
  }, [bannerState])

  return (
    <div className={`${styles.banner} ${bannerState.isVisible ? styles.banner_visible : ''}`} ref={bannerRef}>
    <div className={styles.banner__header}>
      <h2 className={styles.banner__title}>Это верно</h2> 
      <button className={styles.banner__button} onClick={() => {setBannerState({isVisible: false})}}></button>
      </div>
      <p className={styles.banner__subtitle}>Информация достоверна</p>
  </div>
  );
};

export default BannerSample;