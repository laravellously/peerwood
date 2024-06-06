import { Metadata } from '@redwoodjs/web'
import { Col, Container, Row } from 'reactstrap'
import HomeBanner from 'src/components/HomeBanner/HomeBanner'
import HomeService from 'src/components/HomeService/HomeService'
import { Footer } from 'src/layouts/LandingLayout/LandingLayout'

const SocialIconOne = [
  // {icon:'twitter',to:'/'},
  {icon:'facebook-f',to:'/'},
  // {icon:'instagram',to:'/'},
  {icon:'telegram',to:'/'},
]

const NioIcon = (props: { icon: string; className?: string }) => {
  let icon = 'ni-' + props.icon;
  return (
    <em className={['ni', 'icon', icon, props.className ? props.className : null].join(' ')}></em>
  )
}

const SocialIcon = (props: { className?: string; data: { to: string; icon: string }[] }) => {
  return (
    <ul className={['social', props.className ? props.className : null].join(' ')}>
      {props.data.map((data: { to: string; icon: any }, index: React.Key) =>
        <li key={index}><a href={data.to} onClick={(ev) => ev.preventDefault()}><NioIcon icon={data.icon} /></a></li>
      )}
    </ul>
  )
}

const HomeFooter = (props: { className: string; id: string, children?: React.ReactNode }) => {
  return (
    <Footer className={props.className && props.className}>
      <Container>
        <Row className="align-items-center justify-content-md-between py-2">
          <Col md="8">
            <div className="text-base">
              &copy; 2024 -APP.NAME-. All Rights Reserved.
            </div>
          </Col>
          <Col md="4" className="d-flex justify-content-md-end">
            <SocialIcon data={SocialIconOne} />
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

const HomePage = () => (
  <>
    <Metadata title="Home" description="Welcome" />

    <div className="nk-main">
      <HomeBanner className="has-header-main-s1 bg-grad-a mb-5 mb-sm-6 mb-md-7" id="#home" />
      <HomeService className="section-service" id="#features" />
      <HomeFooter className="bg-indigo is-dark" id="#footer" />
    </div>
  </>
)

export default HomePage
