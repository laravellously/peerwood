import { Card } from "reactstrap";

const AppCard = ({ className, bodyClass, ...props }) => {
  return (
    <Card className={`card-preview ${className ? className : ""}`}>
      <div className={`card-inner ${bodyClass ? bodyClass : ""}`}>{props.children}</div>
    </Card>
  );
}

export default AppCard
