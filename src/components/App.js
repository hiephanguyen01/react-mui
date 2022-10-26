import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./ui/theme";
import Header from "./ui/header";
import { Footer } from "./ui/footer";
import { useState } from "react";
import { Box, Stack } from "@mui/system";
import { LandingPage } from "./LandingPage";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Stack minHeight="100vh">
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Box component={"main"} flexGrow={1}>
            <Routes>
              <Route
                path="/"
                element={
                  <LandingPage
                    setValue={setValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                  />
                }
              />
              <Route path="/services" element={<div>services</div>} />
              <Route path="/contact" element={<div>contact</div>} />
              <Route path="/about" element={<div>about</div>} />
              <Route path="/revolution" element={<div>revolution</div>} />
              <Route
                path="/customsoftware"
                element={<div>customsoftware</div>}
              />
              <Route path="/mobileapps" element={<div>mobileapps</div>} />
              <Route path="/websites" element={<div>websites</div>} />
            </Routes>
          </Box>
          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
