import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
      gold: "#c29958",
    },
  },
});

function App() {
  console.log(window.location.hash);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
