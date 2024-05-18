import { FunctionComponent } from "react";
import styles from "./Header11.module.css";

export type Header1Type = {
  notifications?: string;
  avatar?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ notifications, avatar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.stays}>Stays</div>
          <div className={styles.becomeAHost}>Become a host</div>
        </div>
        <div className={styles.loginSection}>
          <img
            className={styles.notificationsIcon}
            alt=""
            src={notifications}
          />
          <img className={styles.avatarIcon} alt="" src={avatar} />
        </div>
      </div>
    </header>
  );
};

export default Header1;
