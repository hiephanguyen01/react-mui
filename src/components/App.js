import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./ui/theme";
import Header from "./ui/header";
import { Footer } from "./ui/footer";

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
          <Route path="/revolution" element={<div>revolution</div>} />
          <Route path="/customsoftware" element={<div>customsoftware</div>} />
          <Route path="/mobileapps" element={<div>mobileapps</div>} />
          <Route path="/websites" element={<div>websites</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
