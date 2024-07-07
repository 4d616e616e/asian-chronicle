import React from "react";
import { Header } from "./Header/Header";
import { TopMenu } from "./TopMenu";

export const Layout = ({ children }) => {
  return (
    <>
      <Header /> <TopMenu /> {children}
    </>
  );
};
