import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { IconButton, Stack, Button, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid } from "@mui/x-data-grid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "preview",
    headerName: "Превью",
    width: 100,
    renderCell: (params) => (
      <img src={params.value} height="70%" style={{ borderRadius: "8px" }} />
    ),
  },
  { field: "filename", headerName: "Имя файла", width: 150 },
  { field: "type", headerName: "Тип", width: 80 },
  { field: "date", headerName: "Дата", width: 120 },
  { field: "width", headerName: "Ширина", width: 100 },
  { field: "height", headerName: "Высота", width: 100 },
  { field: "size", headerName: "Размер KiB", width: 100 },
  { field: "browser", headerName: "Браузер", width: 130 },
];

export const ExplorerPage = () => {
  const [rows, setRows] = useState([]);
  const [filetype, setFiletype] = React.useState();
  const handleType = (event, newFiletype) => {
    setFiletype(newFiletype);
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const filteredRows = useMemo(() => {
    let newRows = rows;
    if (startDate) {
      newRows = newRows.filter(
        (row) => new Date(row.date) >= new Date(startDate)
      );
    }
    if (endDate) {
      newRows = newRows.filter(
        (row) => new Date(row.date) <= new Date(endDate)
      );
    }
    if (filetype) {
      newRows = newRows.filter((row) => filetype.includes(row.type));
    }
    return newRows;
  }, [startDate, endDate, filetype, rows]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:7340/read")
      .then((resp) => resp.data)
      .then((res) =>
        res.map((item) => {
          let date = item.date_time.slice(0, 10).replace(/-/g, "."); // replace all '-' in date to '.'
          let KiBsize = Number((item.size / 1024).toFixed(2));
          let src = "data:image/jpeg;base64," + item.preview;
          return { ...item, preview: src, size: KiBsize, date: date };
        })
      )
      .then((res) => setRows(res));
  }, []);

  return (
    <Stack
      className="container"
      sx={{ backgroundColor: "#DEEFFD", minHeight: "91dvh", marginTop: "-5px" }}
    >
      <Stack
        className="control-panel"
        direction="row"
        sx={{ padding: "15px 50px", justifyContent: "space-between" }}
      >
        <Button variant="contained">Импорт данных</Button>
        <Button variant="contained">Настройки</Button>
      </Stack>

      <Stack
        className="RLI-list"
        spacing={2}
        sx={{
          backgroundColor: "#fff",
          minHeight: "145px",
          padding: "30px 50px",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" className="project-name">
          <Typography fontWeight="bold">Проект: {}</Typography>
        </Stack>
        <Stack
          className="filters"
          direction="row"
          spacing={2}
          sx={{ alignItems: "center" }}
        >
          <Typography fontWeight="bold">Тип файла:</Typography>
          <ToggleButtonGroup value={filetype} onChange={handleType}>
            <ToggleButton value="jpeg">JPEG</ToggleButton>
            <ToggleButton value="png">PNG</ToggleButton>
            <ToggleButton value="tiff">TIFF</ToggleButton>
            <ToggleButton value="webp">WEBP</ToggleButton>
            <ToggleButton value="bmp">BMP</ToggleButton>
          </ToggleButtonGroup>
          <Typography fontWeight="bold">Дата съемки:</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="От"
              // value = {new Date(startDate)}
              onChange={(newStart) => {
                setStartDate(
                  `${newStart["$y"]}.${newStart["$M"] + 1}.${newStart["$D"]}`
                );
              }}
            />
            <DatePicker
              label="До"
              // value = {new Date(endDate)}
              onChange={(newEnd) => {
                setEndDate(
                  `${newEnd["$y"]}.${newEnd["$M"] + 1}.${newEnd["$D"]}`
                );
              }}
            />
          </LocalizationProvider>
          <IconButton
            onClick={() => {
              setEndDate("");
              setStartDate("");
            }}
          >
            <HighlightOffIcon />
          </IconButton>
        </Stack>
        <div style={{ height: "60vh", width: "1000px" }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Stack>
    </Stack>
  );
};
