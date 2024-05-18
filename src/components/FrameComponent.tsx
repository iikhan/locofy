import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  label?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ label }) => {
  return (
    <div className={styles.labelParent}>
      <div className={styles.label}>{label}</div>
      <div className={styles.icon}>
        <img
          className={styles.calendartodayfilledIcon}
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
