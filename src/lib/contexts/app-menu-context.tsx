import { createContext } from "react";
import useAppMenu from "../hooks/useAppMenu";

const AppMenuContext = createContext<AppMenuState>(null);

const AppMenuContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <AppMenuContext.Provider value={useAppMenu()}>
      {children}
    </AppMenuContext.Provider>
  );
};

export { AppMenuContext, AppMenuContextProvider };
