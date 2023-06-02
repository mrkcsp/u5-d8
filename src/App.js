import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Contexts";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  const [book, setBook] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ThemeContext.Provider value={{ book, setBook }}>
              <Home />
            </ThemeContext.Provider>
          }
        />
        <Route path="/book/:asin" element={<BookDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
