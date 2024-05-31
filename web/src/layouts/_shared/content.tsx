export const Content = ({ ...props }) => {
  return (
    <div className="nk-content nk-content-fluid">
      <div className="container-xl wide-lg">
        <div className="nk-content-body">
          {!props.page ? props.children : null}
        </div>
      </div>
    </div>
  );
};

export const ContentAlt = ({ ...props }) => {
  return (
    <div className="nk-content p-0">
      <div className="nk-content-inner">
        <div className="nk-content-body p-0">
          {!props.page ? props.children : null}
        </div>
      </div>
    </div>
  );
};
