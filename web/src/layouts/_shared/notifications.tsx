import classNames from "classnames";
import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import Icon from "src/components/Icon/Icon";
import data from "src/data/notifications";
import { useThemeUpdate } from "src/providers/theme";

const NotificationItem = (props) => {
  const { icon, iconStyle, text, time, id } = props;
  return (
    <div className="nk-notification-item" key={id} id={id}>
      <div className="nk-notification-icon">
        <Icon name={icon} className={classNames([`icon-circle ${iconStyle ? " " + iconStyle : ""}`])} />
      </div>
      <div className="nk-notification-content">
        <div className="nk-notification-text">{text}</div>
        <div className="nk-notification-time">{time}</div>
      </div>
    </div>
  );
};

const Notifications = () => {
  const themeUpdate = useThemeUpdate();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    themeUpdate.sidebarHide();
    setOpen((prevState) => !prevState)
  };
  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle tag="a" className="dropdown-toggle nk-quick-nav-icon border border-light rounded-circle bg-light" style={{ fontSize: '22px' }}>
        <div className="icon-status icon-status-info">
          <Icon name="bell" />
        </div>
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-xl dropdown-menu-s1">
        <div className="dropdown-head">
          <span className="sub-title nk-dropdown-title">{data.title}</span>
          <a href="#markasread" onClick={(ev) => ev.preventDefault()}>
            Mark All as Read
          </a>
        </div>
        <div className="dropdown-body">
          <div className="nk-notification">
            {data.notification.map((item) => {
              return (
                <NotificationItem
                  key={item.id}
                  id={item.id}
                  icon={item.icon}
                  iconStyle={item.iconStyle}
                  text={item.text}
                  time={item.time}
                />
              );
            })}
          </div>
        </div>
        <div className="dropdown-foot center">
          <a href="#viewall" onClick={(ev) => ev.preventDefault()}>
            View All
          </a>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Notifications;
