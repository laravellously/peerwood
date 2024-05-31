import classNames from "classnames";
import { useTheme, useThemeUpdate } from "src/providers/theme";
import Notifications from "./notifications";
import LanguageHead from "./language";
import UserDropdown from "./user-profile";
import Logo from "./logo";
import Toggle from "./toggle";

const Header = ({ fixed, className, ...props }) => {

  const theme = useTheme();
  const themeUpdate = useThemeUpdate();

  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme.header === "white",
    [`is-${theme.header}`]: theme.header !== "white" && theme.header !== "light",
    [`${className}`]: className,
  });
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <Toggle
              className="nk-nav-toggle nk-quick-nav-icon d-xl-none ms-n1"
              icon="menu"
              click={themeUpdate.sidebarVisibility}
            />
          </div>
          <div className="nk-header-brand d-xl-none">
            -APP.LOGO-
          </div>
          {/* <div className="nk-header-news d-none d-xl-block">
            <News />
          </div> */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="notification-dropdown me-n1">
                <Notifications />
              </li>
              <li className="language-dropdown d-none d-sm-block me-n1">
                <LanguageHead />
              </li>
              <li className="user-dropdown">
                <UserDropdown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
