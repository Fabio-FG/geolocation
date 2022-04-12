import React, { Suspense } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "pt"],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },

    react: { useSuspense: false },

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={"loading"}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
