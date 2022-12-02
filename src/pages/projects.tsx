import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

import { ConfigProvider, Button, Divider, Space } from "antd";
import { MoshTitle, MoshSubtitle, MoshHeader } from "../components/text";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import "./style.css";
import Footer from "../components/footer";
import ProjectsTable from "../components/projectstable";
import HelmetComponent from "../components/helmet";

const ProjectsPage: React.FC<PageProps> = () => {
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
      <HelmetComponent title={"Projects"} />
      <Navbar toggle={toggle} transparent={false} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div
        style={{
          padding: "var(--section-padding) 40px",
          maxWidth: "var(--page-width)",
          // center everything horizontally
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: "calc(var(--page-width) - 200px)",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <MoshHeader>Check it out.</MoshHeader>
          <MoshSubtitle>
            Below is a list of projects that UTDesign Makerspace currently hosts
            through its MOSH program.
          </MoshSubtitle>
        </div>
        <div style={{ paddingBottom: "40px" }} />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1677ff",
            },
          }}
        >
          <ProjectsTable />
        </ConfigProvider>
      </div>
      <Footer />
    </ConfigProvider>
  );
};

export default ProjectsPage;
