import React from "react";
import Icon from "./Icon";
import "./Icon.scss";

const IconContainer = (props) => {
  const { direction, icons, loading } = props;

  const getStyle = () => {
    return direction === "row"
      ? { flexDirection: direction, width: "100%" }
      : { flexDirection: direction, height: "100%" };
  };

  return (
    <div className="iconWrapper" style={getStyle()}>
      {icons.map((icon) => (
        <Icon key={icon.id} {...icon} loading={loading} />
      ))}
    </div>
  );
};

export default IconContainer;
