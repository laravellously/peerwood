import type {
  FindNotificationsByUserQuery,
  FindNotificationsByUserQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { formatDistanceToNow } from 'date-fns';

const NotificationItem = (props) => {
  const { text, time, id } = props;
  return (
    <div className="nk-notification-item" key={id} id={id}>
      {/* <div className="nk-notification-icon">
        <Icon name={icon} className={classNames([`icon-circle ${iconStyle ? " " + iconStyle : ""}`])} />
      </div> */}
      <div className="nk-notification-content">
        <div className="nk-notification-text">{text}</div>
        <div className="nk-notification-time">{time}</div>
      </div>
    </div>
  );
};

export const QUERY: TypedDocumentNode<
  FindNotificationsByUserQuery,
  FindNotificationsByUserQueryVariables
> = gql`
  query FindNotificationsByUserQuery($userId: String!) {
    notificationsByUser: notificationsByUser(userId: $userId) {
      id
    }
  }
`

export const Loading = () => <div className='m-3'>Loading...</div>

export const Empty = () => <div className="p-3">Nothing to show</div>

export const Failure = ({
  error,
}: CellFailureProps<FindNotificationsByUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)



export const Success = ({
  notificationsByUser,
}: CellSuccessProps<
  FindNotificationsByUserQuery,
  FindNotificationsByUserQueryVariables
>) => {
  return notificationsByUser.map((item) => (
    <NotificationItem key={item.id} id={item.id} text={item.message} time={formatDistanceToNow(item.createdAt)} />
  ))
}
