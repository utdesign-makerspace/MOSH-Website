import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

interface StaticImageProps {
  name: string;
  filename: string;
  style?: React.CSSProperties;
}

const IndexImage = (props: StaticImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: NONE)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      return (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          alt={props.name}
          title={props.name}
          objectFit="contain"
          style={props.style}
        />
      );
    }}
  />
);

export default IndexImage;
