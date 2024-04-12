import { useState } from "react";
import { DEFAULT_APP_MENU_STATE } from "../constants/app-menu";

const useAppMenu = (): AppMenuState => {
  const [appMenuState, setAppMenuState] = useState<AppMenuStateProps>(
    DEFAULT_APP_MENU_STATE
  );

  return { appMenuState, setAppMenuState };
};

export default useAppMenu;
