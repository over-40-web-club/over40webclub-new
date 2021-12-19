/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = function ({
  lang,
  title,
  ogTitle,
  twitterTitle,
  description,
  ogDescription,
  twitterDescription,
  image,
  meta,
  keywords,
  url,
  facebookAppId,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            ogTitle
            twitterTitle
            description
            ogDescription
            twitterDescription
            image
            url
            author
            facebookAppId
          }
        }
      }
    `,
  );

  const metaOgTitle = ogTitle || site.siteMetadata.ogTitle || title;
  const metaTwitterTitle = twitterTitle || site.siteMetadata.twitterTitle || metaOgTitle;

  const metaDescription = description || site.siteMetadata.description;
  const metaOgDescription = ogDescription || site.siteMetadata.ogDescription || metaDescription;
  const metaTwitterDescription = twitterDescription || site.siteMetadata.metaTwitterDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: image,
        },
        {
          name: `og:url`,
          content: url,
        },
        {
          property: `og:title`,
          content: metaOgTitle,
        },
        {
          property: `og:description`,
          content: metaOgDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTwitterTitle,
        },
        {
          name: `twitter:description`,
          content: metaTwitterDescription,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `fb:app_id`,
          content: facebookAppId,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    />
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  url: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  ogTitle: PropTypes.string,
  twitterTitle: PropTypes.string,
  description: PropTypes.string,
  ogDescription: PropTypes.string,
  twitterDescription: PropTypes.string,
  image: PropTypes.string.isRequired,
  facebookAppId: PropTypes.string,
};

SEO.defaultProps = {
  lang: "ja",
  url: "",
  meta: [],
  keywords: [],
  ogTitle: "",
  twitterTitle: "",
  description: "",
  ogDescription: "",
  twitterDescription: "",
  facebookAppId: "",
};

export default SEO;
