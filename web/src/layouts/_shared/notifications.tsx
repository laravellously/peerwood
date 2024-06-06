import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { useAuth } from "src/auth";
import Icon from "src/components/Icon/Icon";
import NotificationsByUserCell from 'src/components/NotificationsByUserCell';
import { useThemeUpdate } from "src/providers/theme";

// const NOTIFICATIONS_QUERY: TypedDocumentNode = gql`
// query GetNotificationsByUser($userId: String!) {
//   notificationsByUser(userId: $userId) {
//     id
//     message
//     createdAt
//   }
// }
// `


const Notifications = () => {
  const { currentUser } = useAuth()
  // const { data } = useQuery(NOTIFICATIONS_QUERY, { variables: { userId: currentUser.id } })
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
          <span className="sub-title nk-dropdown-title">Notifications</span>
          <a href="#markasread" onClick={(ev) => ev.preventDefault()}>
            Mark All as Read
          </a>
        </div>
        <div className="dropdown-body">
          <div className="nk-notification">
            <NotificationsByUserCell userId={currentUser.id} />
          </div>
        </div>
        {/* <div className="dropdown-foot center">
          <a href="#viewall" onClick={(ev) => ev.preventDefault()}>
            View All
          </a>
        </div> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Notifications;
