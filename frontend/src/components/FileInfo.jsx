import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useState } from "react";

export const FileInfo = ({ file }) => {
  const name = file.name.replace(/\.[^/.]+$/, "");
  const ext = /[^.]+$/.exec(file.name);
  const uploadDate = new Date().toISOString().substring(0, 10);
  const creationDate = new Date(file.lastModified)
    .toISOString()
    .substring(0, 10);
  const size = (file.size / 1024).toFixed(2).toString();
  const [pos, setPos] = useState(null);
  const [browser, setBrowser] = useState(null);

  if (!pos) {
    navigator.geolocation.getCurrentPosition((position) => setPos(position));
  }
  if (!browser) {
    const { userAgent } = navigator;
    if (userAgent.includes("Firefox/")) {
      setBrowser("Firefox");
    } else if (userAgent.includes("Edg/")) {
      setBrowser("Edge");
    } else if (userAgent.includes("Chrome/")) {
      setBrowser("Chrome");
    } else if (userAgent.includes("Safari/")) {
      setBrowser("Safari");
    }
  }

  return (
    <div>
      <Typography>Имя файла: {name}</Typography>
      <Typography>Расширение: {ext}</Typography>
      <Typography>Размер: {size} KB</Typography>
      <Typography>Дата создания: {creationDate}</Typography>
      <Typography>Дата загрузки: {uploadDate}</Typography>
      <Typography>
        Гео широта: {pos ? pos.coords.longitude : "unknown"}
      </Typography>
      <Typography>
        Гео долгота: {pos ? pos.coords.latitude : "unknown"}
      </Typography>
      <Typography>Браузер: {browser ? browser : "unknown"}</Typography>
    </div>
  );
};
