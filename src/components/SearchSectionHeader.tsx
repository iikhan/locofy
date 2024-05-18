import { FunctionComponent } from "react";
import styles from "./SearchSectionHeader.module.css";

const SearchSectionHeader: FunctionComponent = () => {
  return (
    <div className={styles.searchSectionHeader}>
      <div className={styles.staysNearbyParent}>
        <div className={styles.staysNearby}>Stays nearby:</div>
        <div className={styles.torontoOntario}>Toronto Ontario</div>
      </div>
      <div className={styles.layoutSelection}>
        <div className={styles.bentoMenu1Wrapper}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className={styles.mapWrapper}>
          <img className={styles.mapIcon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
