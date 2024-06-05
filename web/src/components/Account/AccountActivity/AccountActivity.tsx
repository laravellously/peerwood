import { Card } from "reactstrap"
import { useAuth } from "src/auth"
import ActivityLogsCell from "src/components/ActivityLogsCell"
import { Block } from "src/components/Block/Block"

const AccountActivity = () => {
  const { currentUser } = useAuth()
  return (
    <Block>
      <Card className="card-bordered">
        <ActivityLogsCell id={currentUser.id} />
      </Card>
    </Block>
  )
}

export default AccountActivity
