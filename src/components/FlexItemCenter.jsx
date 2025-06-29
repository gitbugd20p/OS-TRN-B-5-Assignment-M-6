import React from "react";

const FlexItemCenter = ({ children, className = "" }) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

export default FlexItemCenter;
