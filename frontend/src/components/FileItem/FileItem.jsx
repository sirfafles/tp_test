import { useState } from "react";
import { IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Popup } from "../UI/Popup/Popup";
import { FileInfo } from "../FileInfo";
import styles from "./FileItem.module.css";

export const FileItem = ({ file, remove }) => {
  const [popup, setPopup] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.item}
        onClick={() => {
          setPopup(true);
        }}
      >
        <img className={styles.imgPreview} src={URL.createObjectURL(file)} />
        <span className={styles.nameField}>
          {file.name.replace(/\.[^/.]+$/, "")}
        </span>
      </div>
      <IconButton onClick={() => remove(file)}>
        <RemoveCircleIcon />
      </IconButton>
      <Popup visible={popup} setVisible={setPopup}>
        <FileInfo file={file} />
      </Popup>
    </div>
  );
};
