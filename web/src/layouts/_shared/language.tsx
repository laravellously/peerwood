import { useState } from "react";
import { Dropdown, DropdownToggle } from "reactstrap";
import Avatar from "src/components/Avatar/Avatar";
import LangDropdown from "src/components/LangDropdown/LangDropdown";
import EnglishFlag from "src/images/flags/english-sq.png";
import { useThemeUpdate } from "src/providers/theme";

const LanguageHead = () => {
  const themeUpdate = useThemeUpdate();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    themeUpdate.sidebarHide();
    setOpen((prevState) => !prevState)
  };
  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        onClick={(ev) => ev.preventDefault()}
        className="dropdown-toggle nk-quick-nav-icon"
      >
        <Avatar className="border border-light xs">
          <img src={EnglishFlag} alt="" />
        </Avatar>
      </DropdownToggle>
      <LangDropdown className="dropdown-menu-s1" size={''} />
    </Dropdown>
  );
};

export default LanguageHead
