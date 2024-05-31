import classNames from "classnames";

interface BlockProps {
  className?: string
  size?: string
  wide?: string
  page?: boolean
  tag?: any
  children: React.ReactNode
}

export const Block = ({ className, size, ...props }: BlockProps) => {
  const blockClass = classNames({
    "nk-block": true,
    [`nk-block-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={blockClass}>{props.children}</div>;
};

export const BlockContent = ({ className, ...props }: BlockProps) => {
  const blockContentClass = classNames({
    "nk-block-content": true,
    [`${className}`]: className,
  });
  return <div className={blockContentClass}>{props.children}</div>;
};

export const BlockBetween = ({ className, ...props }: BlockProps) => {
  return <div className={`nk-block-between ${className ? className : ""}`}>{props.children}</div>;
};

export const BlockHead = ({ className, size, wide, ...props }: BlockProps) => {
  const blockHeadClass = classNames({
    "nk-block-head": true,
    [`nk-block-head-${size}`]: size,
    [`wide-${wide}`]: wide,
    [`${className}`]: className,
  });
  return <div className={blockHeadClass}>{props.children}</div>;
};

export const BlockHeadContent = ({ className, ...props }: BlockProps) => {
  return <div className={classNames([`nk-block-head-content${className ? " " + className : ""}`])}>{props.children}</div>;
};

export const BlockTitle = ({ className, page, ...props }: BlockProps) => {
  const classes = [`nk-block-title ${page ? "page-title" : "title"}${className ? " " + className : ""}`];
  return (
    <React.Fragment>
      {!props.tag ? (
        <h3 className={classNames(classes)}>{props.children}</h3>
      ) : (
        <props.tag className={classes}>{props.children}</props.tag>
      )}
    </React.Fragment>
  );
};

export const BlockDes = ({ className, page, ...props }: BlockProps) => {
  const classes = [`nk-block-des${className ? " " + className : ""}`];
  return <div className={classNames(classes)}>{props.children}</div>;
};

export const BlockImage = ({ classNames, ...props }) => {
  return <div className={`nk-block-image ${classNames ? classNames : ""}`}>{props.children}</div>;
};

export const BlockHeadSub = ({ className, ...props }) => {
  return (
    <div className={`nk-block-head-sub ${className ? className : ""}`}>
      <span>{props.children}</span>
    </div>
  );
};
