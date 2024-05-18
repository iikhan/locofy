import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./HeroContainer.module.css";

const HeroContainer: FunctionComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContainerInner}>
        <div className={styles.frameParent}>
          <div className={styles.findAHostForEveryJourneyParent}>
            <b className={styles.findAHostContainer}>
              <span>{`Find a `}</span>
              <span className={styles.host}>host</span>
              <span> for every journey</span>
            </b>
            <div className={styles.discoverTheBest}>
              Discover the best local rental properties that fits your every
              travel needs
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.autocompletebasic}>
              <div className={styles.text}>Accommodation</div>
              <img className={styles.iconhome} alt="" src="/iconhome.svg" />
            </div>
            <div className={styles.grouped}>
              <FrameComponent label="Check-in" />
              <FrameComponent label="Check-out" />
              <div className={styles.labelParent}>
                <div className={styles.label}>Guest</div>
                <img className={styles.iconuser} alt="" src="/iconuser.svg" />
              </div>
            </div>
            <div className={styles.searchButton}>
              <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
              <div className={styles.button}>Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
