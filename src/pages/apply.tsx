import * as React from "react";
import { useState } from "react";
import { graphql, PageProps } from "gatsby";
import styled from "styled-components";

import { Button, ConfigProvider, Divider, Steps } from "antd";
import { MoshTitle, MoshSubtitle, MoshHeader } from "../components/text";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import "./style.css";
import Footer from "../components/footer";
import HelmetComponent from "../components/helmet";

const ApplyPage: React.FC<PageProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let currentStep: number = 0;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#bad1cd",
        },
      }}
    >
      <HelmetComponent title={"Apply"} />
      <Navbar toggle={toggle} />
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
          <MoshHeader>Ready to apply?</MoshHeader>
          <MoshSubtitle>
            Please complete the interactive application below. If you meet our
            requirements, you will be shown a Google Form to fill out. If you
            have any questions, please email us using the button in our navbar.
          </MoshSubtitle>
        </div>
        <div style={{ paddingBottom: "40px" }} />
        <Steps
          progressDot
          current={step}
          items={[
            {
              title: "Developer",
            },
            {
              title: "Software",
            },
            {
              title: "Application",
            },
          ]}
        />
        <Divider />
        <div
          style={{
            maxWidth: "calc(var(--page-width) - 200px)",
            margin: "0 auto",
          }}
        >
          {ApplicationArr[step]}
          {step < ApplicationArr.length - 1 && (
            <Button
              type="primary"
              style={{
                marginTop: "16px",
              }}
              onClick={() => {
                setStep(step + 1);
              }}
            >
              Next
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </ConfigProvider>
  );
};

export default ApplyPage;

export const ApplyHeader = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700 !important;
  font-size: 36px !important;

  background: -webkit-linear-gradient(-70deg, #343a40 0%, #181b1f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-direction-break: clone;

  padding-bottom: 16px;
`;

const DeveloperEligibility = (
  <>
    <ApplyHeader>Developer Eligibility</ApplyHeader>
    <MoshSubtitle>
      Make sure you are one of the following:
      <ul>
        <li>
          A student organization registered with the UT Dallas Student
          Organization Center
        </li>
        <li>
          A student enrolled at UT Dallas developing software with a sizeable
          userbase
        </li>
      </ul>
    </MoshSubtitle>
  </>
);

const SoftwareEligibility = (
  <>
    <ApplyHeader>Software Eligibility</ApplyHeader>
    <MoshSubtitle>
      Make sure your software is one of the following:
      <ul>
        <li> Open-source software </li>
        <li> Closed-source software you are willing to open source </li>
        <li>
          Any software developed externally (ex. game server) that has a
          sizeable userbase for your use case
        </li>
      </ul>
      <br />
      Also make sure your software meets the following requirements:
      <ul>
        <li>
          Your software can run in an isolated Linux container, virtual machine,
          or Docker container
        </li>
        <li>
          You are willing to include an attribution to MOSH so students can
          learn from other open-source projects
        </li>
        <li>
          Is not a commercial service and does not use an excessive amount of
          processing power (ex. cryptocurrency mining)
        </li>
      </ul>
    </MoshSubtitle>
  </>
);

const GoogleForm = (
  <>
    <ApplyHeader>Approved</ApplyHeader>
    <MoshSubtitle>
      You are approved to apply for Makerspace Open-Source Hosting. Please fill
      out the Google Form below.
    </MoshSubtitle>
    <div style={{ paddingBottom: "16px" }} />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSftXPUWqUzkfK8b4cp6mP7UzpdAimNBtWyqbcX9TfOO9qDUvw/viewform?embedded=true"
      width="100%"
      height="400px"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      style={{ backgroundColor: "#bad1cd99", borderRadius: "8px" }}
    >
      Loading…
    </iframe>
  </>
);

const ApplicationArr = [DeveloperEligibility, SoftwareEligibility, GoogleForm];
