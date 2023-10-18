import HTMLHead from "@components/head/head";
import { ILayoutProps } from "@type/layoutTypes";
import React from "react";

const Layouts = ({ children, metatags }: ILayoutProps) => {
  return (
    <>
      <HTMLHead pageTitle={metatags?.page_title} />
      {children}
    </>
  );
};

export default Layouts;
