import { FunctionComponent } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  ellipse12?: string;
  johnnyCash?: string;
  june2023?: string;
  prop?: string;
  michellesPlaceWasSoGreatA?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={styles.reviewcard}>
      <div className={styles.reviewerDetails}>
        <div className={styles.reviewerInfo}>
          <img
            className={styles.avatarsIcon}
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className={styles.reviewerNames}>
            <div className={styles.johnnyCash}>{johnnyCash}</div>
            <div className={styles.june2023}>{june2023}</div>
          </div>
        </div>
        <div className={styles.ratings}>
          <div className={styles.stars}>{prop}</div>
          <img className={styles.quoteIcons} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
