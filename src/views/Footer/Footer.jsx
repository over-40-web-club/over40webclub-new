import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social: { facebook, github, linkedin, medium, twitter, homepage, instagram, youtube },
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={3} className="my-3 my-lg-0">
            {homepage ? <SocialIcons.Homepage url={homepage} /> : null}
            {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
            {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
            {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
            {github ? <SocialIcons.Github userName={github} /> : null}
            {medium ? <SocialIcons.Medium userName={medium} /> : null}
            {instagram ? <SocialIcons.Instagram userName={instagram} /> : null}
            {youtube ? <SocialIcons.Youtube url={youtube} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <a className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
            <a href={termsHref}>{termsText}</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
