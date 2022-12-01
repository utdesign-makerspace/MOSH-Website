import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { ConfigProvider, Button, Divider, Space } from "antd";
import { MoshTitle, MoshSubtitle, MoshHeader } from "../components/text";
import { IndexContent, IndexSection, IndexText } from "../components/index";

import "./style.css";
import IndexImage from "../components/indeximage";
import Footer from "../components/footer";

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
          backgroundColor: "#121212",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233C4342' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23576260'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "600px",
        }}
      >
        <div
          style={{
            maxWidth: "calc(var(--page-width) - 120px)",
            padding: "var(--section-padding) 40px",
            textAlign: "center",
          }}
        >
          <MoshTitle>Dream it. Code it. Host it.</MoshTitle>
          <MoshSubtitle style={{ color: "#fff" }}>
            UTDesign Makerspace is offering free cloud computing to UT Dallas
            student organizations with open-source software through its
            Makerspace Open-Source Hosting (MOSH) program.
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
        <div style={{ maxWidth: "var(--page-width)", width: "100%" }}>
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
              padding: "var(--section-padding) 0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                maxWidth: "calc(var(--page-width) - 200px)",
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
      </div>
      <Footer />
    </ConfigProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Makerspace Open-Source Software</title>
);
