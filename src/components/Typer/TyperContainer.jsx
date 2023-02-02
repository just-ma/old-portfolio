import React from "react";

const TyperContainer = (props) => {
  const { className } = props;
  return props.open ? <div className={className}>{props.children}</div> : null;
};

export default TyperContainer;
