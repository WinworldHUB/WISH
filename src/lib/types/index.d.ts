type MenuItem = {
  title: string;
  route: string;
  subMenuItems?: MenuItem[];
};

interface AppMenuStateProps {
  menuItems: MenuItem[];
  selectedMenuItemIndex: number;
}

type AppMenuState = {
  appMenuState: AppMenuStateProps;
  setAppMenuState: (menuState: AppMenuStateProps) => void;
};

interface ContextProviderProps {
  children: React.ReactNode;
}
