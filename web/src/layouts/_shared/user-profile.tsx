import { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { useAuth } from "src/auth";
import Avatar from "src/components/Avatar/Avatar";
import Icon from "src/components/Icon/Icon";
import { LinkItem, LinkList } from "src/components/LinkList/LinkList";
import { useTheme, useThemeUpdate } from "src/providers/theme";

const UserDropdown = () => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();
  const [open, setOpen] = useState(false);
  const {currentUser, logOut} = useAuth()
  const toggle = () => {
    themeUpdate.sidebarHide();
    setOpen((prevState) => !prevState)
  };

  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <div className="user-toggle">
          <Avatar icon="user-alt" className="sm" />
          <div className="user-info d-none d-md-block">
            <div className={currentUser.emailVerifiedAt == null ? 'user-status' : 'user-status text-success'}>{currentUser.emailVerifiedAt == null ? 'Unverified' : 'Verified'}</div>
            <div className="user-name dropdown-indicator">{currentUser.email}</div>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-md dropdown-menu-s1">
        <div className="dropdown-inner">
          <LinkList>
            <LinkItem link="#" icon="user-alt">
              My Account
            </LinkItem>
            <LinkItem link="#" icon="repeat">
              My Transactions
            </LinkItem>
            <LinkItem link="#" icon="users">
              My Referrals
            </LinkItem>
          </LinkList>
        </div>
        <div className="dropdown-inner" onClick={() => logOut()}>
          <LinkList>
            <a href={`#`}>
              <Icon name="signout"></Icon>
              <span>Sign Out</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
