import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = function ({ className, frontmatter }) {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(sort: { order: ASC, fields: data___Order }) {
        nodes {
          data {
            Name
            Bio
            Homepage_URL
            Twitter_username
            GitHub_username
            Instagram_username
            YouTube_URL
            Photo {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    width: 200
                    layout: FIXED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
  } = frontmatter;

  // GraphQLで取得したAirtableのデータを元のスターターの形式のオブジェクト配列に設定
  const teamMembers = [];
  data.allAirtable.nodes.forEach((node) => {
    const member = node.data;
    teamMembers.push({
      imageFile: member.Photo.localFiles[0],
      imageAlt: member.Name,
      header: member.Name,
      subheader: member.Bio,
      social: {
        homepage: member.Homepage_URL,
        twitter: member.Twitter_username,
        github: member.GitHub_username,
        instagram: member.Instagram_username,
        youtube: member.YouTube_URL,
      },
    });
  });

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {teamMembers.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header}>
            <TeamMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <Markdown className="large text-muted">{rootContent}</Markdown>
        </Col>
      </Row>
    </PageSection>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  teamMember: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
  teamMember: null,
};

export default Team;
