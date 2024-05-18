import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.stays}>Stays</div>
          <div className={styles.becomeAHost}>Become a host</div>
        </div>
        <div className={styles.loginSection}>
          <img
            className={styles.notificationsIcon}
            alt=""
            src="/notifications@2x.png"
          />
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
