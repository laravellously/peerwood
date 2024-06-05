import classNames from "classnames";
import SimpleBar from "simplebar-react";

import { useTheme, useThemeUpdate } from 'src/providers/theme';
import CryptoMenu from "./menu";
import Toggle from "./toggle";
import { UncontrolledDropdown, DropdownToggle } from "reactstrap";
import Icon from "src/components/Icon/Icon";
import LangDropdown from "src/components/LangDropdown/LangDropdown";

const Sidebar = ({ fixed, className, ...props }) => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();

  const classes = classNames({
    "nk-sidebar": true,
    "nk-sidebar-fixed": fixed,
    "nk-sidebar-active": theme.sidebarVisibility,
    "nk-sidebar-mobile": theme.sidebarMobile,
    [`is-light`]: theme.sidebar === "white",
    [`is-${theme.sidebar}`]: theme.sidebar !== "white" && theme.sidebar !== "light",
    [`${className}`]: className,
  });

  return (
    <>
    <div className={classes}>
      <div className="nk-sidebar-element nk-sidebar-head border-bottom-0">
        <div className="nk-sidebar-brand">
          -APP.LOGO-
        </div>
        <div className="nk-menu-trigger me-n2">
          <Toggle className="nk-nav-toggle nk-quick-nav-icon d-xl-none" icon="arrow-left" click={themeUpdate.sidebarVisibility} />
        </div>
      </div>
      <SimpleBar className="nk-sidebar-body">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu">
            <CryptoMenu />
          </div>
          <div className="nk-sidebar-footer">
            <ul className="nk-menu nk-menu-footer">
              <li className="nk-menu-item">
                <a href="#link" className="nk-menu-link" onClick={(ev) => ev.preventDefault()}>
                  <span className="nk-menu-icon">
                    <Icon name="help-alt"></Icon>
                  </span>
                  <span className="nk-menu-text">Support</span>
                </a>
              </li>
              <li className="nk-menu-item ms-auto">
                <UncontrolledDropdown direction="up">
                  <DropdownToggle
                    tag="a"
                    href="#toggle"
                    onClick={(ev) => ev.preventDefault()}
                    className="nk-menu-link dropdown-indicator has-indicator"
                  >
                    <span className="nk-menu-icon">
                      <Icon name="globe"></Icon>
                    </span>
                    <span className="nk-menu-text">English</span>
                  </DropdownToggle>
                  <LangDropdown size="sm" className={""} />
                </UncontrolledDropdown>
              </li>
            </ul>
          </div>
        </div>
      </SimpleBar>
    </div>
    {theme.sidebarVisibility && <div
      onClick={themeUpdate.sidebarVisibility}
       className="nk-sidebar-overlay"></div>}
    </>
  );
};
export default Sidebar;
