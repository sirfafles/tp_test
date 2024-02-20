import { List, ListItem, Button} from "@mui/material";
import { FileItem } from "../FileItem/FileItem";
import styles from "./FileList.module.css";

export const FileList = ({ files, removeFile, setFiles }) => {
  if (!files.length) {
    return <div></div>;
  }
  return (
    <div className={styles.container}>
      <List>
        {files.map((file, index) => (
          <ListItem sx={{  padding: "2px" }} key={index}>
            <FileItem file={file} remove={removeFile} />
          </ListItem>
        ))}
      </List>
      <div className="buttonGroup" style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button sx={{borderRadius: '16px'}} onClick={()=> {setFiles([])}}>Отменить</Button>
          <Button sx={{borderRadius: '16px'}}>Отправить</Button>
      </div>
    </div>
  );
};
