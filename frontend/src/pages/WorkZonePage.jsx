import React from "react";
import {
  Slider,
  Stack,
  Button,
  Typography,
  Paper,
  Switch,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

export const WorkZonePage = () => {
  return (
    <Stack
      className="container"
      sx={{ backgroundColor: "#DEEFFD", minHeight: "91dvh" }}
    >
      <Stack
        className="project-name"
        direction="row"
        sx={{
          padding: "15px 50px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight="bold" sx={{ margin: "0 auto" }}>
          Проект: {}{" "}
        </Typography>
        <Button variant="contained">Настройки</Button>
      </Stack>
      <Stack
        className="work-field"
        direction="row"
        sx={{
          backgroundColor: "#fff",
          minHeight: "145px",
          width: '100vw'
        }}
      >
        <Stack className="left-panel" sx={{ textAlign: "left" }}>
          <Stack style={{ padding: "20px 20px" }}>
            <Typography fontWeight="bold">
              Настройки «Сегментация с/х поля»{" "}
            </Typography>
            <Typography fontWeight="bold">Модель: </Typography>
            <select name="select">
              <option value="value1">Значение 1</option>
            </select>
            <Typography fontWeight="bold">Шаг: </Typography>
            <select name="select">
              <option value="value1">Значение 1</option>
            </select>
            <Typography fontWeight="bold">Коэфф. масштабирования: </Typography>
            <select name="select">
              <option value="value1">Значение 1</option>
            </select>
            <Typography fontWeight="bold">Индикация:</Typography>
            <select name="select">
              <option value="value1">Значение 1</option>
            </select>
          </Stack>
          <Stack style={{ padding: "20px 20px", border: "1px solid #2A9AF3" }}>
            <Typography fontWeight="bold">Обработка</Typography>
            <Button variant="contained">Оценка площади</Button>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Общая площадь</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Сегментов</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Сегмент 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Сегмент 2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Сегмент 3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>
        <Stack
          className="main-panel"
          style={{ minWidth: "60vw", border: "2px solid blue" }}
        ></Stack>
        <Stack className="right-panel" sx={{minWidth: "200px", flexGrow: '1'}}>
          <Stack
            style={{
              height: "150px",
              minWidth: "200px",
              border: "2px solid #2A9AF3",
            }}
          ></Stack>
          <Stack sx={{ padding: "10px 10px" }} spacing={2}>
            <Button variant="contained">+Метод</Button>
            <Button variant="contained">+Фильтр</Button>
            <Slider size="small" defaultValue={70} valueLabelDisplay="auto" />
          </Stack>
          <Stack>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: "5px 5px", border: "1px solid #AAA" }}>
              Segmentation roads
              <Switch defaultChecked size="small" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: "5px 5px", border: "1px solid #AAA"   }}>
              Filter Lee
              <Switch defaultChecked size="small" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: "5px 5px", border: "1px solid #AAA"   }}>
              Filter Gauss
              <Switch defaultChecked size="small" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: "5px 5px", border: "1px solid #AAA"   }}>
              DR
              <Switch defaultChecked size="small" />
            </div>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
