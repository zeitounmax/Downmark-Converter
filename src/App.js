
import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Switch } from "@mui/material";
import getTheme from "./theme";
import Converter from "./TextToMarkdownConverter";

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("downmark-mode");
    return savedMode ? savedMode : "light";
  });

  useEffect(() => {
    localStorage.setItem("downmark-mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />{" "}
      {/* Cela réinitialise et applique les styles de base en fonction du thème */}
      <div className="App">
        <Switch checked={mode === "dark"} onChange={toggleMode} />
        <Converter />
      </div>
    </ThemeProvider>
  );
}

export default App;
