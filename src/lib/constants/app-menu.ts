import { AppRoutes } from "./app-routes";

export const APP_MENU: MenuItem[] = [
  {
    title: "Home",
    route: AppRoutes.Home,
  },
  {
    title: "Contact",
    route: AppRoutes.Home,
    subMenuItems: [
      { title: "About us", route: AppRoutes.Home },
      { title: "More Info", route: AppRoutes.Home },
    ],
  },
];

export const DEFAULT_APP_MENU_STATE: AppMenuStateProps = {
  menuItems: APP_MENU,
  selectedMenuItemIndex: 0,
};
