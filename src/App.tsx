import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  navAboutUsURL,
  navContactUsURL,
  navHomeURL,
  navOurCollectionURL,
} from "./constants";
import HomePage from "./pages/HomePage";
import ContactUS from "./pages/ContactUS";
import AboutUS from "./pages/AboutUS";
import Collection from "./pages/Collections";

declare module "@mui/material/styles" {
  interface TypeText {
    gold: string;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c29958",
      light: "#d8b378",
      dark: "#8f6d32",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#F5F5F5",
      dark: "#CCCCCC",
      contrastText: "#000000",
    },
    text: {
      secondary: "#fff",
      gold: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={navHomeURL} element={<HomePage />} />
          <Route path={navContactUsURL} element={<ContactUS />} />
          <Route path={navAboutUsURL} element={<AboutUS />} />
          <Route path={navOurCollectionURL} element={<Collection />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
