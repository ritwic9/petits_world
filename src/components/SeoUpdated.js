// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, pathname, article, keywords }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            twitterUsername
            keywords
          }
        }
      }
    `
  );

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    twitterUsername,
    keywords: defaultKeywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || "/"}`,
    keywords: keywords || defaultKeywords,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.keywords && seo.keywords.length > 0 && (
        <meta name="keywords" content={seo.keywords.join(", ")} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:url" content={seo.url} />
      {article ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
