import HTMLHead from "@components/head/head";
import Header from "@components/header/headerComponent/header";
import { ILayoutProps } from "@type/layoutTypes";
import React from "react";

const Layouts = ({ children, metatags, t }: ILayoutProps) => {
  return (
    <>
      <HTMLHead pageTitle={metatags?.page_title} />
      <Header t={t} />
      {children}
    </>
  );
};

export default Layouts;
