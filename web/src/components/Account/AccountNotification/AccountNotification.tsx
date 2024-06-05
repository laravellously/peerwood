import { Block, BlockContent } from "src/components/Block/Block"
import Switch from "src/components/Switch/Switch"

const AccountNotification = () => {
  return (
    <Block className="pt-3 pt-md-5">
      <BlockContent>
        <div className="gy-3">
          <div className="g-item">
            <div className="custom-control custom-switch">
              <Switch id="custom-switch" checked label="Email me whenever encounter unusual activity" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <Switch id="custom-switch2" checked={false} label="Email me if new browser is used to sign in" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <Switch id="custom-switch3" checked label="Notify me by email about sales and latest news" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <Switch id="feature-update" checked={false} label="Email me about new features and updates" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <Switch id="account-tips" checked label="Email me about tips on using account" />
            </div>
          </div>
        </div>
      </BlockContent>
    </Block>
  )
}

export default AccountNotification
