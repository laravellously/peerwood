import classNames from "classnames";
import Icon from "../Icon/Icon";
import { ReactNode } from "react";

interface IAvatar {
  className?: string
  size?: string
  theme?: string
  icon?: string
  text?: string
  image?: string
  imageAlt?: string
  children?: ReactNode
  // props: any
}

const Avatar = ({ className, size, theme, icon, text, image, imageAlt, children }: IAvatar) => {
  const classes = classNames({
    "user-avatar": true,
    [`${className}`]: className,
    [`user-avatar-${size}`]: size,
    [`bg-${theme}`]: theme,
  });
  return (
    <div className={classes}>
      {icon ? <Icon name={icon} /> : null}
      {image && <img src={image} alt={imageAlt} />}
      {text && !image && <span>{text}</span>}
      {children}
    </div>
  );
};

export default Avatar
