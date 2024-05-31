import { Link, NavLink } from "@redwoodjs/router";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Icon from "src/components/Icon/Icon";

const menu = [
  {
    text: "Dashboard",
    icon: "dashboard-fill",
    link: "/dashboard",
  },
  {
    text: "My Account",
    icon: "user-circle-fill",
    link: "/account",
  },
  {
    text: "Trade Offers",
    icon: "coin-alt-fill",
    link: "/offers",
  },
  {
    text: "Transactions",
    icon: "repeat-fill",
    link: "/transactions",
  },
  {
    text: "Referrals",
    icon: "users-fill",
    link: "/referrals",
  },
  {
    text: "Chats",
    icon: "chat-circle-fill",
    link: "/chats",
  },
  // {
  //   text: "My Profile",
  //   icon: "account-setting",
  //   link: "#",
  // },
]


// const MenuHeading = ({ heading }) => {
//   return (
//     <li className="nk-menu-heading">
//       <h6 className="overline-title text-primary-alt">{heading}</h6>
//     </li>
//   );
// };

const PanelItem = ({ icon, link, text, sidebarToggle, mobileView, ...props }) => {
  const menuItemClass = classNames({
    "nk-menu-item": true,
  });

  return (
    <li className={menuItemClass}>
      <Link
        to={link}
        className="nk-menu-link"
        // onClick={() => setMenuData([menu[index]])}
      >
        {icon ? (
          <span className="nk-menu-icon">
            <Icon name={icon} />
          </span>
        ) : null}
        <span className="nk-menu-text">{text}</span>
      </Link>
    </li>
  );
};

const CryptoMenu = ({ sidebarToggle, mobileView }: {sidebarToggle?: any, mobileView?: any}) => {

  return (
    <ul className="nk-menu">
      {menu.map((item, index) =>
        (
          <PanelItem
            key={item.text}
            link={item.link}
            icon={item.icon}
            text={item.text}
            index={index}
            // data={data}
            sidebarToggle={sidebarToggle}
            mobileView={mobileView}
          />
        )
      )}
    </ul>
  );
};

export default CryptoMenu;
