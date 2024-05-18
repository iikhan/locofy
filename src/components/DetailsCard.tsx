import { FunctionComponent } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  frame65?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={styles.detailscard}>
      <img
        className={styles.amenityCardRows}
        loading="lazy"
        alt=""
        src={frame65}
      />
      <div className={styles.amenityIcons}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
