import { Link } from "react-router-dom";
import darkLogo from "/src/assets/img/site-logo/logo-dark.png";

interface PageMenuProps {
  menu: MenuItem[];
  activePageSlug: string;
  /**
   * Callback function to be called when the user clicks on a menu item.
   * @param slug - The slug of the selected menu item.
   */
  onPageChange: (slug: string) => void;
}

const PageMenu: React.FC<PageMenuProps> = ({
  menu,
  activePageSlug,
  onPageChange,
}) => {
  return (
    <header className="enpix-header sticky-top wish-header">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-9">
            <div className="logo">
              <Link to="/">
                <img src={darkLogo} alt="wish" />
              </Link>
            </div>
          </div>
          <div className="col-xl-8 col-3 d-flex align-items-center">
            <a className="menu-opener ml-auto d-xl-none" href="#menu">
              <i className="fa-solid fa-bars"></i>
            </a>
            <nav id="menu" className="site-menu ml-auto">
              <ul>
                {menu.map((item) => (
                  <li
                    key={item.slug}
                    className={
                      item.slug === activePageSlug ? "current-menu-item" : ""
                    }
                  >
                    <Link onClick={() => onPageChange(item.slug)} to={item.url}>
                      {item.title}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 d-xl-flex d-none align-items-center">
            <a href="contact.html" className="enpix-cta ml-auto">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageMenu;
