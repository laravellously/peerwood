import CopyToClipboard from "react-copy-to-clipboard";
import { Metadata } from '@redwoodjs/web'
import { useState } from 'react'
import { Card, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Icon from 'src/components/Icon/Icon'
import { Content } from 'src/layouts/_shared/content'
import ActivityLogsCell from 'src/components/ActivityLogsCell'
import { useAuth } from "src/auth";

const ReferralsPage = () => {
  const [referral, setReferral] = useState("7");
  const [copy, setCopy] = useState(false);
  const { currentUser } = useAuth()

  const onCopyClick = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <>
      <Metadata title="Referrals" description="Referrals page" />

      <Content>
        <Card className="card-bordered">
          <div className="nk-refwg">
            <div className="nk-refwg-invite card-inner">
              <div className="nk-refwg-head g-3">
                <div className="nk-refwg-title">
                  <h5 className="title">Refer -APP.NAME- &amp; Earn</h5>
                  <div className="title-sub">Use the bellow link to invite your friends.</div>
                </div>
              </div>
              <div className="nk-refwg-url">
                <div className={`form-control-wrap ${copy ? "clipboard-success" : ""}`}>
                  <CopyToClipboard
                    text="https://dashlite.net/?ref=4945KD48"
                    onCopy={onCopyClick}
                  >
                    <div className="form-clip clipboard-init">
                      <Icon name="copy" className="clipboard-icon"></Icon>
                      <span className="clipboard-text">{copy ? "Copied" : "Copy"}</span>
                    </div>
                  </CopyToClipboard>
                  <div className="form-icon" style={{ transform: 'none' }}>
                    <Icon name="link-alt"></Icon>
                  </div>
                  <input
                    type="text"
                    className="form-control copy-text"
                    id="refUrl"
                    defaultValue="https://dashlite.net/?ref=4945KD48"
                  ></input>
                </div>
              </div>
            </div>
            <div className="nk-refwg-stats card-inner bg-lighter">
              <div className="nk-refwg-group g-3">
                <div className="nk-refwg-name">
                  <h6 className="title">
                    Referral Stats{" "}
                  </h6>
                </div>

                <UncontrolledDropdown className="nk-refwg-more mt-n1 me-n1">
                  <DropdownToggle className="btn btn-icon btn-trigger" color="transparent" tag="a">
                    <Icon name="more-h"></Icon>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xs" end>
                    <ul className="link-list-plain sm">
                      <li>
                        <DropdownItem
                          href="#link"
                          tag="a"
                          className={`${referral === "7" ? "active" : ""}`}
                          onClick={(ev) => {
                            ev.preventDefault();
                            setReferral("7");
                          }}
                        >
                          7 days
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          href="#link"
                          tag="a"
                          className={`${referral === "15" ? "active" : ""}`}
                          onClick={(ev) => {
                            ev.preventDefault();
                            setReferral("15");
                          }}
                        >
                          15 Days
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          href="#link"
                          tag="a"
                          className={`${referral === "30" ? "active" : ""}`}
                          onClick={(ev) => {
                            ev.preventDefault();
                            setReferral("30");
                          }}
                        >
                          30 Days
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="nk-refwg-ck">
                <div className="nk-refwg-info g-3">
                  <div className="nk-refwg-sub">
                    <h2>{referral === "7" ? "394" : referral === "15" ? "490" : "720"}</h2>
                    <div className="sub-text">Total Joined</div>
                  </div>
                  <div className="nk-refwg-sub">
                    <h2>{referral === "7" ? "$548.49" : referral === "15" ? "$720.25" : "$860.36"}</h2>
                    <div className="sub-text">Referral Earn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

      </Content>
    </>
  )
}

export default ReferralsPage
