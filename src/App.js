import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t("Welcome to TechMantra")}</h1>
      <h1>{t("Welcome to TechMantra")}</h1>


      <button>{t("Register Now")}</button>

      <button onClick={() => i18n.changeLanguage("hi")}>Hindi</button>
      <button onClick={() => i18n.changeLanguage("es")}>Spanish</button>
    </>
  );
}

export default App;
