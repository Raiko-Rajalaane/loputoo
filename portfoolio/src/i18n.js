import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home.header": "Hi, I'm Raiko Rajalaane. ",
      "home.subheader": "Welcome to my portfolio. I'll add projects soon..."
    }
  },
  et: {
    translation: {
      "home.header": "Mina olen Raiko Rajalaane.",
      "home.subheader": "Tere tulemast minu portooliosse. Lisan varsti siia oma projekte..."
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;