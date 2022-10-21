import { ProviderWrapper as LanguageProviderWrapper } from "../../Contexts/opinionsContext";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App/>
 
      </LanguageProviderWrapper >
  )
}

export default AppLoader;