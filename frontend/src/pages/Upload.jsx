import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { FileList } from "../components/FileList/FileList";

export const Upload = () => {
  const [files, setFiles] = useState([]);
  const removeFile = (file) => {
    setFiles(files.filter((f) => !(f === file)));
  };

  return (
    <Stack
      sx={{
        marginTop: "5rem",
        marinLeft: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        color="secondary"
        variant="contained"
        component="label"
        sx={{ width: "10rem", borderRadius: "16px" }}
      >
        <input
          id="inputFiles"
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(event) => {
            setFiles(Array.from(event.target.files));
          }}
        />
        Выбрать файлы
      </Button>
      <FileList files={files} removeFile={removeFile} setFiles={setFiles}/>
    </Stack>
  );
};
