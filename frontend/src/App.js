import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/UI/Navbar/Navbar";
import {MainPage} from './pages/MainPage'
import {ExplorerPage} from './pages/ExplorerPage'
import {WorkZonePage} from './pages/WorkZonePage'
import {MapPage} from './pages/MapPage'
import "./App.css";

function App() {
  

  return (
    <div className="App" style={{ marginTop: "4rem" }}>
      <Navbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/explorer" element={<ExplorerPage />} />
        <Route path="/workzone" element={<WorkZonePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
}

export default App;
