import React from "react";
import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as SocialIcons from "components/SocialIcons";

import "./TeamMember.scss";

const TeamMember = ({
  imageFile,
  imageAlt,
  header,
  subheader,
  social: { homepage, twitter, facebook, linkedin, github, medium, instagram, youtube },
}) => {
  const homepagePart = homepage ? <SocialIcons.Homepage url={homepage} /> : null;
  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;
  const instagramPart = instagram ? <SocialIcons.Instagram userName={instagram} /> : null;
  const youtubePart = youtube ? <SocialIcons.Youtube url={youtube} /> : null;

  return (
    <div className="team-member">
      <GatsbyImage
        image={getImage(imageFile)}
        alt={imageAlt}
        placeholder="tracedSVG"
        className="mx-auto circle rounded-circle"
      />
      <h4>{header}</h4>
      <p className="text-muted">
        <Markdown>{subheader}</Markdown>
      </p>
      <div>
        {homepagePart}
        {twitterPart}
        {facebookPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
        {instagramPart}
        {youtubePart}
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageFile: PropTypes.object.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  social: PropTypes.shape({
    homepage: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
    instagram: PropTypes.string,
    youtube: PropTypes.string,
  }),
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  social: {
    homepage: null,
    twitter: null,
    facebook: null,
    linkedin: null,
    github: null,
    medium: null,
    instagra: null,
  },
};

export default TeamMember;
