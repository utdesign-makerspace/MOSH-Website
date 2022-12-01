import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { ConfigProvider, Button, Divider, Space } from "antd";
import { MoshTitle, MoshSubtitle, MoshHeader } from "../components/text";
import { IndexContent, IndexSection, IndexText } from "../components/index";

import "./style.css";
import IndexImage from "../components/indeximage";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#C1393D",
        },
      }}
    >
      <div
        style={{
          background: "#121212",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "var(--page-width)",
            padding: "100px 120px",
            textAlign: "center",
          }}
        >
          <MoshTitle>Dream it. Code it. Host it.</MoshTitle>
          <MoshSubtitle style={{ color: "#fff" }}>
            UTDesign Makerspace is offering free cloud computing to UT Dallas
            student organizations with open-source software through its
            Makerspace Open-Source Software (MOSS) program.
          </MoshSubtitle>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "0 40px",
        }}
      >
        <div style={{ maxWidth: "var(--page-width)" }}>
          <IndexSection>
            <IndexText>
              <MoshHeader>A focus on community.</MoshHeader>
              <MoshSubtitle>
                Our goal is to provide a platform for student organizations to
                develop their projects and ideas. We want to help students learn
                about cloud computing and provide their knowledge.
              </MoshSubtitle>
            </IndexText>
            <IndexContent>
              <IndexImage name="Test image" filename="index_test.png" />
            </IndexContent>
          </IndexSection>

          <Divider style={{ margin: 0 }} />

          <IndexSection>
            <IndexContent>
              <IndexImage name="Test image" filename="index_test.png" />
            </IndexContent>
            <IndexText style={{ textAlign: "right" }}>
              <MoshHeader>No app restrictions.</MoshHeader>
              <MoshSubtitle>
                Outside of open-sourcing your software and a small attribution,
                there are no restrictions on what you can do with your software
                as long as it is for the benefit of the UT Dallas community.
              </MoshSubtitle>
            </IndexText>
          </IndexSection>

          <Divider style={{ margin: 0 }} />

          <IndexSection>
            <IndexText>
              <MoshHeader>We'll get it done.</MoshHeader>
              <MoshSubtitle>
                Whether you want to run your software in a Linux container or
                virtual machine, we've got you covered. Need to run a database?
                Sure. We will help you get everything running.
              </MoshSubtitle>
            </IndexText>
            <IndexContent>
              <IndexImage name="Test image" filename="index_test.png" />
            </IndexContent>
          </IndexSection>

          <Divider style={{ margin: 0 }} />

          <div
            style={{
              padding: "var(--section-padding) 120px",
              textAlign: "center",
            }}
          >
            <MoshHeader>Interested? So are we.</MoshHeader>
            <MoshSubtitle>
              We are always looking for applicants to join our program. If you
              want to learn more, please check out the interest form and table
              of projects we host below.
            </MoshSubtitle>
            <div style={{ paddingBottom: "20px" }} />
            <Space>
              <Button size="large" type="primary">
                Apply Now
              </Button>
              <Button size="large">View Projects</Button>
            </Space>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Makerspace Open-Source Software</title>
);
