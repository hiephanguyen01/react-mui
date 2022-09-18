import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./ui/theme";
import Header from "./ui/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>services</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/revilution" element={<div>revilution</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
