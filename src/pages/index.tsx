import * as React from "react";
import { useState } from "react";
import { graphql, HeadFC, navigate, PageProps } from "gatsby";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styled from "styled-components";

import { ConfigProvider, Button, Divider, Space, Row } from "antd";
import { MoshTitle, MoshSubtitle, MoshHeader } from "../components/text";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import "./style.css";
import StaticImage from "../components/staticimage";
import Footer from "../components/footer";
import HelmetComponent from "../components/helmet";

type DataProps = {
  allProjectsJson: {
    edges: [
      {
        node: {
          name: string;
          developer: string;
        };
      }
    ];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let projectCount = data.allProjectsJson.edges.length;
  let devCount = new Set(
    data.allProjectsJson.edges.map((edge) => edge.node.developer)
  ).size;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#bad1cd",
        },
      }}
    >
      <HelmetComponent />
      <Navbar toggle={toggle} transparent={true} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
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
          <div style={{ paddingBottom: "20px" }} />
          <Space>
            <Button
              size="large"
              type="primary"
              onClick={() => navigate("/apply")}
            >
              Apply Now
            </Button>
            <Button size="large" onClick={() => navigate("/projects")}>
              View Projects
            </Button>
          </Space>
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
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <>
                  <IndexText>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={
                        inView && {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }
                      }
                      ref={ref}
                    >
                      <MoshHeader>A focus on community.</MoshHeader>
                      <MoshSubtitle>
                        Our goal is to provide a platform for student
                        organizations to develop their projects and ideas. We
                        want to help students learn about cloud computing and
                        provide their knowledge.
                      </MoshSubtitle>
                    </motion.div>
                  </IndexText>
                  <IndexContent>
                    <motion.div
                      initial={{ x: 10, opacity: 0 }}
                      animate={
                        inView && {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }
                      }
                      ref={ref}
                    >
                      <MoshHeader
                        style={{
                          background:
                            "-webkit-linear-gradient(-70deg, #343a40 0%, #181b1f 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          WebkitBoxDecorationBreak: "clone",
                          paddingBottom: "0",
                        }}
                      >
                        99.9% uptime
                      </MoshHeader>
                      <MoshSubtitle style={{ paddingBottom: "16px" }}>
                        for all UTDesign Makerspace infrastructure
                      </MoshSubtitle>
                      <MoshHeader
                        style={{
                          background:
                            "-webkit-linear-gradient(-70deg, #343a40 0%, #181b1f 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          WebkitBoxDecorationBreak: "clone",
                          paddingBottom: "0",
                        }}
                      >
                        {projectCount} student projects
                      </MoshHeader>
                      <MoshSubtitle style={{ paddingBottom: "16px" }}>
                        currently hosted through MOSH
                      </MoshSubtitle>
                      <MoshHeader
                        style={{
                          background:
                            "-webkit-linear-gradient(-70deg, #343a40 0%, #181b1f 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          WebkitBoxDecorationBreak: "clone",
                          paddingBottom: "0",
                        }}
                      >
                        {devCount} developers
                      </MoshHeader>
                      <MoshSubtitle style={{ paddingBottom: "16px" }}>
                        currently hosting their projects through MOSH
                      </MoshSubtitle>
                    </motion.div>
                  </IndexContent>
                </>
              )}
            </InView>
          </IndexSection>

          <Divider style={{ margin: 0 }} />

          <IndexSection>
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <>
                  <IndexContent
                    style={{
                      position: "relative",
                      paddingBottom: "50%",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        inView && {
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }
                      }
                      ref={ref}
                    >
                      <motion.div
                        style={{
                          position: "absolute",
                          left: "15%",
                          width: "20%",
                          top: 0,
                        }}
                        animate={{
                          y: ["10%", "25%", "10%"],
                        }}
                        transition={{
                          duration: 5,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }}
                      >
                        <StaticImage
                          name="BitBot"
                          filename="index_bitbot.png"
                          style={{
                            display: "block",
                            width: "100%",
                          }}
                        />
                      </motion.div>
                      <motion.div
                        style={{
                          position: "absolute",
                          left: "40%",
                          width: "20%",
                          top: 0,
                        }}
                        animate={{
                          y: ["0%", "15%", "0%"],
                        }}
                        transition={{
                          duration: 5,
                          delay: 0.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }}
                      >
                        <StaticImage
                          name="Moodle"
                          filename="index_moodle.png"
                          style={{
                            display: "block",
                            width: "100%",
                          }}
                        />
                      </motion.div>
                      <motion.div
                        style={{
                          position: "absolute",
                          left: "65%",
                          width: "20%",
                          top: 0,
                        }}
                        animate={{
                          y: ["10%", "25%", "10%"],
                        }}
                        transition={{
                          duration: 5,
                          delay: 1.0,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }}
                      >
                        <StaticImage
                          name="Minecraft server"
                          filename="index_minecraft.png"
                          style={{
                            display: "block",
                            width: "100%",
                          }}
                        />
                      </motion.div>
                      <StaticImage
                        name="Rack server"
                        filename="index_server.png"
                        style={{
                          width: "60%",
                          bottom: 0,
                          left: "20%",
                          position: "absolute",
                          display: "block",
                        }}
                      />
                    </motion.div>
                  </IndexContent>
                  <IndexText style={{ textAlign: "right" }}>
                    <motion.div
                      initial={{ x: 10, opacity: 0 }}
                      animate={
                        inView && {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }
                      }
                      ref={ref}
                    >
                      <MoshHeader>No app restrictions.</MoshHeader>
                      <MoshSubtitle>
                        Outside of open-sourcing your software (if applicable)
                        and a small attribution, there are no restrictions on
                        what you can do with your software as long as it is for
                        the benefit of the UT Dallas community.
                      </MoshSubtitle>
                    </motion.div>
                  </IndexText>
                </>
              )}
            </InView>
          </IndexSection>

          <Divider style={{ margin: 0 }} />

          <IndexSection>
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <>
                  <IndexText>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={
                        inView && {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }
                      }
                      ref={ref}
                    >
                      <MoshHeader>We'll get it done.</MoshHeader>
                      <MoshSubtitle>
                        Want to run your software in a Linux container or
                        virtual machine? We've got you covered. Need to run a
                        database inside of a Docker container? Sure. We'll help
                        you get everything running.
                      </MoshSubtitle>
                    </motion.div>
                  </IndexText>
                  <IndexContent
                    style={{
                      position: "relative",
                      paddingBottom: "50%",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        inView && {
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }
                      }
                      ref={ref}
                    >
                      <motion.div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                        }}
                        animate={{
                          y: ["0%", "3%", "0%"],
                        }}
                        transition={{
                          duration: 5,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }}
                      >
                        <StaticImage
                          name="Ubuntu"
                          filename="index_ubuntu.png"
                          style={{
                            height: "17.5%",
                            top: 0,
                            left: 0,
                            right: 0,
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                          }}
                        />
                        <StaticImage
                          name="Docker"
                          filename="index_docker.png"
                          style={{
                            height: "17.5%",
                            top: "25%",
                            left: 0,
                            right: 0,
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                          }}
                        />
                        <StaticImage
                          name="Fedora"
                          filename="index_fedora.png"
                          style={{
                            height: "17.5%",
                            top: "50%",
                            left: 0,
                            right: 0,
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                          }}
                        />
                      </motion.div>
                      <StaticImage
                        name="Rack server"
                        filename="index_server.png"
                        style={{
                          width: "60%",
                          bottom: 0,
                          left: "20%",
                          position: "absolute",
                          display: "block",
                        }}
                      />
                    </motion.div>
                  </IndexContent>
                </>
              )}
            </InView>
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
                <Button
                  size="large"
                  type="primary"
                  onClick={() => navigate("/apply")}
                >
                  Apply Now
                </Button>
                <Button size="large" onClick={() => navigate("/projects")}>
                  View Projects
                </Button>
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

export const query = graphql`
  query DeveloperQuery {
    allProjectsJson {
      edges {
        node {
          name
          developer
        }
      }
    }
  }
`;

const IndexSection = styled(Row)`
  width: 100%;
  display: grid;
  padding: var(--section-padding) 0;
  gap: 40px;
  align-items: center;

  grid-template-columns: repeat(6, 1fr);

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const IndexText = styled.div`
  grid-column: span 6;
  grid-row-end: span 2;

  @media screen and (max-width: 1025px) {
    text-align: left !important;
    order: 1;
  }
`;

const IndexContent = styled.div`
  grid-column: span 6;
  grid-row-end: span 2;
`;
