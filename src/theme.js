// theme.js

import { createTheme } from "@mui/material/styles";

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode, // Ceci définit directement le mode, soit "light" soit "dark".
      primary: {
        main: "#3f50b5",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
};

export default getTheme;
