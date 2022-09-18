import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B0";
const acrOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${acrOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${acrOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
