import { Link } from "@redwoodjs/router";
import LogoLight2x from "src/images/logo2x.png";
import LogoDark2x from "src/images/logo-dark2x.png";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      <img className="logo-light logo-img" src={LogoLight2x} alt="logo" />
      <img className="logo-dark logo-img" src={LogoDark2x} alt="logo" />
    </Link>
  );
};

export default Logo;
