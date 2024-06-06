import { Col, Container, Row } from "reactstrap";
import { ButtonLink, Paragraph, Section, SectionContant, SectionHead, Service, ServiceIcon, ServiceText, TextBlock, TitleH2 } from "src/layouts/LandingLayout/LandingLayout";
import { Analytics, Badge, Shield } from "../AppIcon/AppIcon";
import HomeFaq from "../HomeFAQ/HomeFAQ";

const HomeService = (props: { className: string; id: string }) => {
  return (
    <>
      <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md="8" xl="7">
              <SectionHead>
                <h2 className="title text-dark">Designed just for you</h2>
                <p>Trade a wide range of cryptocurrencies, including Bitcoin, Ethereum, Binance Coin and many more. Exchange it to fiat currency with ease.</p>
              </SectionHead>
            </Col>
          </Row>
          <SectionContant>
            <Row className="gy-gs justify-content-center text-center">
              <Col xs="10" sm="6" lg="4">
                <Service className="card card-full service-s4 after-bg-info">
                  <div className="card-inner">
                    <ServiceIcon className="styled-icon styled-icon-6x text-info">
                      <Shield />
                    </ServiceIcon>
                    <ServiceText>
                      <h5 className="title text-dark">Secure Trading</h5>
                      <p>Our platform uses advanced encryption and escrow services to ensure safe and secure trades.</p>
                    </ServiceText>
                  </div>
                </Service>
              </Col>
              <Col xs="10" sm="6" lg="4">
                <Service className="card card-full service-s4">
                  <div className="card-inner">
                    <ServiceIcon className="styled-icon styled-icon-6x text-primary">
                      <Analytics />
                    </ServiceIcon>
                    <ServiceText>
                      <h5 className="title text-dark">No Intermediaries</h5>
                      <p>Trade directly with other users, without the need for intermediaries, ensuring a streamlined and efficient process.</p>
                    </ServiceText>
                  </div>
                </Service>
              </Col>
              <Col xs="10" sm="6" lg="4">
                <Service className="card card-full service-s4 after-bg-danger">
                  <div className="card-inner">
                    <ServiceIcon className="styled-icon styled-icon-6x text-danger">
                      <Badge />
                    </ServiceIcon>
                    <ServiceText>
                      <h5 className="title text-dark">Easy To Use</h5>
                      <p>Our platform is designed to be user-friendly, seamless, transparent and easy to navigate, even for beginners.</p>
                    </ServiceText>
                  </div>
                </Service>
              </Col>
            </Row>
          </SectionContant>
        </Container>
      </Section>
      <Section className="section-service bg-grad-a is-dark" id="#start">
        <Container>
          <Row className="justify-content-center text-center">
            <Col sm="8" lg="6">
              <SectionHead>
                <h2 className="title">You too can start trading. Here&apos;s How:</h2>
              </SectionHead>
            </Col>
          </Row>
          <SectionContant>
            <Row className="justify-content-center text-center g-gs">
              <Col sm="8" md="6" lg="4">
                <Service>
                  <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                    <h4>1</h4>
                  </ServiceIcon>
                  <ServiceText>
                    <h4 className="title">Create your account</h4>
                    <p>Create a secure -APP.NAME- account in seconds and get onboarded today.</p>
                  </ServiceText>
                </Service>
              </Col>
              <Col sm="8" md="6" lg="4">
                <Service>
                  <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                    <h4>2</h4>
                  </ServiceIcon>
                  <ServiceText>
                    <h4 className="title">Verify your identity</h4>
                    <p>Verify your identity to increase your trust rating, trading limits and security.</p>
                  </ServiceText>
                </Service>
              </Col>
              <Col sm="8" md="6" lg="4">
                <Service>
                  <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                    <h4>3</h4>
                  </ServiceIcon>
                  <ServiceText>
                    <h4 className="title">Deposit funds</h4>
                    <p>Deposit cryptocurrency or fiat currency to your secure escrow wallet start trading.</p>
                  </ServiceText>
                </Service>
              </Col>
            </Row>
          </SectionContant>
        </Container>
      </Section>
      <Section className="section-faq" id="#faqs">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="6">
              <SectionHead>
                <h2 className="title">Frequently Asked Questions</h2>
                <p>Got a question? We've got answers. If you have some other questions, reach out to us via our channels.</p>
              </SectionHead>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col lg="8">
              <HomeFaq variation="1" className="card card-shadow border-0 round-xl" />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="section-cta bg-grad-a is-dark py-6" id="#cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md="8">
              <TextBlock className="is-compact">
                <TitleH2 className="fw-medium">Join Our Community</TitleH2>
                <Paragraph className="pe-lg-9 ps-lg-9">Be part of our community and stay up to date with the latest news, updates, market trends and promotions.</Paragraph>
                <ul className="btns-inline">
                  <li>
                    <ButtonLink to="#" target="_blank" rel="noreferrer" className="btn-primary">Join Our Telegram Group</ButtonLink>
                  </li>
                  <li>
                    <ButtonLink to="#" target="_blank" rel="noreferrer" className="btn-primary">Join Our Facebook Group</ButtonLink>
                  </li>
                </ul>
              </TextBlock>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default HomeService
