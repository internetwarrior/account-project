import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { GlobalProvider } from "./context/Context";
import Terms from "./pages/Terms";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./scripts/ScrollToTop";
import { useTranslation } from "react-i18next";
import "./i18n.js";
function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="*"
            element={
              <div className="text-center py-12 min-h-[400px]">
                <h1 className="text-4xl font-bold">
                  404 - Страница не найдена
                </h1>
                <p className="mt-4 text-lg">
                  Извините, страница, которую вы ищете, не существует.
                </p>
                <p className="mt-4">
                  Перейдите на{" "}
                  <Link to="/" className="">
                    главную страницу
                  </Link>
                  .
                </p>
              </div>
            }
          />
        </Routes>

        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
