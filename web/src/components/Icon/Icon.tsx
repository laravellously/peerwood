import classNames from "classnames";

interface IconProps {
  name: string
  id?: string
  className?: string
  style?: any
}

const Icon = ({ name, id, className, style, ...props }: IconProps) => {
  const iconClass = classNames({
    [`${className}`]: className,
    icon: true,
    ni: true,
    [`ni-${name}`]: true,
  });
  return <em className={iconClass} id={id} style={style} {...props}></em>;
}

export default Icon
