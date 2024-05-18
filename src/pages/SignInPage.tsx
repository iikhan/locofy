import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import Form from "../components/Form";
import styles from "./SignInPage.module.css";

const SignInPage: FunctionComponent = () => {
  return (
    <div className={styles.signInPage}>
      <Header1 notifications="/notifications@2x.png" avatar="/avatar@2x.png" />
      <main className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <Form />
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.footerContent}>
          <div className={styles.footerDetails}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
