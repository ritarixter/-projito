import { FC, useEffect, useState } from "react";
import styles from "./AudioPlayer.module.css";
import soundtrack from "../../images/player/soundtrack.svg";
import urlAudio from "../../audio/1564_Rodoman.mp3";

const AudioPlayer: FC = () => {
  const [audio] = useState(new Audio(urlAudio));
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(false);
  const [timeTrack, setTimeTrack] = useState(0);
  const [timeDurationTrack, setTimeDurationTrack] = useState(0);

  const togglePlay = () => setPlaying(!playing);
  const toggleMute = () => setMute(!mute);

  audio.onloadeddata = () => {
    const durationTime = () => {
      let durationTrack = audio.duration / 60;
      durationTrack = Number(durationTrack.toFixed(2));
      return durationTrack;
    };
    setTimeDurationTrack(durationTime());
  };

  useEffect(() => {
    let timerId = setInterval(() => {
      let currentTimeTrack = audio.currentTime / 60;
      currentTimeTrack = Number(currentTimeTrack.toFixed(2));
      setTimeTrack(currentTimeTrack);
    }, 1000);
    if (!playing) {
      clearInterval(timerId);
    }
  }, [playing]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    mute ? (audio.muted = true) : (audio.muted = false);
  }, [playing, mute]);

  useEffect(() => {
    const handleEnd = () => setPlaying(false);
    audio.addEventListener("ended", handleEnd);
    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, []);

  return (
    <section className={styles.player}>
      <div className={styles.player__container}>
        <audio src={urlAudio} id="audio"></audio>
        <button
          type="button"
          id="button-play"
          onClick={togglePlay}
          className={`${styles.player__button} ${
            !playing ? styles.player__button_play : styles.player__button_stop
          } `}
        ></button>
        <button
          type="button"
          onClick={() => (audio.currentTime -= 15)}
          className={`${styles.player__button} ${styles.player__button_reverse_anticlockwise}`}
        ></button>
        <button
          type="button"
          onClick={() => (audio.currentTime += 15)}
          className={`${styles.player__button} ${styles.player__button_reverse_clockwise}`}
        ></button>
        <img
          src={soundtrack} //Не знаю как реализовать дорожку, как из фигмы
          alt="Звуковая дорожка"
          className={styles.player__soundtrack}
        />
        <span className={styles.player__time}>
          {timeDurationTrack
            ? playing
              ? timeTrack
              : timeDurationTrack
            : "xx:xx"}
        </span>
        {/*<div className={styles.button_mute__container}> ползунок для громкости
                <button
                  type="button"
                  onClick={toggleMute}
                  className={`${styles.player__button} ${
                    !mute ? styles.player__button_mute : styles.player__button_mute_on
                  }`}
                ></button>
        <div className={styles.container__volume}>
        <input id="range" min="0" max="100" value="0" type="range"></input>
        </div>
        </div>
     */}
        <button
          type="button"
          onClick={toggleMute}
          className={`${styles.player__button} ${
            !mute ? styles.player__button_mute : styles.player__button_mute_on
          }`}
        ></button>
      </div>
    </section>
  );
};

export default AudioPlayer;
