import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import { ConfigProvider, Button, Divider, Space } from "antd";
import { MoshTitle, MoshSubtitle, MoshHeader } from "../components/text";
import { IndexContent, IndexSection, IndexText } from "../components/index";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import "./style.css";
import IndexImage from "../components/indeximage";
import Footer from "../components/footer";

const IndexPage: React.FC<PageProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#bad1cd",
        },
      }}
    >
      <Navbar toggle={toggle} transparent={false} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Footer />
    </ConfigProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Makerspace Open-Source Software</title>
);
