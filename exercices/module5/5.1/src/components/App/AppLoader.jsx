import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/countersContext";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App/>
 
      </LanguageProviderWrapper >
  )
}

export default AppLoader;