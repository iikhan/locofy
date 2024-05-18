import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AmenitiesSection.module.css";

export type AmenitiesSectionType = {
  mdilake?: string;
  lakeside?: string;
  tablertoolsKitchen2?: string;
  kitchen?: string;
  materialSymbolsnestCamIqO?: string;
  securityCamerasOnProperty?: string;
  ionwifi?: string;
  wifi?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const AmenitiesSection: FunctionComponent<AmenitiesSectionType> = ({
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propWidth,
  propDisplay,
}) => {
  const kitchenStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={styles.amenitiessection1}>
      <div className={styles.amenitySymbols}>
        <img
          className={styles.mdilakeIcon}
          loading="lazy"
          alt=""
          src={mdilake}
        />
        <div className={styles.lakeside}>{lakeside}</div>
      </div>
      <div className={styles.additionalAmenities}>
        <img
          className={styles.tablertoolsKitchen2Icon}
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className={styles.kitchen} style={kitchenStyle}>
          {kitchen}
        </div>
      </div>
      <div className={styles.propertyFeaturesIcons}>
        <img
          className={styles.materialSymbolsnestCamIqOIcon}
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className={styles.securityCamerasOn}>
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className={styles.connectivityAmenities}>
        <img
          className={styles.ionwifiIcon}
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className={styles.wifi}>{wifi}</div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
