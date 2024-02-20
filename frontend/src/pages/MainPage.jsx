import React from "react";
import { Box, Paper, Stack, Button, Typography, List } from "@mui/material";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

export const MainPage = () => {
  return (
    <Stack
      className="container"
      sx={{ backgroundColor: "#DEEFFD", minHeight: "91dvh" }}
    >
      <Stack
        className="control-panel"
        direction="row"
        sx={{ padding: "15px 50px", justifyContent: "space-between" }}
      >
        <Stack direction="row" spacing={8}>
          <Button variant="contained">Новый проект</Button>
          <Button variant="contained">Открыть проект</Button>
        </Stack>
        <Button variant="contained">Настройки</Button>
      </Stack>

      <Stack
        className="workspace"
        direction="row"
        sx={{
          backgroundColor: "#fff",
          minHeight: "145px",
          padding: "30px 50px",
          justifyContent: "space-between",
        }}
      >
        <Stack className="recent" direction="row" spacing={8}>
          <Stack className="recent-projects">
            <Typography fontWeight="bold">Недвно открытые проекты</Typography>
            <List className="recent-projects__list"></List>
          </Stack>
          <Stack className="recent-files">
            <Typography fontWeight="bold">Недвно открытые файлы</Typography>
            <List className="recent-files__list"></List>
          </Stack>
        </Stack>
        <Stack className="current-project">
          <Typography fontWeight="bold">Текущий проект</Typography>
        </Stack>
      </Stack>

      <Stack
        className="info"
        direction="row"
        spacing={8}
        sx={{
          padding: "30px 50px",
        }}
      >
        <Stack className="system-info" spacing={1}>
          <Typography fontWeight="bold">
            Информация о системе
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>ОС</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ОЗУ</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Размер кеша</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Доступно кеша</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Свободно на диске</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Время работы системы</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack className="gpu-info" spacing={1}>
          <Typography fontWeight="bold">
            Информация о видеокарте
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Модель</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Температура</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Загруженность</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Память</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Потребление</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Скорость вентиляторов</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Stack>
  );
};
