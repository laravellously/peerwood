import classNames from "classnames";
import { useState } from "react";
import { Collapse } from "reactstrap";

const HomeFaq = ({ className, variation, ...props }) => {
  const [isOpen, setIsOpen] = useState("1");

  const toggleCollapse = (param) => {
    if (param === isOpen) {
      setIsOpen("0");
    } else {
      setIsOpen(param);
    }
  };
  return (
    <div className={classNames([`accordion${variation ? " accordion-s" + variation : ""}${className ? " " + className : ""}`])}>
      <div className="accordion-item">
        <div className={classNames([`accordion-head${isOpen !== "1" ? " collapsed" : ""}`])} onClick={() => toggleCollapse("1")}>
          <h6 className="title">What is the benefit of using -APP.NAME-?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "1" ? true : false}>
          <div className="accordion-inner">
            <p>Our platform allows you to trade cryptocurrency directly with other users, without intermediaries or hidden fees. This means you can get better prices, faster transactions, and more control over your trades.</p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={classNames([`accordion-head${isOpen !== "2" ? " collapsed" : ""}`])} onClick={() => toggleCollapse("2")}>
          <h6 className="title">Is my personal and financial information secure on the platform?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "2" ? true : false}>
          <div className="accordion-inner">
            <p>
              Absolutely! Our platform uses advanced encryption, two-factor authentication, and secure escrow services to protect your personal and financial information. We also comply with all relevant regulations and laws to ensure a safe and secure trading environment.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={classNames([`accordion-head${isOpen !== "3" ? " collapsed" : ""}`])} onClick={() => toggleCollapse("3")}>
          <h6 className="title">How do I find a buyer or seller on the platform?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "3" ? true : false}>
          <div className="accordion-inner">
            <p>
              You can browse our marketplace to find available offers or create your own offer to attract buyers or sellers. Our platform also allows you to filter and sort offers by price, location, and other criteria to find the best match for your needs.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={classNames([`accordion-head${isOpen !== "4" ? " collapsed" : ""}`])} onClick={() => toggleCollapse("4")}>
          <h6 className="title">What happens if a trade dispute arises?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "4" ? true : false}>
          <div className="accordion-inner">
            <p>
              Our platform has a dispute resolution process in place to help resolve any issues that may arise during a trade. Our support team is also available to assist with any questions or concerns you may have.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={classNames([`accordion-head${isOpen !== "5" ? " collapsed" : ""}`])} onClick={() => toggleCollapse("5")}>
          <h6 className="title">Are there any fees for using the platform?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "5" ? true : false}>
          <div className="accordion-inner">
            <p>We charge a small commission on trades, but we don't charge any hidden fees or intermediaries. Our fees are transparent and competitive, and we offer discounts for frequent traders and high-volume trades.</p>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default HomeFaq
