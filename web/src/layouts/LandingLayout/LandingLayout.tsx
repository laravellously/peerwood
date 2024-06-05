import 'src/assets/landing/dashlite.scss'


import { Link } from "@redwoodjs/router"
import { useEffect, useState } from "react"

type LandingLayoutProps = {
  children?: React.ReactNode
}

export const ButtonLink = (props: { to: string; target?: string | (string & {}); rel: string; className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <a href={props.to} target={props.target} rel={props.rel} className={['btn', props.className ? props.className : null].join(' ')}>{props.children}</a>
  )
}

export const LinkInline = (props: { className?: any; data: any[] }) => {
  return (
    <ul className={["link-inline", props.className ? props.className : null].join(' ')}>
      {props.data.map((data: { to: string; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }, index: React.Key) =>
        <li key={index}><a href={data.to} onClick={(ev) => ev.preventDefault()}>{data.text}</a></li>
      )}
    </ul>
  )
}

export const Header = (props: { className?: any; id: string; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <header className={['header', props.className ? props.className : null].join(' ')} id={props.id}>{props.children}</header>
  )
}

export const HeaderWrap = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['header-wrap', props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>
  )
}

export const HeaderMain = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['header-main', props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}

export const HeaderContent = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['header-content', props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}

export const HeaderBrand = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['header-brand', props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}

export const HeaderCaption = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['header-caption', props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}
export const HeaderTitle = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <h1 className={['header-title', props.className ? props.className : null].join(' ')}>{props.children}</h1>
  )
}
export const HeaderText = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['header-text', props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}

export const HeaderBadge = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={["header-badge", props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}

export const HeaderImage = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['header-image', props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>
  );
};

export const ImageBlock = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['img-block', props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>
  )
}

export const Portrait = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={["portrait", props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>
  )
}

export const Footer = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <footer className={['footer', props.className ? props.className : null].join(' ')}>
      {props.children}
    </footer>
  )
}

export const TextBlock = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['text-block', props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}

export const TitleH2 = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <h2 className={['title', props.className ? props.className : null].join(' ')}>{props.children}</h2>
  )
}
export const TitleH3 = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <h3 className={['title', props.className ? props.className : null].join(' ')}>{props.children}</h3>
  )
}


export const Paragraph = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <p className={['', props.className ? props.className : null].join(' ')}>{props.children}</p>
  )
}

export const MenuLink = ({ data, ...props }: { data?: any, to: string, children: React.ReactNode }) => {
  return (
    <Link to={props.to} className="menu-link">{props.children}</Link>
  )
}

export const MenuItem = ({ data, ...props }: { data?: any, to: string, text: string }) => {
  const [active, setActive] = useState(false);
  return (
    <li className={['menu-item', active ? "active" : ""].join(' ')}>
      <MenuLink to={props.to}>{props.text}</MenuLink>
    </li>
  )
}

export const Menu = ({ data, ...props }) => {
  return (
    <ul className={['menu-list', props.className ? props.className : null].join(' ')}>
      {data.map((data: { to: string; text: string }, index: React.Key) =>
        <MenuItem key={index} to={data.to} text={data.text}>
        </MenuItem>
      )}
    </ul>
  )
}

export const Logo = (props: { to: string; light: string; dark: string }) => {
  return (
    <a href={props.to} className="logo-link">
      <img className="logo-light logo-img" src={props.light} alt="logo" />
      <img className="logo-dark logo-img" src={props.dark} alt="logo dark" />
    </a>
  )
}

export const BrandLogo = ({ src, alt, ...props }) => {
  return (
    <div className={['brand-item', props.className ? props.className : null].join(' ')}>
      <img src={src} alt={alt} />
    </div>
  )
}

export const Service = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['service', props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>
  )
}

export const ServiceIcon = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['service-icon', props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>

  )
}

export const ServiceText = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['service-text', props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>
  )
}

export const Section = (props: { className?: any; id: string; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <section className={['section', props.className ? props.className : null].join(' ')} id={props.id}>{props.children}</section>
  )
}

export const SectionHead = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['section-head', props.className ? props.className : null].join(' ')}>
      {props.children}
    </div>
  )
}

export const SectionContant = (props: { className?: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal }) => {
  return (
    <div className={['section-content', props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  useEffect(() => {
    document.body.className = "nk-body bg-white npc-landing no-touch nk-nio-theme";
  }, []);
  return <>{children}</>
}

export default LandingLayout
