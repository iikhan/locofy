import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerNavigation}>
          <div className={styles.supportInfo}>
            <div className={styles.support}>Support</div>
            <div className={styles.helpCentre}>Help Centre</div>
            <div className={styles.aircover}>AirCover</div>
            <div className={styles.combatingDiscrimination}>
              Combating discrimination
            </div>
            <div className={styles.supportingPeopleWith}>
              Supporting people with disabilities
            </div>
            <div className={styles.cencellationOptions}>
              Cencellation options
            </div>
            <div className={styles.reportNeighbourhoodConcern}>
              Report neighbourhood concern
            </div>
          </div>
          <div className={styles.navigationLists}>
            <div className={styles.hosting}>Hosting</div>
            <div className={styles.localHome}>Local home</div>
            <div className={styles.coverForHosts}>Cover for hosts</div>
            <div className={styles.hostingResources}>Hosting resources</div>
            <div className={styles.communityForum}>Community forum</div>
            <div className={styles.hostingResponsibly}>Hosting responsibly</div>
          </div>
          <div className={styles.navigationLists1}>
            <div className={styles.localhost}>Localhost</div>
            <div className={styles.newsroom}>Newsroom</div>
            <div className={styles.newFeatures}>New Features</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.investres}>Investres</div>
            <div className={styles.giftCards}>Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
