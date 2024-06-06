import type {
  UserNotificationsQuery,
  UserNotificationsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  UserNotificationsQuery,
  UserNotificationsQueryVariables
> = gql`
  query UserNotificationsQuery {
    userNotifications {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userNotifications,
}: CellSuccessProps<UserNotificationsQuery>) => {
  return (
    <ul>
      {userNotifications.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
