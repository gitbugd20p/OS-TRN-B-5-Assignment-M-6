import React from "react";

export const Td = ({ children, className = "" }) => {
  return <td className={`${className} p-5`}>{children}</td>;
};

export const Th = ({ children, className = "" }) => {
  return <td className={`${className} p-5`}>{children}</td>;
};
