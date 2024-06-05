import { Head } from "@redwoodjs/web";
import React, { useState } from "react";
import { Modal, ModalBody, Row, Col, Button } from "reactstrap";
import { useAuth } from "src/auth";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes } from "src/components/Block/Block";
import Icon from "src/components/Icon/Icon";
import { getDateStructured } from "src/utils";

const AccountProfile = () => {
  const [modalTab, setModalTab] = useState("1");
  const [modal, setModal] = useState(false);
  const { currentUser } = useAuth()
  return (
    <React.Fragment>
      <Head title="Account Profile"></Head>
      <Block className="pt-3 pt-md-5">
        <div className="alert alert-warning">
          <div className="alert-cta flex-wrap flex-md-nowrap">
            <div className="alert-text">
                <p>Upgrade your account to unlock full feature and increase your limit of transaction amount.</p>
            </div>
            <ul className="alert-actions gx-3 mt-3 mb-1 my-md-0">
                <li className="order-md-last">
                    <a href="#" className="btn btn-sm btn-warning">Upgrade</a>
                </li>
                <li>
                    <a href="#" className="link link-primary">Learn More</a>
                </li>
            </ul>
          </div>
        </div>
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Personal Information</BlockTitle>
            <BlockDes>
              <p>Basic info, like your name and address, that you use on Nio Platform.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>
        <div className="nk-data data-list">
          <div className="data-head">
            <h6 className="overline-title">Basics</h6>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Full Name</span>
              <span className="data-value">{currentUser.profile.firstName} {currentUser.profile.lastName}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Display Name</span>
              <span className="data-value">{currentUser.profile.firstName}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Email</span>
              <span className="data-value">{currentUser.email}</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more disable">
                <Icon name="lock-alt"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Email Verified</span>
              <span className="data-value">{currentUser.emailVerifiedAt == null ? '' : '' }</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more disable">
                <Icon name="lock-alt"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Phone Number Verified</span>
              <span className="data-value text-soft">YES</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Telegram Username</span>
              <span className="data-value">mark_fil</span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
          <div className="data-item" onClick={() => setModal(true)}>
            <div className="data-col">
              <span className="data-label">Describe yourself in one sentence</span>
              <span className="data-value">
                The best crypto trader you will ever meet
              </span>
            </div>
            <div className="data-col data-col-end">
              <span className="data-more">
                <Icon name="forward-ios"></Icon>
              </span>
            </div>
          </div>
        </div>
        <div className="nk-data data-list">
          <div className="data-head">
            <h6 className="overline-title">Preferences</h6>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Language</span>
              <span className="data-value">English (United State)</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#language"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
                className="link link-primary"
              >
                Change Language
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Date Format</span>
              <span className="data-value">MM/DD/YYYY</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#link"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
                className="link link-primary"
              >
                Change
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Timezone</span>
              <span className="data-value">Bangladesh (GMT +6)</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#link"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
                className="link link-primary"
              >
                Change
              </a>
            </div>
          </div>
        </div>
      </Block>
    </React.Fragment>
  )
}

export default AccountProfile
