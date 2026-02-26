// import dei componenti di React per composizione context
import { createContext, useContext, useState } from "react";

// creiamo istanza del context
const MainContext = createContext();

// funzione che genera il provider esponendo i valori per vrappare App.jsx
function MainProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MainContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

// Definiamo un hook per consumare il contesto
function useMain() {
  const context = useContext(MainContext);
  return context;
}

// Esportiamo il nostro provider ed il nostro hook
export { MainProvider, useMain };
