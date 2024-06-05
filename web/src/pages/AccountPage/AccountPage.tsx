import { Link, NavLink, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useState, useEffect } from 'react';
import { Tooltip, Nav, NavItem } from 'reactstrap';
import AccountActivity from 'src/components/Account/AccountActivity/AccountActivity';
import AccountNotification from 'src/components/Account/AccountNotification/AccountNotification';
import AccountProfile from 'src/components/Account/AccountProfile/AccountProfile';
import AccountSecurity from 'src/components/Account/AccountSecurity/AccountSecurity';
import { BlockHead, BlockHeadContent, BlockTitle, BlockDes } from 'src/components/Block/Block';
import Icon from 'src/components/Icon/Icon';
import { Content } from 'src/layouts/_shared/content'

const renderComponents = (current: string) => {
  // TODO: lazy import
  switch (current) {
    case 'profile':
      return <AccountProfile />
    case 'activity':
      return <AccountActivity />
    case 'security':
      return <AccountSecurity />
    case 'notification':
      return <AccountNotification />
    default:
      return null
  }
}

const AccountPage = () => {
  const [tooltipOpen, setOpen] = useState(false);
  const toggle = () => { setOpen(!tooltipOpen) };

  const [sm, updateSm] = useState(false);
  const [currentTab, updateCurrentTab] = useState('profile');
  const [mobileView, setMobileView] = useState(false);

  // function to change the design view under 990 px
  const viewChange = () => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    } else {
      setMobileView(false);
      updateSm(false);
    }
  };

  useEffect(() => {
    viewChange();
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
      updateSm(false);
    });
    return () => {
      window.removeEventListener("resize", viewChange);
      window.removeEventListener("load", viewChange);
    };
  }, []);

  return (
    <>
      <Metadata title="Account" description="Account page" />

      <Content>
        <Nav
          className={`nk-nav nav nav-tabs ${sm ? "content-active" : ""
            }`}>
          <NavItem className="nav-item" onClick={() => {
            updateCurrentTab('profile')
            updateSm(false)
          }}>
            <span className={`nav-link ${currentTab == 'profile' ? 'active' : ''}`}>Profile</span>
            {/* <NavLink
              to={`${process.env.PUBLIC_URL}/crypto/user-profile-regular`}
              className={
                window.location.pathname === `${process.env.PUBLIC_URL}/crypto/user-profile-regular` ? "nav-link active" : "nav-link"
              }
            >
              <span>Personal</span>
            </NavLink> */}
          </NavItem>
          <NavItem className="nav-item" onClick={() => {
            updateCurrentTab('security')
            updateSm(false)
          }}>
            <span className={`nav-link ${currentTab == 'security' ? 'active' : ''}`}>Security</span>
            {/* <NavLink activeClassName='active'
              to={`${process.env.PUBLIC_URL}/crypto/user-profile-setting`}
              className="nav-link"
            >
              <span>Security</span>
            </NavLink> */}
          </NavItem>
          <NavItem className="nav-item" onClick={() => {
            updateCurrentTab('notification')
            updateSm(false)
          }}>
            <span className={`nav-link ${currentTab == 'notification' ? 'active' : ''}`}>Notifications</span>
            {/* <NavLink
              to={`${process.env.PUBLIC_URL}/crypto/user-profile-notification`}
              className={
                window.location.pathname === `${process.env.PUBLIC_URL}/crypto/user-profile-notification`
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <span>Notifications</span>
            </NavLink> */}
          </NavItem>
          <NavItem className="nav-item" onClick={() => {
            updateCurrentTab('activity')
            updateSm(false)
          }}>
            <span className={`nav-link ${currentTab == 'activity' ? 'active' : ''}`}>Activity</span>
            {/* <NavLink
              to={`${process.env.PUBLIC_URL}/crypto/user-profile-connected`}
              className={
                window.location.pathname === `${process.env.PUBLIC_URL}/crypto/user-profile-connected` ? "nav-link active" : "nav-link"
              }
            >
              <span>Connect Social</span>
            </NavLink> */}
          </NavItem>
        </Nav>

        {
          renderComponents(currentTab)
        }

      </Content>
    </>
  )
}

export default AccountPage
