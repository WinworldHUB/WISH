import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { AppMenuContext } from "../../contexts/app-menu-context";

interface AppMenuProps {
  menuItems: MenuItem[];
  isSubMenu?: boolean;
}
const AppMenu: FC<AppMenuProps> = ({ menuItems, isSubMenu = false }) => {
  const renderMenu = () =>
    menuItems.map((menuItem) => (
      <li key={menuItem.title}>
        <Link to={menuItem.route}>
          {menuItem.title}{" "}
          {menuItem.subMenuItems?.length > 0 && (
            <span className="wsarrow"></span>
          )}
        </Link>

        <AppMenu
          menuItems={menuItem.subMenuItems ?? []}
          isSubMenu={menuItem.subMenuItems?.length > 0}
        />
      </li>
    ));

  if (menuItems?.length === 0) return <></>;

  if (isSubMenu) {
    return <ul className="sub-menu">{renderMenu()}</ul>;
  }

  return <>{renderMenu()}</>;
};

const PageMenu: FC = () => {
  const { appMenuState } = useContext(AppMenuContext);

  return (
    <header id="header" className="header tra-menu navbar-dark">
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="images/logo-01.png" alt="mobile-logo" />
          </span>
          <Link id="wsnavtoggle" className="wsanimated-arrow" to="">
            <span />
          </Link>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <a href="demo-13.html#hero-13" className="logo-black">
                <img src="images/logo-01.png" alt="header-logo" />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="demo-13.html#hero-13" className="logo-white">
                <img src="images/logo-white.png" alt="header-logo" />
              </a>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list nav-violet-red-hover">
                <AppMenu menuItems={appMenuState.menuItems ?? []} />
              </ul>
            </nav>{" "}
            {/* END MAIN MENU */}
          </div>
        </div>{" "}
        {/* END NAVIGATION MENU */}
      </div>{" "}
      {/* End header-wrapper */}
    </header>
  );
};

export default PageMenu;
