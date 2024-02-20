import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: 'white'}}>
      <Toolbar>
        <Button sx={{ display: "block" }} >
          <Link style={{ color: "blue", textDecoration: "none" }} to="/main">
            Основная
          </Link>
        </Button>
        <Button sx={{ display: "block" }} >
          <Link
            style={{ color: "blue", textDecoration: "none" }}
            to="/explorer"
          >
            Обозреватель
          </Link>
        </Button>
        <Button sx={{ display: "block" }} >
          <Link
            style={{ color: "blue", textDecoration: "none" }}
            to="/workzone"
          >
            Рабочая зона
          </Link>
        </Button>
        <Button sx={{ display: "block" }} >
          <Link
            style={{ color: "blue", textDecoration: "none" }}
            to="/map"
          >
            Карта
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
