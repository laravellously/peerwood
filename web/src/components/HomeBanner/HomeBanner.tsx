import { routes } from "@redwoodjs/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import HeaderImg from 'src/images/header/gfx-c.png';
import LogoDrak2x from 'src/images/logo-dark2x.png';
import LogoLight2x from 'src/images/logo2x.png';
import { ButtonLink, Header, HeaderCaption, HeaderContent, HeaderImage, HeaderMain, HeaderText, HeaderTitle, HeaderWrap, Logo, Menu } from "src/layouts/LandingLayout/LandingLayout";

const menuData = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Vendors',
    to: '/'
  },
  {
    text: 'Ambassadors',
    to: '/'
  }
]

const HomeBanner = (props: { className: string; id: any; }) => {
  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY)
    }
    window.scrollTo(0, 0);
    viewChange();
    window.addEventListener("resize", viewChange);
    return () => {
      window.removeEventListener('resize', viewChange);
    };
  }, []);

  // function to change the design view under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 992) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };


  return (
    <Header className={props.className && props.className} id={props.id && props.id}>
      <HeaderMain className={`header-main header-main-s1 is-sticky on-dark is-transparent ${offset > 0 ? "has-fixed" : ""}`}>
        <Container className="header-container">
          <HeaderWrap>
            <div className="header-logo">
              <Logo to="/"
                dark={LogoDrak2x}
                light={LogoLight2x}
              />
            </div>
            <div className="header-toggle" onClick={() => setToggle(!toggle)}>
              <button className={`menu-toggler ${toggle === true ? "active" : ""}`}>
                <em className="menu-on icon ni ni-menu"></em>
                <em className="menu-off icon ni ni-cross"></em>
              </button>
            </div>
            <nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}>
              <Menu className="ms-lg-auto" data={menuData} />
              {/* {!mobileView ? <Menu className="ms-lg-auto" data={menuData} /> : <MobileMenu data={menuData}/>} */}
              <ul className="menu-btns">
                <li>
                  <ButtonLink to={routes.dashboard()} rel="noreferrer" className="btn-primary btn-lg">Dashboard</ButtonLink>
                </li>
              </ul>
            </nav>
            {toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
          </HeaderWrap>
        </Container>
      </HeaderMain>
      <HeaderContent className="my-auto py-5 is-dark">
        <div className="container">
          <Row className="row justify-content-center text-center">
            <Col lg="7" md="10">
              <HeaderCaption>
                <HeaderTitle>Instantly upload any software usage nio saasbox data</HeaderTitle>
                <HeaderText>
                  <p>A powerful admin dashboard template that especially build for developers and programmers. DashLite comes with all kind of components.</p>
                </HeaderText>
                <ul className="header-action btns-inline">
                  <li>
                    <ButtonLink to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg"><span>Getting Started</span></ButtonLink>
                  </li>
                  <li>
                    <ButtonLink to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-danger btn-lg"><span>View Demo</span></ButtonLink>
                  </li>
                </ul>
              </HeaderCaption>
            </Col>
          </Row>
        </div>
      </HeaderContent>
      <HeaderImage className="mb-n5 mb-sm-n6 mb-md-n7">
        <Container>
          <Row className='justify-content-center'>
            <Col xl="10">
              <div className="card overflow-hidden p-2 bg-light">
                <img src={HeaderImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </HeaderImage>
    </Header>
  )
}

export default HomeBanner
