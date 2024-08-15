import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative w-full">{children}</div>;
};

export default layout;
