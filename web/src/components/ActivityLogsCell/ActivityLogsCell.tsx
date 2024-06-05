import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { GetActivitiesForUser } from 'types/graphql'



export const QUERY: TypedDocumentNode = gql`
  query GetActivitiesForUser ($id: String!) {
    user(id: $id) {
      activities {
        browser
        createdAt
        device
        ip
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }: CellSuccessProps<GetActivitiesForUser>) => {
  return (
    <table className="table table-ulogs">
    <thead className="table-light">
      <tr>
        <th className="tb-col-os">
          <span className="overline-title">
            Browser <span className="d-sm-none">/ IP</span>
          </span>
        </th>
        <th className="tb-col-ip">
          <span className="overline-title">IP</span>
        </th>
        <th className="tb-col-time">
          <span className="overline-title">Date</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {user.activities.map((item, idx) => {
        return (
          <tr key={idx}>
            <td className="tb-col-os">{item.browser}</td>
            <td className="tb-col-ip">
              <span className="sub-text">{item.ip}</span>
            </td>
            <td className="tb-col-time">
              <span className="sub-text">
                {item.createdAt}
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}
