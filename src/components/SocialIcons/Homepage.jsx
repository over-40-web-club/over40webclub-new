import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Homepage = ({ url }) => (
  <CircleIcon href={url} iconName="HomepageIcon" />
);

Homepage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Homepage;
