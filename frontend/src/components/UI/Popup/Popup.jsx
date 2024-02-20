import { Stack } from "@mui/system";
import styles from "./Popup.module.css";

export const Popup = ({ children, visible, setVisible }) => {
  const rootStyles = [styles.popup];
  if (visible) {
    rootStyles.push(styles.active);
  }
  const keyDownHandler = (event) => {
    if (event.code == "Escape") {
      setVisible(false);
    }
  };
  return (
    <div className={rootStyles.join(" ")} onClick={() => setVisible(false)}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
