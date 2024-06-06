import { Link } from '@redwoodjs/router';
import { Metadata, TypedDocumentNode, useQuery } from '@redwoodjs/web';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Label, Modal, ModalBody, Row, UncontrolledDropdown } from 'reactstrap';
import { Block, BlockBetween, BlockDes, BlockHead, BlockHeadContent, BlockTitle } from 'src/components/Block/Block';
import Icon from 'src/components/Icon/Icon';
import { Content } from 'src/layouts/_shared/content';
import btc from 'src/images/coins/btc.svg'
import eth from '/src/images/coins/eth.svg'
import PaginationComponent from 'src/components/Pagination/Pagination';
import data from 'src/data/notifications';
import RSelect from 'src/components/Select/Select';
import { DataTable, DataTableBody, DataTableHead, DataTableRow, DataTableItem } from 'src/components/Table/Table';
import { useForm } from '@redwoodjs/forms';
import TooltipComponent from 'src/components/Tooltip/Tooltip';

const statusOptions = [
  { value: "Paid", label: "Paid" },
  { value: "Due", label: "Due" },
  { value: "Canceled", label: "Cancelled" },
];

const cryptoActivityOptions = [
  { value: "Deposit", label: "Deposit" },
  { value: "Buy", label: "Buy Coin" },
  { value: "Sell", label: "Sell Coin" },
  { value: "Transfer", label: "Transfer" },
  { value: "Withdraw", label: "Withdraw" },
];

const filterStatusOptions = [
  { value: "Pending", label: "Pending" },
  { value: "Rejected", label: "Rejected" },
  { value: "Upcoming", label: "Upcoming" },
  { value: "Completed", label: "Completed" },
];

const filterCoin = [
  { value: "Bitcoin", label: "Bitcoin" },
  { value: "Etherium", label: "Etherium" },
  { value: "Litecoin", label: "Litecoin" },
];

const filterPaymentmethod = [
  { value: "Paypal", label: "Paypal" },
  { value: "Bank", label: "Bank" },
];

const orderData = []

const QUERY: TypedDocumentNode = gql`
  query GetAllFiatsAndCoins {
    fiats {
      id
      name
      symbol
    }
    coins {
      id
      name
      symbol
    }
  }

`

const setCoinFilter = (data) => {
  let val = []
  data.map(item => {
    val.push({
      value: item.name,
      label: item.name
    })
  })
  return val
}

const OffersPage = () => {
  const { data: queryData } = useQuery(QUERY)
  console.log(queryData)
  const [onSearch, setonSearch] = useState(true);
  const [onSearchText, setSearchText] = useState("");
  const [modal, setModal] = useState({
    add: false,
  });
  const [modalDetail, setModalDetail] = useState(false);
  const [data, setData] = useState(orderData);
  const [detail, setDetail] = useState({});
  const [formData, setFormData] = useState({
    orderType: "Deposit",
    amountBTC: "",
    amountUSD: "",
    balanceBTC: "",
    balanceUSD: "",
    status: "Pending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [sort, setSortState] = useState("");

  // Sorting data
  const sortFunc = (params) => {
    let defaultData = data;
    if (params === "asc") {
      let sortedData = defaultData.sort((a, b) => a.ref.localeCompare(b.ref));
      setData([...sortedData]);
    } else if (params === "dsc") {
      let sortedData = defaultData.sort((a, b) => b.ref.localeCompare(a.ref));
      setData([...sortedData]);
    }
  };

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = orderData.filter((item) => {
        return item.ref.toLowerCase().includes(onSearchText.toLowerCase());
      });
      setData([...filteredObject]);
    } else {
      setData([...orderData]);
    }
  }, [onSearchText]);

  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  // function to reset the form
  const resetForm = () => {
    setFormData({
      orderType: "Buy",
      amountBTC: "",
      amountUSD: "",
      balanceBTC: "",
      balanceUSD: "",
      status: "Pending",
    });
  };

  // function to close the form modal
  const onFormCancel = () => {
    setModal({ add: false });
    resetForm();
  };

  // submit function to add a new item
  const onFormSubmit = (submitData) => {
    const { amountBTC, amountUSD, balanceUSD, balanceBTC } = submitData;
    let submittedData = {
      id: data.length + 1,
      ref: "YWLX52JG73",
      date: "18/10/2019 12:04 PM",
      desc: formData.orderType === "Profit" ? "Credited " + formData.orderType : formData.orderType + " Funds",
      orderType: formData.orderType,
      amountBTC: amountBTC,
      amountUSD: amountUSD,
      balanceBTC: balanceBTC,
      balanceUSD: balanceUSD,
      status: formData.status,
    };
    setData([submittedData, ...data]);
    resetForm();
    setModal({ add: false });
  };

  useEffect(() => {
    reset(formData)
  }, [formData]);

  // function to change to approve property for an item
  const onApproveClick = (id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].status = "Completed";
    setData([...newData]);
  };

  // function to change to reject property for an item
  const onRejectClick = (id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].status = "Rejected";
    setData([...newData]);
  };

  // function to load detail data
  const loadDetail = (id) => {
    let index = data.findIndex((item) => item.id === id);
    setDetail(data[index]);
  };

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch);

  // function to toggle details modal
  const toggleModalDetail = () => setModalDetail(!modalDetail);

  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  const [orderActivity, setActivity] = useState("");

  return (
    <>
      <Metadata title="Offers" description="Offers page" />

      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Trade Offers</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <ul className="nk-block-tools g-3">
                <li>
                  <Button color="primary" onClick={() => setModal({ add: true })}>
                    <Icon name="plus"></Icon>
                    <span>Create Offer</span>
                  </Button>
                </li>
              </ul>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <DataTable className="card-stretch" bodyClassName={""} title={""}>
            <div className="card-inner">
              <div className="card-title-group">
                <div className="card-tools">
                  <ul className="card-tools-nav">
                    <li className={orderActivity === "Buy" ? "active" : ""} onClick={() => setActivity("Buy")}>
                      <a
                        href="#buy"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <span>Buy</span>
                      </a>
                    </li>
                    <li className={orderActivity === "Sell" ? "active" : ""} onClick={() => setActivity("Sell")}>
                      <a
                        href="#sell"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <span>Sell</span>
                      </a>
                    </li>
                    <li className={orderActivity === "Mine" ? "active" : ""} onClick={() => setActivity("")}>
                      <a
                        href="#mine"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <span>Mine</span>
                      </a>
                    </li>
                    <li className={orderActivity === "" ? "active" : ""} onClick={() => setActivity("")}>
                      <a
                        href="#all"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <span>All</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-tools me-n1">
                  <ul className="btn-toolbar gx-1">
                    <li>
                      <Button
                        href="#search"
                        onClick={(ev) => {
                          ev.preventDefault();
                          toggle();
                        }}
                        className="btn-icon search-toggle toggle-search"
                      >
                        <Icon name="search"></Icon>
                      </Button>
                    </li>
                    <li className="btn-toolbar-sep"></li>
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="btn btn-trigger btn-icon dropdown-toggle">
                          <div className="dot dot-primary"></div>
                          <Icon name="filter-alt"></Icon>
                        </DropdownToggle>
                        <DropdownMenu end className="filter-wg dropdown-menu-xl">
                          <div className="dropdown-head">
                            <span className="sub-title dropdown-title">Filters</span>
                          </div>
                          <div className="dropdown-body dropdown-body-rg">
                            <Row className="gx-1 gy-4">
                              {/* <Col xs="4">
                                <div className="form-group">
                                  <label className="overline-title overline-title-alt">Type</label>
                                  <RSelect options={cryptoActivityOptions} placeholder="Any" />
                                </div>
                              </Col> */}
                              {/* <Col xs="4">
                                <div className="form-group">
                                  <label className="overline-title overline-title-alt">Status</label>
                                  <RSelect options={filterStatusOptions} placeholder="Any" />
                                </div>
                              </Col> */}
                              <Col xs="6">
                                <div className="form-group">
                                  <label className="overline-title overline-title-alt">Coin</label>
                                  <RSelect options={setCoinFilter(queryData.coins)} placeholder="Any" />
                                </div>
                              </Col>
                              <Col xs="6">
                                <div className="form-group">
                                  <label className="overline-title overline-title-alt">Method</label>
                                  <RSelect options={filterPaymentmethod} placeholder="Any" />
                                </div>
                              </Col>

                              <Col size="12">
                                <div className="form-group">
                                  <Button type="button" className="btn btn-block btn-sm btn-secondary">
                                    Filter
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="dropdown-foot between">
                            <a
                              href="#reset"
                              onClick={(ev) => {
                                ev.preventDefault();
                              }}
                              className="clickable"
                            >
                              Reset Filter
                            </a>
                            <a
                              href="#save"
                              onClick={(ev) => {
                                ev.preventDefault();
                              }}
                            >
                              Save Filter
                            </a>
                          </div>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="btn btn-trigger btn-icon dropdown-toggle">
                          <Icon name="setting"></Icon>
                        </DropdownToggle>
                        <DropdownMenu end className="dropdown-menu-xs">
                          <ul className="link-check">
                            <li>
                              <span>Show</span>
                            </li>
                            <li className={itemPerPage === 10 ? "active" : ""}>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setItemPerPage(10);
                                }}
                              >
                                10
                              </DropdownItem>
                            </li>
                            <li className={itemPerPage === 15 ? "active" : ""}>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setItemPerPage(15);
                                }}
                              >
                                15
                              </DropdownItem>
                            </li>
                          </ul>
                          <ul className="link-check">
                            <li>
                              <span>Order</span>
                            </li>
                            <li className={sort === "dsc" ? "active" : ""}>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setSortState("dsc");
                                  sortFunc("dsc");
                                }}
                              >
                                DESC
                              </DropdownItem>
                            </li>
                            <li className={sort === "asc" ? "active" : ""}>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                  setSortState("asc");
                                  sortFunc("asc");
                                }}
                              >
                                ASC
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
                <div className={`card-search search-wrap ${!onSearch && "active"}`}>
                  <div className="search-content">
                    <Button
                      onClick={() => {
                        setSearchText("");
                        toggle();
                      }}
                      className="search-back btn-icon toggle-search"
                    >
                      <Icon name="arrow-left"></Icon>
                    </Button>
                    <input
                      type="text"
                      className="border-transparent form-focus-none form-control"
                      placeholder="Search by Order Id"
                      value={onSearchText}
                      onChange={(e) => onFilterChange(e)}
                    />
                    <Button className="search-submit btn-icon">
                      <Icon name="search"></Icon>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DataTableBody bodyclass="nk-tb-tnx" compact={undefined} className={undefined}>
              <DataTableHead>
                <DataTableRow className={undefined} size={undefined}>
                  <span>Details</span>
                </DataTableRow>
                <DataTableRow size="xxl" className={undefined}>
                  <span>Source</span>
                </DataTableRow>
                <DataTableRow size="lg" className={undefined}>
                  <span>Order</span>
                </DataTableRow>
                <DataTableRow className="text-end" size={undefined}>
                  <span>Amount</span>
                </DataTableRow>
                <DataTableRow size="sm" className="text-end">
                  <span>Balance</span>
                </DataTableRow>
                <DataTableRow className="nk-tb-col-status" size={undefined}>
                  <span className="sub-text d-none d-md-block">Status</span>
                </DataTableRow>
                <DataTableRow className="nk-tb-col-tools" size={undefined}></DataTableRow>
              </DataTableHead>

              {currentItems.length > 0
                ? currentItems.map((item) => {
                  return (
                    <DataTableItem key={item.id} className={undefined}>
                      <DataTableRow className={undefined} size={undefined}>
                        <div className="nk-tnx-type">
                          <div
                            className={`nk-tnx-type-icon bg-${item.status === "Completed"
                              ? "success-dim text-success"
                              : item.status === "Upcoming"
                                ? "warning-dim text-warning"
                                : item.status === "Pending"
                                  ? "info-dim text-info"
                                  : "danger-dim text-danger"
                              }`}
                          >
                            <Icon name="arrow-up-right"></Icon>
                          </div>
                          <div className="nk-tnx-type-text">
                            <span className="tb-lead">{item.desc}</span>
                            <span className="tb-date">{item.date}</span>
                          </div>
                        </div>
                      </DataTableRow>
                      <DataTableRow size="xxl" className={undefined}>
                        <span className="tb-lead-sub">Using PayPal Account</span>
                        <span className="tb-sub">mypay*****com</span>
                      </DataTableRow>
                      <DataTableRow size="lg" className={undefined}>
                        <span className="tb-lead-sub">{item.ref}</span>
                        <Badge
                          className="badge-dot"
                          color={
                            item.status === "Completed"
                              ? "success"
                              : item.status === "Upcoming"
                                ? "warning"
                                : item.status === "Pending"
                                  ? "info"
                                  : "danger"
                          }
                        >
                          {item.orderType}
                        </Badge>
                      </DataTableRow>
                      <DataTableRow className="text-end" size={undefined}>
                        <span className="tb-amount">
                          + {item.amountBTC} <span>BTC</span>
                        </span>
                        <span className="tb-amount-sm">{item.amountUSD} USD</span>
                      </DataTableRow>
                      <DataTableRow className="text-end" size="sm">
                        <span className="tb-amount">
                          {item.balanceBTC} <span>BTC</span>
                        </span>
                        <span className="tb-amount-sm">{item.balanceUSD} USD</span>
                      </DataTableRow>
                      <DataTableRow className="nk-tb-col-status" size={undefined}>
                        <div
                          className={`dot dot-${item.status === "Completed"
                            ? "success"
                            : item.status === "Upcoming"
                              ? "warning"
                              : item.status === "Pending"
                                ? "info"
                                : "danger"
                            } d-md-none`}
                        ></div>
                        <Badge
                          className="badge-sm badge-dim d-none d-md-inline-flex"
                          color={`outline-${item.status === "Completed"
                            ? "success"
                            : item.status === "Upcoming"
                              ? "warning"
                              : item.status === "Pending"
                                ? "info"
                                : "danger"
                            }`}
                        >
                          {item.status}
                        </Badge>
                      </DataTableRow>
                      <DataTableRow className="nk-tb-col-tools" size={undefined}>
                        <ul className="nk-tb-actions gx-1">
                          <li
                            className="nk-tb-action-hidden"
                            onClick={() => {
                              loadDetail(item.id);
                              toggleModalDetail();
                            }}
                          >
                            <TooltipComponent
                              tag="a"
                              containerClassName="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                              id={item.ref + "details"}
                              icon="eye"
                              direction="top"
                              text="Details" iconClass={undefined} />
                          </li>
                          {item.status !== "Completed" && item.status !== "Rejected" && (
                            <React.Fragment>
                              <li className="nk-tb-action-hidden" onClick={() => onApproveClick(item.id)}>
                                <TooltipComponent
                                  tag="a"
                                  containerClassName="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                  id={item.ref + "approve"}
                                  icon="done"
                                  direction="top"
                                  text="approve" iconClass={undefined} />
                              </li>
                              <li className="nk-tb-action-hidden" onClick={() => onRejectClick(item.id)}>
                                <TooltipComponent
                                  tag="a"
                                  containerClassName="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                  id={item.ref + "reject"}
                                  icon="cross-round"
                                  direction="top"
                                  text="Reject" iconClass={undefined} />
                              </li>
                            </React.Fragment>
                          )}
                          <li>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                tag="a"
                                className="dropdown-toggle bg-white btn btn-sm btn-outline-light btn-icon"
                              >
                                <Icon name="more-h"></Icon>
                              </DropdownToggle>
                              <DropdownMenu end>
                                <ul className="link-list-opt no-bdr">
                                  {item.status !== "Completed" && item.status !== "Rejected" && (
                                    <React.Fragment>
                                      <li onClick={() => onApproveClick(item.id)}>
                                        <DropdownItem
                                          tag="a"
                                          href="#approve"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                          }}
                                        >
                                          <Icon name="done"></Icon>
                                          <span>Approve</span>
                                        </DropdownItem>
                                      </li>
                                      <li onClick={() => onRejectClick(item.id)}>
                                        <DropdownItem
                                          tag="a"
                                          href="#reject"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                          }}
                                        >
                                          <Icon name="cross-round"></Icon>
                                          <span>Reject</span>
                                        </DropdownItem>
                                      </li>
                                    </React.Fragment>
                                  )}
                                  <li
                                    onClick={() => {
                                      loadDetail(item.id);
                                      toggleModalDetail();
                                    }}
                                  >
                                    <DropdownItem
                                      tag="a"
                                      href="#details"
                                      onClick={(ev) => {
                                        ev.preventDefault();
                                      }}
                                    >
                                      <Icon name="eye"></Icon>
                                      <span>Details</span>
                                    </DropdownItem>
                                  </li>
                                </ul>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </li>
                        </ul>
                      </DataTableRow>
                    </DataTableItem>
                  );
                })
                : null}
            </DataTableBody>
            <div className="card-inner">
              {currentItems.length > 0 ? (
                <PaginationComponent
                  itemPerPage={itemPerPage}
                  totalItems={data.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              ) : (
                <div className="text-center">
                  <span className="text-silent">No data found</span>
                </div>
              )}
            </div>
          </DataTable>
        </Block>
      </Content>
    </>
  )
}

export default OffersPage
