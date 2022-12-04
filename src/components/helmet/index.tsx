import React from "react";
import { Helmet } from "react-helmet";
import Icon from "../../images/icon.png";

interface HelmetType {
  title?: string;
  description?: string;
  image?: string;
}

const HelmetComponent = ({ title, description, image }: HelmetType) => {
  const newTitle = title
    ? `${title} - Makerspace Open-Source Hosting`
    : `Makerspace Open-Source Hosting`;

  const newDescription = description
    ? description
    : "UTDesign Makerspace is offering free cloud computing to UT Dallas student organizations with open-source software through its Makerspace Open-Source Hosting (MOSH) program.";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{newTitle}</title>
      <meta
        name="title"
        content={title ? title : "Makerspace Open-Source Hosting"}
      />
      <meta name="description" content={newDescription} />
      <meta name="theme-color" content="##bad1cd" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={image ? "article" : "website"} />
      <meta
        property="og:title"
        content={title ? title : "Makerspace Open-Source Hosting"}
      />
      <meta property="og:site_name" content="Makerspace Open-Source Hosting" />
      <meta property="og:description" content={newDescription} />
      <meta property="og:image" content={image ? image : Icon} />

      {/* Twitter */}
      <meta
        property="twitter:title"
        content={title ? title : "Makerspace Open-Source Hosting"}
      />
      <meta property="twitter:description" content={newDescription} />
      <meta property="twitter:image" content={image ? image : Icon} />
      {image && <meta property="twitter:card" content="summary_large_image" />}
    </Helmet>
  );
};

export default HelmetComponent;
